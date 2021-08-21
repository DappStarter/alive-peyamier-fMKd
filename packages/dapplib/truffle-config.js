require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strike crawl tortoise color harvest clog metal gauge'; 
let testAccounts = [
"0xbda536412f99a710b07839be8aafd4fbe51d1975b9ea80d95c6b7340762bf9a8",
"0xc52d12e2744650379128f0c34a6f2b0c269c9a3ef69b93f4c31809c030a9e6d9",
"0x4ad17835ecffd0d337e826142d220a455d92d196123927c34cbfe0ff03967012",
"0xebd6238840b044334d6e4e42adc91acbb5a5905d9bc99c90c0e6e25ea5c46ff1",
"0xf54f82ffc16e00652c3ceae8697689a98be72dba63f1cfb57592e920a40b45c3",
"0x3afce18db5dc03c8bd75c44e91f6c5288421315f6eeeb80169ed0603da83ddb1",
"0xb519d3903f3b4213a0c48c027c294e2d08d0812584c57424ecfb86bbfdceee6c",
"0x6fe409e74a9469b2118db83d78765abb3f7f635856f0827df8e2b3728e410499",
"0x64ad368fa541e4ee69d3aa2f94beae0b26e382d16db027e91d4d816d26649fdb",
"0x2219379b8eccf5f8629c62b2ab076a67d573bfabef6fa5ab1fc7045b24630d83"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


