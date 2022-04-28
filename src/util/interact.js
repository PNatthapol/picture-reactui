require("dotenv").config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0xb2d18c20Af18Ad0161a1D656E4061d908D3C34a2"; // 0x5A13E4e5E2C891863C850E13c2cF3E243ce6c1c1

export const galleryShop = new web3.eth.Contract(contractABI, contractAddress);

export const getPic = async () => {
  const pic = await galleryShop.methods.getPic().call();
  return pic;
};

export const pictures = async (id) => {
  const pictures = await galleryShop.methods.pictures(id).call();
  return pictures;
};

export const getPictureTable = async () => {
  const picTable = await galleryShop.methods.getPicTable().call();
  return picTable;
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
      address: "",
    };
  }
};

export const buyPicture = async (
  // address,
  price,
  id,
  name,
  deliverAddress,
  tel
) => {
  const addressArray = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const obj = {
    address: addressArray[0],
  };

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: obj.address, // must match user's active address.
    value: web3.utils.toHex(price), // ราคาต้อง hash
    //gas: web3.utils.toHex("31000"), // gas limit ต้อง hash
    data: galleryShop.methods
      .buyPicture(id, name, deliverAddress, tel)
      .encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: "Okay " + txHash,
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const sendPicture = async (id, trackingNumber) => {
  const addressArray = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const obj = {
    address: addressArray[0],
  };

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: obj.address, // must match user's active address.
    //gas: web3.utils.toHex("31000"), // gas limit ต้อง hash
    data: galleryShop.methods.sendPicture(id, trackingNumber).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return "Okay " + txHash;
  } catch (error) {
    return error.message;
  }
};

export const createSellPicture = async (price, path, namePicture) => {
  const addressArray = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const obj = {
    address: addressArray[0],
  };

  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: obj.address, // must match user's active address.
    //gas: web3.utils.toHex("31000"), // gas limit ต้อง hash
    data: galleryShop.methods
      .createSellPic(price, path, namePicture)
      .encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return "Okay " + txHash;
  } catch (error) {
    return error.message;
  }
};
