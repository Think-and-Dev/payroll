/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'hardhat-contract-sizer';
import 'hardhat-deploy';

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.4", settings: {} }],
  },
  gasReporter: {
    enabled:
      process.env.REPORT_GAS !== undefined &&
      process.env.REPORT_GAS.toLowerCase() === "true",
    currency: "USD",
  },
  contractSizer: {
    runOnCompile: true,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    proxyOwner:{
      default: 1, // here this will by default take the second account as feeCollector (so in the test this will be a different account than the deployer)
      1: '0x0', // on the mainnet the feeCollector could be a multi sig
    }
  }
};

export default config;
