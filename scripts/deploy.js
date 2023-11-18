
const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const contract = await NFTMarketplace.deploy();

  await contract.deployed();

  console.log(`Deployed contract address ${contract.address}`);
  // console.log(JSON.stringify(nftMarketplace));
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
