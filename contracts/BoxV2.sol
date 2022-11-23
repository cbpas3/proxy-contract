pragma solidity 0.8.7;

contract BoxV2 {
    uint256 public v;
    
    // function initialize(uint256 _v) external {
    //     v = _v;
    // }

    function inc() external {
        v = v + 1;
    }
}