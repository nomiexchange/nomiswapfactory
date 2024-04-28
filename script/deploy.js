async function main() {
  const Counter = await ethers.getContractFactory('NomiswapV2Factory')
  const counter = await Counter.deploy('0xAB4ab6eAD9dCF3D6550A3ADDAAb93931cc122379')
  await counter.deployed()
  console.log('Counter address:', counter.address)
}

main()
