async function connectWalletConnect() {
  try {
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;
    let web3Modal;
    provider = new WalletConnectProvider({
      rpc: {
        1: "https://mainnet.infura.io/v3/3eca30b0aa6a4372ac8552a1c09a8ccd",
        56: "https://bsc-dataseed.binance.org/",
      },
      qrcode: true,
      qrcodeModalOptions: {
        mobileLinks: ["metamask", "trust"],
      },
    });
    await provider.enable();
    setTimeout(async function () {
      const web3 = new Web3(provider);
      let chainId = await web3.eth.getChainId();
      if (chainId == 56 || chainId == 1) {
        wallet = "walletconnect";
        connectWalletMetamask(provider);
        console.log(provider);
      } else {
        onDisconnect();
      }
    }, 1000);
  } catch (e) {
    return;
  }
}
