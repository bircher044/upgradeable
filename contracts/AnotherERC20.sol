// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract AnotherERC20 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable{

    function initialize() public initializer {
        __ERC20_init("Another ERC20", "stabl");
        __Ownable_init(); 
        _mint(msg.sender, type(uint256).max);
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function Upgrade(address newImplementation) external onlyOwner {
        _upgradeTo(newImplementation);
    }
}