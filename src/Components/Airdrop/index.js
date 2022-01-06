import React, { Suspense } from "react";
import { Modal } from "react-bootstrap";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ContactAddress, ABI } from "./Functionlity/config";
import { ethers } from "ethers";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FinalSection from "./FinalSection";
import Web3 from "web3";

export default class Airdrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tFollow: false,
      tTweet: false,
      telegram: false,
      count: 0,
      fShare: false,
      fLike: false,
      address: "",
      contract: null,
      isReward: false,
      changed: false,
      fLikeCounter: false,
      fShareCOUNTER: false,
      TFollowCounter: false,
      tTweetCounter: false,
      telegramCounter: false,
      connect: false,
      showModal: false,
      isWalletConnect: false,
    };
    this.ClaimReward = this.ClaimReward.bind(this);
    this.initialize = this.initialize.bind(this);
    this.Connect = this.Connect.bind(this);
    this.Disonnect = this.Disonnect.bind(this);
    this.WalletConnect = this.WalletConnect.bind(this);
    this.isWalletConnected = this.isWalletConnected.bind(this);
    console.log(this.state.fLikeCounter);
  }

  isWalletConnected() {
    this.setState({ showModal: false, connect: true });
  }
  async ClaimReward() {
    // alert("work");

    if (
      !(
        this.state.tFollow &&
        this.state.tTweet &&
        this.state.telegram &&
        this.state.fShare &&
        this.state.fLike &&
        this.state.tTweetCounter &&
        this.state.telegramCounter &&
        this.state.TFollowCounter &&
        this.state.fLikeCounter &&
        this.state.fShareCOUNTER
      )
    ) {
      alert("Please Complete Above Tasks ");
    } else {
      alert("All tasks are done");
    }
    if (window.ethereum !== undefined && this.state.isWalletConnect === false) {
//       alert("PC ");
      if (this.state.contract !== null) {
        if (
          this.state.tFollow &&
          this.state.tTweet &&
          this.state.telegram &&
          this.state.fShare &&
          this.state.fLike &&
          this.state.tTweetCounter &&
          this.state.telegramCounter &&
          this.state.TFollowCounter &&
          this.state.fLikeCounter &&
          this.state.fShareCOUNTER
        ) {
          this.state.contract
            .buyToken()
            .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
            .catch((err) => {
              if (err.code == 4001) {
                alert("You Denied This Transaction");
              } else if (err.code === -32603) {
                alert("You have already claimed");
                this.setState({
                  tFollow: false,
                  tTweet: false,
                  telegram: false,
                  fShare: false,
                  fLike: false,
                  isReward: false,
                  tTweetCounter: false,
                  TFollowCounter: false,
                  fLikeCounter: false,
                  fShareCOUNTER: false,
                  telegramCounter: false,
                  contract: null,
                  connect: false,
                });
              }
            });
        } else {
          alert("Please complete above tasks");
        }
      } else {
        // alert("PC: Copntract Null");
      }
    } else if (
      window.ethereum !== undefined &&
      this.state.isWalletConnect === true
    ) {
//       alert("PC Mobile  ");

      if (
        this.state.tFollow &&
        this.state.tTweet &&
        this.state.telegram &&
        this.state.fShare &&
        this.state.fLike &&
        this.state.tTweetCounter &&
        this.state.telegramCounter &&
        this.state.TFollowCounter &&
        this.state.fLikeCounter &&
        this.state.fShareCOUNTER
      ) {
        await window.AirDropContract.methods
          .buyToken()
          .send({ from: this.state.address })
          .then((d) => console.log(d))
          .catch((e) => {console.log(e);
                        alert("Oops! Something Went Wrong.")
                        });
      } else {
        alert("Please do above tasks");
      }
    } else if (
      window.ethereum === undefined &&
      this.state.isWalletConnect === true
    ) {
//       alert("Mobile  ");
      if (
        this.state.tFollow &&
        this.state.tTweet &&
        this.state.telegram &&
        this.state.fShare &&
        this.state.fLike &&
        this.state.tTweetCounter &&
        this.state.telegramCounter &&
        this.state.TFollowCounter &&
        this.state.fLikeCounter &&
        this.state.fShareCOUNTER
      ) {
        await window.AirDropContract.methods
          .buyToken()
          .send({ from: this.state.address })
          .then((d) => console.log(d))
          .catch((e) => {console.log(e);
                        alert("Oops! Something Went Wrong.")
                        });
      } else {
        alert("Please do above tasks");
      }
    }

    // if (window.ethereum !== undefined) {
    //   if (this.state.contract !== null) {
    //     if (
    //       this.state.tFollow &&
    //       this.state.tTweet &&
    //       this.state.telegram &&
    //       this.state.fShare &&
    //       this.state.fLike &&
    //       this.state.tTweetCounter &&
    //       this.state.telegramCounter &&
    //       this.state.TFollowCounter &&
    //       this.state.fLikeCounter &&
    //       this.state.fShareCOUNTER
    //     ) {
    //       this.state.contract
    //         .buyToken()
    //         .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
    //         .catch((err) => {
    //           if (err.code == 4001) {
    //             alert("You Denied This Transaction");
    //           } else if (err.code === -32603) {
    //             alert("You have already claimed");
    //             this.setState({
    //               tFollow: false,
    //               tTweet: false,
    //               telegram: false,
    //               fShare: false,
    //               fLike: false,
    //               isReward: false,
    //               tTweetCounter: false,
    //               TFollowCounter: false,
    //               fLikeCounter: false,
    //               fShareCOUNTER: false,
    //               telegramCounter: false,
    //               contract: null,
    //               connect: false,
    //             });
    //           }
    //         });
    //     } else {
    //       console.log("this.state.tFollow", this.state.tFollow);
    //       console.log("this.state.tTweet", this.state.tTweet);
    //       console.log("this.state.telegram", this.state.telegram);
    //       console.log("this.state.fShare", this.state.fShare);
    //       console.log("this.state.fLike", this.state.fLike);
    //       console.log("this.state.isReward", this.state.isReward);
    //       console.log("tTweetCounter", this.state.tTweetCounter);
    //       console.log("TFollowCounter", this.state.TFollowCounter);
    //       console.log("this.state.fLikeCounter", this.state.fLikeCounter);
    //       console.log("this.state.fShareCOUNTER", this.state.fShareCOUNTER);
    //       console.log("telegramCounter", this.state.telegramCounter);

    //       alert("Meta makas : Please complete all below mentioned tasks");
    //     }
    //   }
    // }
    // if (this.state.isWalletConnect === true && window.ethereum === undefined) {
    //   if (
    //     this.state.tFollow &&
    //     this.state.tTweet &&
    //     this.state.telegram &&
    //     this.state.fShare &&
    //     this.state.fLike &&
    //     this.state.tTweetCounter &&
    //     this.state.telegramCounter &&
    //     this.state.TFollowCounter &&
    //     this.state.fLikeCounter &&
    //     this.state.fShareCOUNTER
    //   ) {
    //     await window.AirDropContract.methods
    //       .buyToken()
    //       .send({ from: this.state.address })
    //       .then((d) => console.log(d))
    //       .catch((e) => console.log(e));
    //   }

    //   this.setState({ isWalletConnect: false });
    // } else {
    //   console.log("this.state.tFollow", this.state.tFollow);
    //   console.log("this.state.tTweet", this.state.tTweet);
    //   console.log("this.state.telegram", this.state.telegram);
    //   console.log("this.state.fShare", this.state.fShare);
    //   console.log("this.state.fLike", this.state.fLike);
    //   console.log("this.state.isReward", this.state.isReward);
    //   console.log("tTweetCounter", this.state.tTweetCounter);
    //   console.log("TFollowCounter", this.state.TFollowCounter);
    //   console.log("this.state.fLikeCounter", this.state.fLikeCounter);
    //   console.log("this.state.fShareCOUNTER", this.state.fShareCOUNTER);
    //   console.log("telegramCounter", this.state.telegramCounter);
    //   alert("Trust : Please complete all below mentioned tasks");
    // }
  }

  componentDidMount() {
    if (window.ethereum !== undefined) {
      try {
        window.ethereum.on("accountsChanged", () => {
          // this.setState({
          //   tFollow: ,
          //   tTweet: false,
          //   telegram: false,
          //   fShare: false,
          //   fLike: false,
          //   address: "",
          //   contract: null,
          //   isReward: false,
          //   tTweetCounter: false,
          //   TFollowCounter: false,
          //   fLikeCounter: false,
          //   fShareCOUNTER: false,
          //   telegramCounter: false,
          // });
        });
      } catch (e) {
        alert("Please Install metamask app");
      }
    } else {
    }
  }

  //initialize function for

  async initialize() {
    if (this.state.connect) {
      console.log("yes");

      this.setState({
        contract: null,
        connect: false,
      });
    }
    //When metamask is Installed
    else if (!this.state.connect) {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");

        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        var web3 = new Web3(window.ethereum);

        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });

        window.account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });
        if ((await web3.eth.getChainId()) === 56) {
          console.log("yess");
          this.setState({ connect: true, showModal: false });
          console.log(this.state.changed);

          // Account Balance Check
        } else {
          this.setState({ connect: false });
          this.setState({ changed: true });
          alert("Please switch ");
        }

        const signer = await provider.getSigner();

        //Get Account details from metamask
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(new ethers.Contract(ContactAddress, ABI, signer));
        //Create the contract
        this.setState({
          address: account[0],
          contract: new ethers.Contract(ContactAddress, ABI, signer),
          isReward: true,
        });
      } else {
        alert("Metamask not work use TrustWallet Option");
      }
    } else {
      alert("MetaMask is not installed!");
    }
  }

  Connect() {
    this.setState({ showModal: true });
  }

  Disonnect() {
    this.setState({ showModal: false, connect: false });
  }

  async WalletConnect() {
    //initial State
    localStorage.removeItem("walletconnect");

    let provider = undefined;
    try {
      provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        qrcodeModalOptions: {
          mobileLinks: ["metamask"],
        },
      });

      await provider.enable();
      setTimeout(async function () {
        const web3 = new Web3(provider);
        let chainId = await web3.eth.getChainId();
        if (chainId == 56) {
          console.log("walletconnect");
          console.log("====================================");
          console.log(provider);
          console.log("====================================");
          connectWalletMetamask(provider);
        } else {
          this.DisconnectModal();
        }
      }, 1000);
    } catch (e) {
      return;
    }
    const connectWalletMetamask = async (provider) => {
      this.setState({ showModal: false, connect: true });
      localStorage.removeItem("bitchro");
      if (provider) {
        let web3 = new Web3(provider);
        let chainId = await web3.eth.net.getId();
        const accounts = await web3.eth.getAccounts();

        console.log(chainId);
        const connectedAccount = accounts[0];
        console.log(connectedAccount);

        if (chainId == 56) {
          alert("BNB");

          window.AirDropContract = new web3.eth.Contract(ABI, ContactAddress);
          console.log(window.AirDropContract);
          this.setState({ address: connectedAccount, isWalletConnect: true });
          // console.log(
          //   await window.AirDropContract.methods
          //     .buyToken()
          //     .send({ from: connectedAccount })
          // );
          // .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
          // .catch((err) => {
          //   if (err.code == 4001) {
          //     alert("You Denied This Transaction");
          //   } else if (err.code === -32603) {
          //     alert("You have already claimed");
          //     this.setState({
          //       tFollow: false,
          //       tTweet: false,
          //       telegram: false,
          //       fShare: false,
          //       fLike: false,
          //       isReward: false,
          //       tTweetCounter: false,
          //       TFollowCounter: false,
          //       fLikeCounter: false,
          //       fShareCOUNTER: false,
          //       telegramCounter: false,
          //       contract: null,
          //       connect: false,
          //     });
          //   }
          // });

          // this.setState({
          //   address: connectedAccount,
          //   connect: true,
          //   disable: true,
          //   contract: BSDContract,
          //   balance:
          //     (await BSDContract.methods.balanceOf(connectedAccount).call()) /
          //     10 ** 18,
          // });

          // window.WalletConnect = new web3.eth.Contract(
          //   ContractABI,
          //   ContractAddress
          // );

          // console.log(window.WalletConnect);
        }
      }
    };
  }
  render() {
    // window.location.reload(true)
    return (
      <>
        <div className="one">
          <MyVerticallyCenteredModal
            showModal={this.state.showModal}
            DisconnectModal={this.Disonnect}
            MetamaskWalletConnect={this.initialize}
            WalletConnect={this.WalletConnect}
          />
          <FirstSection
            first={this.state.fLike}
            firstCounter={this.state.fLikeCounter}
            firstClick={() => this.setState({ fLike: !this.state.fLike })}
            likeFb={() =>
              this.setState({ fLikeCounter: !this.state.fLikeCounter })
            }
          />
          <SecondSection
            second={this.state.fShare}
            second2={this.state.tFollow}
            shareFb={() =>
              this.setState({ fShareCOUNTER: !this.state.fShareCOUNTER })
            }
            followTwitter={() =>
              this.setState({ TFollowCounter: !this.state.TFollowCounter })
            }
            secondClick={() => this.setState({ fShare: !this.state.fShare })}
            secondTwitter={() =>
              this.setState({ tFollow: !this.state.tFollow })
            }
          />
          <ThirdSection
            shareTwitter={() =>
              this.setState({ tTweetCounter: !this.state.tTweetCounter })
            }
            third={this.state.tTweet}
            thirdClick={() => this.setState({ tTweet: !this.state.tTweet })}
          />
          <FinalSection
            fourth={this.state.telegram}
            followTelegram={() =>
              this.setState({ telegramCounter: !this.state.telegramCounter })
            }
            claimReward={this.ClaimReward}
            // connect={this.initialize}
            connect={this.Connect}
            disconnect={this.Disonnect}
            isReward={this.state.isReward}
            address={this.state.address}
            checkConnect={this.state.connect}
            count={() => this.setState({ count: this.state.count + 1 })}
            fourthClick={() =>
              this.setState({ telegram: !this.state.telegram })
            }
          />
        </div>
      </>
    );
  }
}
function MyVerticallyCenteredModal(props) {
  return (
    <div className="gdjhfgfjh">
      <Modal
        show={props.showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // dialogClassName="modal-50w"
        size="sm"
        onHide={props.DisconnectModal}
      >
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
            color: "#fff",
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Connect Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#dcdcdc",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "999px",
              padding: "10px 5px",
              backgroundColor: "#fff",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            }}
            onClick={props.MetamaskWalletConnect}
          >
            <button
              style={{
                outline: "none",
                background: "transparent",
                border: "none",
              }}
            >
              MetaMask
            </button>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png"
              }
              width="32px"
            />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "999px",
              backgroundColor: "#fff",
              padding: "10px 5px",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            }}
            onClick={props.WalletConnect}
          >
            <button
              style={{
                outline: "none",
                background: "transparent",
                border: "none",
              }}
            >
              Wallet Connect
            </button>
            <img
              src={
                "https://bcmhunt.com/static/media/wallet-connect.dcbdafe7.ico"
              }
              width={"32px"}
            />
          </div>
          <hr
            style={{
              background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
              color: "#fff",
            }}
          ></hr>
        </Modal.Body>
      </Modal>
    </div>
  );
}
