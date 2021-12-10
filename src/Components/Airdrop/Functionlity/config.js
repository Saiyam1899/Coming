export const ContactAddress = "0xE8bD45038CCb617e8FDd9D72548ddc183e64459F";
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
