import React from "react";
import Header from "./Header";
import MainComponent from "./MainContent";
import { ethers } from "ethers";
import Web3 from "web3";

import { ContractABI, ContractAddress, BUSDABI, BUSDaddress } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      wallet_add: "",
      connect: false,
      from: "",
      to: 0,
      prefrom: 0,
      balance: 0,
      isAmmountHigh: false,
      approve: false,
      disable: true,
      contract: null,
      approvedHash: null,
      TransactionHash: null,
    };

    // this.Transfer = this.Transfer.bind(this);
    this.initialize = this.initialize.bind(this);
    this.ChangeForm = this.ChangeForm.bind(this);
    this.Approve = this.Approve.bind(this);
    this.BuyNow = this.BuyNow.bind(this);
    this.CheckApproved = this.CheckApproved.bind(this);
    this.DisconnectMeta = this.DisconnectMeta.bind(this);
    this.networkChanged = this.networkChanged.bind(this);
    this.accountsChanged = this.accountsChanged.bind(this);
    this.Connect = this.Connect.bind(this);
  }

  //CheckApproved Function
  CheckApproved(Fdata) {
    if (Fdata == "") {
      this.setState({ from: "" });
    }
    if (this.state.connect === true) {
      if (this.state.balance > Fdata && Fdata >= 0) {
        this.setState({ disable: false, isAmmountHigh: false });
      } else {
        this.setState({ disable: true, isAmmountHigh: true });
      }
    }
  }

  //Approve Function
  async Approve() {
    let ammount = this.state.from * 10 ** 18;
    let approve = await this.state.contract.methods.approve(
      ContractAddress,
      Web3.utils.toBN(ammount)
    );
    approve
      .send({ from: this.state.address })
      .then((d) => {
        this.setState({ disable: d.status, approve: d.status });
      })
      .catch((err) => {
        if (err.code === 4001) {
          alert("denied transaction");
        }
      });
    this.setState({ prefrom: this.state.from });
  }

  //Get From data
  ChangeForm(data) {
    this.CheckApproved(data);
    console.log(data * 10 ** 18);
    let TO;
    if (data !== "") {
      this.setState({ from: data });
      TO = (data * 1000) / 3;
    } else {
      TO = 0;
    }
    this.setState({
      to: TO,
    });
  }

  DisconnectMeta() {
    this.setState({
      connect: false,
      from: 0,
      to: 0,
      address: "",
      prefrom: 0,
      approve: false,
      disable: true,
      balance: 0,
    });

    // When user disconnect
    localStorage.setItem(
      "bitchro",
      JSON.stringify({
        address: null,
        connect: false,
        disable: true,
      })
    );
  }
  //BuyNow Function
  BuyNow() {
    this.setState({
      from: 0,
      to: 0,
      prefrom: 0,
      approve: false,
      disable: true,
    });

    this.ChangeForm(0);
    let str = this.state.from * 10 ** 18;
    console.log(str.toString());
    console.log(str[0]);
    window.Contract.privateSell(
      this.state.address,
      ethers.BigNumber.from(str.toString())
    )
      .then((d) => this.setState({ TransactionHash: d.hash }))
      .catch((error) => {
        if (error.code === -32603) {
          alert("User Already Exists");
        } else {
          console.log(error);
        }
      });
  }

  componentDidMount() {
    if (localStorage.getItem("bitchro") !== null) {
      this.initialize();
    }

    try {
      window.ethereum.on("networkChanged", () => {
        this.setState({
          from: "",
          to: "",
          address: "",
          balance: 0,
          approve: false,
          disable: true,
          contract: null,
          address: null,
          connect: false,
        });

        this.networkChanged();
      });
      window.ethereum.on("accountsChanged", () => {
        this.setState({
          from: 0,
          to: 0,
          balance: 0,
          address: "",
          approve: false,
          disable: true,
          contract: null,
        });
        this.accountsChanged();
      });
    } catch (e) {
      console.log("Please Install metamask app");
    }
  }

  //when network change
  async networkChanged() {
    this.setState({
      from: 0,
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    //try and catch
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });

      window.account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      localStorage.setItem(
        "bitchro",
        JSON.stringify({
          address: window.account[0],
          connect: true,
          disable: true,
        })
      );

      this.setState({
        address: window.account[0],
        connect: true,
        disable: true,
      });
      var web3 = new Web3(window.ethereum);
      const BSDContract = await new web3.eth.Contract(BUSDABI, BUSDaddress);
      this.setState({
        contract: BSDContract,
        balance:
          (await BSDContract.methods.balanceOf(window.account[0]).call()) /
          10 ** 18,
      });
    } catch (e) {}

    console.log(window.ethereum);
  }

  //when Account  change
  async accountsChanged() {
    this.setState({
      from: 0,
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });
    try {
      var web3 = new Web3(window.ethereum);

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });

      window.account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      localStorage.setItem(
        "bitchro",
        JSON.stringify({
          address: window.account[0],
          connect: true,
          disable: true,
        })
      );

      //Account Balance Check
      const BSDContract = await new web3.eth.Contract(BUSDABI, BUSDaddress);
      this.setState({
        address: window.account[0],
        connect: true,
        disable: true,
        contract: BSDContract,
        balance:
          (await BSDContract.methods.balanceOf(window.account[0]).call()) /
          10 ** 18,
      });
    } catch (e) {}
  }

  async Connect() {
    //When metamask is Installed
    this.setState({
      from: "",
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");
      var web3 = new Web3(window.ethereum);

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });

        const signer = await provider.getSigner();
        console.log(signer);
        //Get Account details from metamask
        window.account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        localStorage.setItem(
          "bitchro",
          JSON.stringify({
            address: window.account[0],
            connect: true,
            disable: true,
          })
        );

        //Account Balance Check
        const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);

        this.setState({
          address: window.account[0],
          connect: true,
          disable: true,
          contract: BSDContract,
          balance:
            (await BSDContract.methods.balanceOf(window.account[0]).call()) /
            10 ** 18,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  }
  //initialize function for
  async initialize() {
    //When metamask is Installed
    this.setState({
      from: "",
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");
      var web3 = new Web3(window.ethereum);

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      try {
        // await window.ethereum.request({
        //   method: "wallet_switchEthereumChain",
        //   params: [{ chainId: "0x38" }],
        // });
        console.log(provider);

        const signer = await provider.getSigner();

        //Get Account details from metamask
        window.account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(await web3.eth.getChainId());
        if (
          JSON.parse(localStorage.getItem("bitchro")).address !== null &&
          (await web3.eth.getChainId()) === 56
        ) {
          let Bitchro = JSON.parse(localStorage.getItem("bitchro"));
          console.log(Bitchro);

          // Account Balance Check
          const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);
          this.setState({
            contract: BSDContract,
            balance:
              (await BSDContract.methods.balanceOf(Bitchro.address).call()) /
              10 ** 18,
            address: Bitchro.address,
            connect: Bitchro.connect,
            disable: Bitchro.disable,
          });
        }

        // Create the contract
        window.Contract = new ethers.Contract(
          ContractAddress,
          ContractABI,
          signer
        );
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x38",
                  rpcUrl: "https://bsc-dataseed.binance.org/",
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
          }
        }
      }

      console.log(window.Contract);
    } else {
      console.log("MetaMask is not installed!");
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{ maxWidth: "500px", alignSelf: "center" }}>
          <Header />
          <MainComponent
            fromData={this.state.from}
            ChangeForm={this.ChangeForm}
            BuyButton={this.BuyNow}
            toData={this.state.to}
            isApproved={this.state.approve}
          />
          {this.state.isAmmountHigh ? (
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontwWeight: "600",
                margin: "1rem 0",
              }}
            >
              Insufficient funds
            </div>
          ) : null}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {!this.state.connect ? (
              <button
                onClick={this.Connect}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "purple",
                  color: "#fff",
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/img/metamask.png"}
                  style={{
                    display: "inline",
                    alignSelf: "center",
                    width: "35px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                />
                Connect
              </button>
            ) : (
              <div
                onClick={this.DisconnectMeta}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "purple",
                  color: "#fff",
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/img/metamask.png"}
                  style={{
                    display: "inline",
                    alignSelf: "center",
                    width: "35px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                />
                Disconnect
              </div>
            )}

            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: `${
                  this.state.disable || this.state.from <= 0 ? "gray" : "purple"
                }`,
                color: "rgb(255, 255, 255)",
                width: "110px",
                height: "50px",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                border: "none",
              }}
              onClick={
                this.state.disable || this.state.from <= 0 ? null : this.Approve
              }
            >
              <div>Approve</div>
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              backgroundColor: "purple",
              padding: "1.3rem 0",
              borderRadius: "15px",
              padding: "13px",
            }}
          >
            <div>
              <strong>Address: </strong>
              {this.state.address}
            </div>
            <div>
              <strong>Balance: </strong>
              {this.state.balance.toPrecision(4)}
            </div>

            {/* {this.state.TransactionHash === null ? null : (
              <div>
                <strong>Transcation: </strong>
               
              </div>
            )} */}
            {this.state.approvedHash === null ? null : (
              <div>
                <strong>Approved: </strong>
                {this.state.approvedHash}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
