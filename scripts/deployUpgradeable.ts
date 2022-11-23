import { ethers, upgrades } from "hardhat";

async function main() {
  // Part 1: getContractFactory
  const boxContractFactory = await ethers.getContractFactory("Box");
  // Part 2: create contract object and deploy

  // Typical Pattern
  //   const boxContract = await boxContractFactory.deploy();

  const boxContract = await upgrades.deployProxy(boxContractFactory, [13], {
    initializer: "initialize",
  });

  // Part 3: await deploy
  await boxContract.deployed();
  console.log(`Contract deployed to ${boxContract.address}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
