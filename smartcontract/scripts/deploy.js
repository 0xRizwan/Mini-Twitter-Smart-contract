
const hre = require("hardhat");

async function main() {
  const TwitterDappContract = await hre.ethers.getContractFactory("TwitterDapp");
  const deployTwitterDapp = await TwitterDappContract.deploy();

  await deployTwitterDapp.deployed();

  console.log( `TwitterDapp contarct address: ${deployTwitterDapp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
