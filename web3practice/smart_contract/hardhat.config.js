

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/e2dn1xWYCGJmrGPs5PBtcqMae_1JTaAU',
      accounts: ['470958580911867b452e600df5e1e5e3172cd6a8c856b33fc024814a63ec48bc']
    }
  }
}