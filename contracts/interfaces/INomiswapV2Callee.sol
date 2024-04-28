pragma solidity >=0.5.0;

interface INomiswapV2Callee {
    function NomiswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
