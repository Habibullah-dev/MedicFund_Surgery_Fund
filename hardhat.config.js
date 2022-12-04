require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

require('./tasks/tasks');

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_RPC = process.env.POLYGON_MUMBAI_RPC;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.7"
      },
    ],
  },
  defaultNetwork: "polygon",
  networks: {
    
    hardhat: {
      chainId: 31337,
    },
    polygon: {
      url: MUMBAI_RPC,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
 },  
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 500000,
  },
};

