import {ethers} from "hardhat";
import {AnotherERC20__factory} from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  //const AnotherERC20 = await new AnotherERC20__factory(signer).deploy();
  //console.log(AnotherERC20);

  const contract = AnotherERC20__factory.connect("0x3D50F9521406aDBeaB76f5690B21fBd8f569C27b", signer);
  
  console.log(await (await contract.initialize()).wait());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });