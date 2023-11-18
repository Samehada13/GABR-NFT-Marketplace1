require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17", 
  
  networks: {
    // hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/5DL1iH9oYF7LZpbbDdrPQvn6DbG3giWZ",
      accounts: [
        `0x${"8e3c412d4df3297d37480f91021b89478ec00ffe0e4285c9abe6437a487960fb"}`,
      ],
    },
    // polygon_mumbai: {
    //   url: process.env.POLYGON_MUMBAI,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`]
    // },
  },

};
