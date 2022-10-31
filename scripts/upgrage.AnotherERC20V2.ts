import {ethers} from "hardhat";
import {AnotherERC20V2__factory} from "../typechain-types";

const proxy = "";

async function main() {
  const [signer] = await ethers.getSigners();
  const AnotherERC20 = await AnotherERC20V2__factory;
  await upgrades.upgradeProxy(proxy, AnotherERC20);
  console.log("Upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });