require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth magic honey hover castle outer slice'; 
let testAccounts = [
"0x7825343e19324327531933551e6bc91fb92126fc286090ea54b7add24f2c46c4",
"0x36807ad2c5ad425fb7379ebd235a96886d9fc597917dad066081a4a27c317634",
"0x1f0a2d30c6092fc0fdca255b0beed3ec93ada873635c1eecee9eacdcd0db8221",
"0x6a27930b4ddf8831062b505d5cc2c97953eb67cde4d4bfd15f5c90f1e15d8f46",
"0x953e145db33e05c3dc2ccf06f21f4faf28f0a9dbe1f712ae1afab66d5685edfd",
"0xc7512871bd157770f0fe9a599e0d1bec6764aaaf7aad81e282e33c6a63eebc18",
"0xc22b214949a327669b33538d096a385a93b28ed78a30ac484a87aeaf56dc0fa2",
"0xf679ead205857f157fd8ebc7df087be1b24c27f7b012a76a3dad186ad6f09db2",
"0x18af69f93aa8193ee9f3cf23b5c17e0527636ddd39f305263b9f043292f17c33",
"0xcc5206360e2726acb240618bb2b206c8a270eb1cceac6783308d1132f7fa2464"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

