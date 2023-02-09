import {defineStore} from "pinia";
import * as abi from "../abis";

export const useWeb3Store = defineStore("web3", {
  state: () =>
    ({
      isConnect: false,
      tokens: {
        SharkContract: {},
        USDTContract: {},
        PrivateContract: {},
        PublicContract: {},
        AdminWalletContract: {},
      },
      rates: {
        PrivateRate: 0,
        PublicRate: 0,
      },
      userInfo: {
        PrivateInfo: {},
        PublicInfo: {},
      },
      SharkBalance: 0,
      account: {},
      adminRounds: {},
    }),
  getters: {
    isConnected: (state) => state.isConnected,
    getTokens: (state) => state.tokens,
    getAccount: (state) => state.account,
    setSharkBalance: (state) => state.SharkBalance,
    setRates: (state) => state.rates,
    getUserInfo: (state) => state.userInfo,
    getRounds: (state) => state.adminRounds,
  },
  actions: {
    async ConnectToMetamask() {
      try {
        await this.connect();
        // await this.initEthContracts();
        // await this.getContractsData();
      } catch (e) {
        console.log(e);
        throw new Error(`ConnectToMetamask store failed: ${e}`)
      }
    },
    async connect() {
      try {
        const instance = await this.$services.web3Service.initWeb3();
        // this.account = instance.currentProvider.selectedAddress;
        this.isConnect = true;
      } catch (e) {
        this.isConnect = false;
        throw new Error(`Web3 connect error: ${e}`)
      }
    },
    async initEthContracts() {
      await Promise.all([
        // this.initPrivateContract(),
        // this.initAdminWalletContract(),
        this.initSharkContract(),
        // this.initUSDTContract(),
      ]);
    },
    async getContractsData() {
      await Promise.all([
        this.getSharkBalance(),
        // this.getPrivateRate(),
        // this.getPrivateUserInfo(),
      ]);
    },
    async initSharkContract() {
      const [abs, address] = [abi.SharkAbi, import.meta.env.VITE_SHARK_TOKEN];

      const SharkContract = await this.$services.web3Service.initWeb3Contract(abs, address);

      this.tokens = { ...this.tokens, SharkContract };
    },
    async initUSDTContract() {
      const [abs, address] = [abi.USDTAbi, import.meta.env.VITE_USDT_TOKEN];

      const USDTContract = await this.$services.web3Service.initWeb3Contract(abs, address);

      this.tokens = { ...this.tokens, USDTContract };
    },
    async initPrivateContract() {
      const [abs, address] = [abi.PrivateAbi, import.meta.env.VITE_PRIVATE_CONTRACT];

      const PrivateContract = await this.$services.web3Service.initWeb3Contract(abs, address);

      this.tokens = { ...this.tokens, PrivateContract };
    },
    async initAdminWalletContract() {
      const [abs, address] = [abi.AdminWallet, import.meta.env.VITE_ADMIN_WALLET];

      const AdminWalletContract = await this.$services.web3Service.initWeb3Contract(abs, address);

      this.tokens = { ...this.tokens, AdminWalletContract };
    },
    async initPublicContract() {
      const [abs, address] = [abi.PublicAbi, import.meta.env.VITE_PUBLIC_CONTRACT];

      const PublicContract = await this.$services.web3Service.initWeb3Contract(abs, address);

      this.tokens = { ...this.tokens, PublicContract };
    },
    async getSharkBalance() {
      const address = this.account.address;
      const result = await this.tokens.SharkContract.instance.methods
        .balanceOf(address)
        .call();
      const val = this.$services.web3Service.web3.utils.fromWei(result);
      this.SharkBalance = Number.isInteger(val) ? val : Number(val).toFixed(4);
    },
    async getPrivateRate() {
      this.rates.PrivateRate = await this.$services.web3Service
        .getContractRate(
          this.tokens.PrivateContract.instance
        )
    },
    async getPrivateUserInfo() {
      this.userInfo.PrivateInfo = await this.$services.web3Service
        .getUserInfo(
          this.tokens.PrivateContract.instance
        )
    },
    async getPublicRate() {
      this.rates.PublicRate = await this.$services.web3Service
        .getContractRate(
          this.tokens.PublicContract.instance
        )
    },
    async getPublicUserInfo() {
      this.userInfo.PublicInfo = await this.$services.web3Service
        .getUserInfo(
          this.tokens.PublicContract.instance
        )
    },
    async getAdminRounds() {
      const address = this.account.address;
      const result = await this.tokens.AdminWalletContract.methods
        .getRounds().call({from: address});
      this.adminRounds = result.map(item => {
        return {
          name: item.name,
          totalAmount: item.totalAmount,
          totalClaimed: item.totalClaimed,
        }
      });
    },
  },
});
