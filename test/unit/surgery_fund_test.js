const { assert, expect } = require('chai')
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("SurgeryFund", function () {
        let SurgeryFactory;
        let surgeryFactory;

        let deployedSurgeriesAddress=[];
        let surgery;
        let title;
        let descriptionLink;
        let documentLink;
        let imageLink;
        let surgeryDeadline;
        let requiredAmount;

        beforeEach(async () => {
            // const accounts = await ethers.getSigners()
            // deployer = accounts[0]
            SurgeryFactory = await ethers.getContractFactory("SurgeryFactory");
            surgeryFactory = await SurgeryFactory.deploy();
        
            [owner] = await ethers.getSigners();
            
            title = 'Test Surgery';
            descriptionLink = 'https:pinata-test-description',
            documentLink = 'https:pinata-test-document',
            imageLink = 'https:pinata-test-image',
            surgeryDeadline = new Date().getTime() + (60*60*1000);
            requiredAmount = 200;

        });

        describe("Surgery Factory", function () {
            it("Add New Surgery Contract Address to Surgery Address", async () => {

                const response = await surgeryFactory.createfromSurgery(title,descriptionLink,documentLink,imageLink,surgeryDeadline,requiredAmount);
                
                console.log(await response.surgeries);

            })
        })




        
      })
