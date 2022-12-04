const { task } = require("hardhat/config");

task("accounts","Print list of accounts",async (taskArgs,hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for(const account of accounts) {
      console.log(account.address);
    }
  });