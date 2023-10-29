require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require("dotenv").config();

const Private_Key = 'de2cf95b2109a96ba05f0d2ddf8f282b5ea0afb37cadc5455e7beec19dbee239'
  module.exports = {
    solidity: '0.8.0',
    networks: {
      xinfin: {
        url: `https://erpc.apothem.network`,
        accounts: [`0x${Private_Key}`]
      }
    }, 
    etherscan: {
      apiKey: process.env.API_KEY
    }
  };

