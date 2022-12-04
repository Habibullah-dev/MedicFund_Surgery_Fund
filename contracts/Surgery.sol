// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

error Sugery__FundCompletedError();

contract Surgery {
    string private s_title;
    string private s_description;
    string private s_document;
    string private s_image;

    uint256 private s_requiredAmount;
    uint256 private s_receivedAmount;
    uint256 private s_amountRemaining;
    uint256 private s_surgeryDeadline;
    
    address payable public s_owner;


    modifier onFundCompleted() {
        // require(msg.sender == i_owner);
        if (s_receivedAmount + msg.value > s_requiredAmount) revert Sugery__FundCompletedError();
        _;
    }

    event fundedEvent(address indexed funder, uint256 indexed amountFunded, uint256 indexed timeStamp);

    constructor(
        string memory title,
        string memory descriptionLink,
        string memory documentLink,
        string memory imageLink,
        uint256 surgeryDeadline,
        uint256 requiredAmount,
        address surgeryOwner
    ) {
        s_title = title;
        s_description = descriptionLink;
        s_document = documentLink;
        s_image = imageLink;
        s_requiredAmount = requiredAmount;
        s_surgeryDeadline = surgeryDeadline;
        s_owner = payable(surgeryOwner);
        
    }

    function fundSurgery() public onFundCompleted payable {

        s_receivedAmount += msg.value;

        s_amountRemaining = s_requiredAmount - s_receivedAmount;

        (bool success, ) = s_owner.call{value: msg.value}("");
        require(success,"Transaction Failed, Something went wrong ");

        emit fundedEvent(msg.sender, msg.value , block.timestamp);
    }
        
   
    function getOwner() external view returns(address) {
        return payable(s_owner);
    }

    function getTitle() external view returns(string memory) {
        return s_title;
    }

    function getDescriptionLink() external view returns(string memory) {
        return s_description;
    }

    function getDocumentLink() external view returns(string memory) {
        return s_document;
    }

    function getImageLink() external view returns(string memory) {
        return s_image;
    }

    function getRequiredAmount() external view returns(uint256) {
        return s_requiredAmount;
    }

    function getReceivedAmount() external view returns(uint256) {
        return s_receivedAmount;
    }

    function getAmountRemaining() external view returns(uint256) {
        return s_amountRemaining;
    }

    function getSurgeryDeadline() external view returns(uint256) {
        return s_surgeryDeadline;
    }


}