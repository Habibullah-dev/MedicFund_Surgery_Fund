const hre = require("hardhat");

async function main() {

    const SurgeryFactory = await hre.ethers.getContractFactory("SurgeryFactory");

    const surgeryFactory = await SurgeryFactory.deploy();

    await surgeryFactory.deployed();

    console.log("Factory deployed to:0",surgeryFactory.address);

    //  0xe1C2b65b1770d77848c7496085E7E4E365Dc59c8 

}

main()
    .then(
    () => process.exit(0)
    ).catch(error => {
        console.log(error);
        process.exit(1);
    });