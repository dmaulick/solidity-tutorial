pragma solidity ^0.4.17;

/*

    Converting ether:
        https://etherscan.io/unitconverter

    Huge gotcha:
        Nested Arrays
            The bridge from solidity to javascript DOES NOT support nested Arrays
            ... As a result! The bridge cannot support Arrays of strings**
*/

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
        // msg is a global object to describe who just sent a function invocation (for any function invocation)
        /*
            properties
                data - data field frm the call/transation that invoked the curent function
                gas - amount of gas current function invocation has available
                sender - address of the account that start the current function incocation
                value - amount of ether (in wei) that was sent along wiht function invocation
        */
    }

    function enter() public payable {
        /*
            require
                If fails exits functions exectution
        */
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted {
        uint256 index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}
