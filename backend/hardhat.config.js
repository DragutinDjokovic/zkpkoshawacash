require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();

const { NODE_URL, PRIVATE_KEY, API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17"
      },
      {
        version: "0.6.11"
      }
    ]
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat:{chainId: 11155111},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${NODE_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: `${API_KEY}`
    }
  }
};
