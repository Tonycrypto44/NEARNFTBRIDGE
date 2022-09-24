import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt";
const ethraw =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey);
export const cipherEth = simpleCrypto.encrypt(ethraw);
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "";
export var mumCustody = "0x3b7a9c6106b9093A716dFed2072b12f364E2B65E";
export var mumBridgeNFT = "0xaCE2E385c2E769f0E48f1D68809592FBB2C6ba87";
export var mumrpc = "https://matic-mumbai.chainstacklabs.com";

/*
Ethereum Goerli Testnet
*/
export var goeErc20 = "";
export var goeCustody = "";
export var goeNFT = "0x50A0A699Bc431B015d586B363Bc13641dfE3B870";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctErc20 = "";
export var bsctCustody = "0xBCDc01073aE441DA6C532e656129B9a96FfB3704";
export var bsctNFT = "0x75a4eEF5284EC25e8e285A7715615DF981c2387A";
export var bsctrpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";
