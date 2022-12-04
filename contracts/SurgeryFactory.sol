// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./Surgery.sol";


contract SurgeryFactory { 
    address[] public surgeries;

    event newSurgeryEvent(address indexed owner,
                         address surgeryAddress,
                         uint256 indexed surgeryDeadline,
                         string title,
                         uint256 requiredAmount,
                         string imageLink,
                         uint256 timeStamp,
                         string documentLink
                        );

    function createfromSurgery (
        string memory title,
        string memory descriptionLink,
        string memory documentLink,
        string memory imageLink,
        uint256 surgeryDeadline,
        uint256 requiredAmount
     ) public {
        Surgery surgery = new Surgery(title,descriptionLink,documentLink,imageLink,surgeryDeadline,requiredAmount,msg.sender);
        surgeries.push(address(surgery));

        emit newSurgeryEvent(
                             msg.sender,
                             address(surgery),
                             surgeryDeadline,
                             title,
                             requiredAmount,
                             imageLink,
                             block.timestamp,
                             documentLink
                             );
    }

}