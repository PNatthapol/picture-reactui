

require("dotenv").config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x04F4AD90b718F3b907D9bCa340d44640021aD541";

export const galleryShop = new web3.eth.Contract(contractABI, contractAddress);

export const getPic = async () => {
  const pic = await galleryShop.methods.getPic().call();
  return pic;
};

export const balance = async () => {
  const balance = await web3.eth.getBalance(contractAddress);
  return balance;
};

export const pictures = async (id) => {
  const pictures = await galleryShop.methods.pictures(id).call();
  return pictures;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
       
      };
    }
  } else {
    return {
      address: ""
      
    };
  }
};