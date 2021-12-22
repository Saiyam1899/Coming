import React, { Suspense } from "react";

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
    };
    this.ClaimReward = this.ClaimReward.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  ClaimReward() {
    if (this.state.contract !== null) {
      if (
        this.state.tFollow &&
        this.state.tTweet &&
        this.state.telegram &&
        this.state.fShare &&
        this.state.fLike
      ) {
        this.state.contract
          .buyToken()
          .then((data) => alert(`This is the Transaction Hash: ${data.hash}`))
          .catch((err) => {
            if (err.code == 4001) {
              alert("You Denied this Transaction");
            } else if (err.code === -32603) {
              alert("You have already claimed");
              this.setState({
                tFollow: false,
                tTweet: false,
                telegram: false,
                fShare: false,
                fLike: false,
                isReward: false,
                contract: null,
              });
            }
          });
      } else {
        alert("Please complete all below mentioned tasks");
      }
    } else {
      alert("Please Connect with Metamask");
    }
  }

  componentDidMount() {
    try {
      window.ethereum.on("accountsChanged", () => {
        this.setState({
          tFollow: false,
          tTweet: false,
          telegram: false,
          fShare: false,
          fLike: false,
          address: "",
          contract: null,
          isReward: false,
        });
        this.initialize();
      });
    } catch (e) {
      alert("Please Install metamask app");
    }
  }

  //initialize function for
  async initialize() {
    //When metamask is Installed
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
        console.log(this.state.changed);

        // Account Balance Check
      } else {
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

      // this.setState({
      //   address: account[0],
      // });
    } else {
      alert("MetaMask is not installed!");
    }
  }

  render() {
    // window.location.reload(true)
    return (
      <>
        <div className="one">
          <FirstSection
            first={this.state.fLike}
            firstClick={() => this.setState({ fLike: !this.state.fLike })}
            countInc={() => this.setState({ count: !this.state.count + 1 })}
            count={this.state.count}
          />
          <SecondSection
            second={this.state.fShare}
            second2={this.state.tFollow}
            secondClick={() => this.setState({ fShare: !this.state.fShare })}
            secondTwitter={() =>
              this.setState({ tFollow: !this.state.tFollow })
            }
          />
          <ThirdSection
            third={this.state.tTweet}
            thirdClick={() => this.setState({ tTweet: !this.state.tTweet })}
          />
          <FinalSection
            fourth={this.state.telegram}
            claimReward={this.ClaimReward}
            connect={this.initialize}
            isReward={this.state.isReward}
            address={this.state.address}
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
