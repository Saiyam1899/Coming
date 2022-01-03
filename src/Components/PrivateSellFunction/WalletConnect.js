import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletconnect = new WalletConnectConnector({
  rpc: { 1:"" },
  infuraId: "",
  bridge: "",
  qrcode: true,
  pollingInterval: 15000,
});
