import ApiService from "./api";
import Web3 from 'web3';
import Onboardv2 from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import fortmaticModule from '@web3-onboard/fortmatic'
import moment from "moment";

export default class Web3Service extends ApiService {
  constructor() {
    super();
    this.web3 = Web3;
    this.web3Instance = null;
    this.initOnboard = null;
  }

  async initWeb3() {
    try {
      const NETWORK_ID = import.meta.env.VITE_NETWORK_ID;

      if (this.initOnboard === null) await this.initOnboardV2Modul();

      const selectStatus = await this.initOnboard.connectWallet();

      await this.initOnboard.setChain({
        wallet: 'MetaMask',
        chainId: `0x${NETWORK_ID}`
      });

      if (selectStatus) {
        this.web3Instance = new this.web3(window.ethereum);
        return this.web3Instance;
      } else console.log('Connection select fail')

    } catch (err) {
      this.web3Instance = undefined;
      console.log('Init web3 failed: ', err.message);
      return this.web3Instance
    }
  };

  async initOnboardV2Modul() {
    const FORTMATIC_KEY = import.meta.env.VITE_FORTMATIC_KEY;
    const INFURA_KEY = import.meta.env.VITE_INFURA_KEY;

    const injected = await injectedModule();
    const fortmatic = await fortmaticModule({ apiKey: FORTMATIC_KEY })

    this.initOnboard = await Onboardv2({
      wallets: [injected, fortmatic],
      chains: [
        {
          id: '0x1',
          token: 'ETH',
          label: 'Ethereum Mainnet',
          rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`
        },
        {
          id: '0x61',
          token: 'BNB',
          label: 'Smart Chain - Testnet',
          rpcUrl: `https://data-seed-prebsc-1-s1.binance.org:8545/`
        },
      ],
      appMetadata: {
        name: 'Shark',
        // icon: '../logo.svg',
        description: 'Shark using Onboard',
        recommendedInjectedWallets: [
          { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
          { name: 'MetaMask', url: 'https://metamask.io' }
        ]
      }
    })
  }

  async signTrx(amount, address) {
    try {
      const data = this.web3.utils.soliditySha3({ type: 'uint256', value: amount });
      return {
        sign: await this.web3Instance.eth.personal.sign(data, address),
        msgHash: data,
      };
    } catch (e) {
      console.log('signTrx failed: ', e);
    }
  };

  async initWeb3Contract(abi, address, withDecimals = false) {
    try {
      const address = await this.web3Instance.eth.getCoinbase();
      const instance = await new this.web3Instance.eth.Contract(
        abi, address,
        {from: address}
      );
      const payload = {
        address,
        instance,
      };

      if(withDecimals) {
        payload.decimals = +await instance.methods.decimals().call();
      }
      return Object.freeze(payload);
    } catch (e) {
      console.log('initWeb3Contract failed: ', e.message);
    }
  };

  getChainTypeById(chainId) {
    if (+chainId === 1 || +chainId === 4) {
      return 0;
    }
    if (+chainId === 56 || +chainId === 97) {
      return 1;
    }
    if (+chainId === 80001 || +chainId === 137) {
      return 2;
    }
    return -1;
  };

  convertInfo(obj) {
    const { amount_, available_, claimed_, currentLockTime_} = obj;
    return {
      amount: Number.isInteger(amount_ * 10e-19) ?
        amount_ * 10e-19 :
        (amount_ * 10e-19).toFixed(4),
      available: Number.isInteger(available_ * 10e-19) ?
        available_ * 10e-19 :
        (available_ * 10e-19).toFixed(4),
      claimed: Number.isInteger(claimed_ * 10e-20) ?
        claimed_ * 10e-20 :
        (claimed_ * 10e-20).toFixed(4),
      currentLockTime: currentLockTime_,
      dateString: moment(currentLockTime_ * 1000)
        .format('MMMM DD, YYYY')
        .toUpperCase() || 'Next claim date is not available'
    }
  }

  async getContractRate(instance) {
    const result = await instance.methods
      .rate().call();
    return result / 10e+6;
  }

  async getUserInfo(instance) {
    const address = await this.web3Instance.eth.getCoinbase();
    const result = await instance.methods
      .getUserInfo(address)
      .call({from: address});
    return this.convertInfo(result);
  }

  async allowance(instance, spender) {
    try {
      const address = await this.web3Instance.eth.getCoinbase();
      return await instance.methods
        .allowance(address, spender)
        .call({ from: address })
    } catch (e) {
      console.log('allowance', e);
      throw e;
    }
  }

  async approve(instance, spender, amount) {
    try {
      const address = await this.web3Instance.eth.getCoinbase();
      const estimateGas = await instance.methods
        .approve(spender, amount)
        .estimateGas({ from: address });
      await instance.methods
        .approve(spender, amount)
        .send({ from: address, gas: estimateGas,});
    } catch (e) {
      console.log('Approve', e);
      throw e;
    }
  }

  async swap(instance, value) {
    try {
      const address = await this.web3Instance.eth.getCoinbase();
      return await instance.methods
        .swap(value)
        .send({ from: address, gas: '300000'})
    } catch (e) {
      console.log('swapUsdt', e);
      throw e;
    }
  }

  async claim(instance) {
    try {
      const address = await this.web3Instance.eth.getCoinbase();
      return await instance.methods
        .claim()
        .send({ from: address })
    } catch (e) {
      console.log('claimHardcoin', e);
      throw e;
    }
  }
}
