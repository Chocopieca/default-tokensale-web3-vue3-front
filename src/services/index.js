import Web3Service from './web3'

export default () => {
  return {
    web3Service: new Web3Service(),
  }
}
