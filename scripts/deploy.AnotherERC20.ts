import {ethers} from "hardhat";
import {AnotherERC20__factory} from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const AnotherERC20 = await new AnotherERC20__factory(signer).deploy();
  console.log(AnotherERC20);

  await AnotherERC20.initialize();
  console.log(AnotherERC20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });