import { ethers, upgrades } from "hardhat";

const PROXY = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
  const boxV2ContractFactory = await ethers.getContractFactory("BoxV2");
  //   await ethers.provider.getBlockNumber();
  await upgrades.upgradeProxy(PROXY, boxV2ContractFactory);
  console.log("Box upgraded.");
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
