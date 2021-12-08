// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";


contract Cat20 is ERC20, Ownable {


    constructor() ERC20("CAT20TestToken", "C20T") {}

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }

}
