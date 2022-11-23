import { ethers, upgrades } from "hardhat";

const PROXY = "0x190393958086740bB0647E284A94F374Ff745aE2";

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
