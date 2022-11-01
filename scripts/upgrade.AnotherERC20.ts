import {ethers} from "hardhat";
import {AnotherERC20__factory} from "../typechain-types";
import {AnotherERC20V2__factory} from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  //const AnotherERC20V2 = await new AnotherERC20V2__factory(signer).deploy().wait;

  const newAddress = "0x5a7790832704b59289F4b07A499dCFC5036246E1";
  console.log(newAddress);

  const contractV1 = AnotherERC20__factory.connect("0x3D50F9521406aDBeaB76f5690B21fBd8f569C27b", signer);
  const contractV2 = AnotherERC20__factory.connect(newAddress, signer);

  console.log(await (await contractV1.Upgrade(newAddress)).wait());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });