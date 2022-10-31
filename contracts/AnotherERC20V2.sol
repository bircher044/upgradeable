// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./AnotherERC20.sol";

contract AnotherERC20V2 is AnotherERC20 {
    string version = "Current version is 2.0";
    
    function currentVersion() public view returns (string memory){
        return version;
    }
}