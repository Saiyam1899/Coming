export const ContactAddress = "0xefb21Be88E9bfA221dA4d8088369F466fBD89Ad5";
export const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenAmmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenAmmount",
        type: "uint256",
      },
    ],
    name: "ChangeAmmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ContractAddress",
        type: "address",
      },
    ],
    name: "changeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
