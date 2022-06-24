import { InjectedConnector } from "@web3-react/injected-connector";

/**
 * 1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
 * 
 */

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 31337, 80001], // support for ethereum testnets and mumbai testnet
});
