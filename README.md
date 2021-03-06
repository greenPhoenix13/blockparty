[![Build Status](https://travis-ci.org/makoto/blockparty.svg?branch=master)](https://travis-ci.org/makoto/blockparty)
[![Coverage Status](https://coveralls.io/repos/github/makoto/blockparty/badge.svg?branch=master)](https://coveralls.io/github/makoto/blockparty?branch=master)

<h2>What is this?</h2>

<h3>Demo</h3>

[![Demo Video](./blockparty.gif)](https://www.youtube.com/watch?v=Tlt7oflkGng)

<p>
  Have you ever encountered free party or meetup and realised that half the people registered did not actually turn up?
  BlockParty solves this problem by providing a simple incentive for people to register only if they mean it.
</p>
<h2>How does this work?</h2>
<p>
  Simple. You pay small deposit when you register. You lose your deposit if you do not turn up. You will get your deposit back + we split the deposit of whom did not turn up.
  You go to party and may end up getting more money.
</p>

<h2>Targetted users</h2>
<p>
  The current users are mostly participants of Blockchain related events, such as conference pre/post dinner, meetups, and hackathons. The users are expected to own some Ether (a virtual currency, shorten for ETH), to pay the deposit of the event, as well as usage fee of its platform called [Ethereum](http://ethereum.org).
</p>

<div style:"text-align:center;">
  <img width='80%' style:"display:inline-block;" src="http://blockparty.io.s3-website-eu-west-1.amazonaws.com/images/diagram.png"></img>
</div>

<h2>How to setup</h2>

<h3>Option 1: access from mobile browser</h3>
<p>This is the recommended way. The easier step by step guide is <a href='https://medium.com/@makoto_inoue/participating-blockparty-event-with-a-mobile-wallet-b6b9123246f7' >here</a></p>
<ul>
  <li>Step 1: Download <a href='http://status.im'>Status.im</a>,  <a href='https://www.cipherbrowser.com'>Cipher Browser</a> or <a href='https://trustwalletapp.com'>Trust Wallet</a> from App store/Google play</li>
  <li>Step 2: Create an account on your wallet, and make sure you have some Ether.</li>
  <li>Step 3: Type the event url on their built in browser </li>
</ul>

<h3>Option 2: access from desktop browser with <a href='https://metamask.io/'>Metamask</a> Chrome extension</h3>
<p>This is the most popular way right now.</p>
<ul>
  <li>Step 1: Install <a href='https://metamask.io/'>Metamask</a> Chrome extension </li>
  <li>Step 2: Create an account on your metamask, and make sure you have some Ether.</li>
  <li>Step 3: Refresh the page </li>
</ul>

<h3>Option 3: access from normal browser connecting to local node</h3>
<p>This has been the standard way to access Dapp prior to Ethereum Wallet (lower than v 0.7)</p>
<ul>
  <li>Step 1: Install <a href='https://github.com/ethereum/mist/releases'>Mist browser (v 0.8 or higher)</a>, and make sure you choose <em style={{fontWeight:'bold'}}>mainnet</em>. Here is <a href='https://www.youtube.com/watch?v=Y3JfLgjqNU4'>a quick video tutorial</a> </li>
  <li>Step 2: Create an account on your wallet, and make sure you have some Ether.</li>
  <li>Step 3: Stop Ethereum Wallet</li>
  <li>Step 4: Start geth(Go Etheruem, command line tool) with the following options. (See the <a href='https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum'>installation instructions</a> for each platform)</li>
  <li>Step 5: Refresh this page </li>
</ul>
<blockquote style={{backgroundColor:'black', color:'white', padding:'1em'}}>
  geth --unlock 0 --rpc  --rpcapi "eth,net,web3" --rpccorsdomain URL
</blockquote>
<p>
  NOTE: <span style={{backgroundColor:'black', color:'white', padding:'0.3em'}} > --unlock 0</span> will unlock with one account. <span style={{backgroundColor:'black', color:'white', padding:'0.3em'}} > --unlock 0 1</span> will unlock with two accounts.
</p>

<h2>How to play?</h2>
<p>
  Type your twitter account, pick one of your address, then press 'RSVP'. It will take 10 to 30 seconds to get verified and you will receive notification.
  Once registered, join the party! Your party host (the contract owner) will mark you as attend.
  Once the host clicks `payout`, then you are entitled to `withdraw` your payout.
</p>

<h2>FAQ</h2>
<h3>Can I cancel my registration?</h3>
<p>No</p>
<h3>What happens if I do not withdraw my payout?</h3>
<p>
  If you do not withdraw your payout within one week after the event is end, the host (contract owner) will clear the balance from the contract and the remaining blance goes back to the host, so do not keep them hanging
</p>
<h3>What happens if the event is canceled?</h3>
<p>
  In case the event is canceled, all registered people can withdraw their deposit.
  Make sure that you register with correct twitter account so that the host can notify you.
</p>
<h3>What if there is a bug in the contract!</h3>
<p>
  If the bug is found before the contract is compromised, the host can kill the contract and all the deposit goes back to the host so he/she can manually return the deposit.
  If the contract is compromised and the deposit is stolen, or his/her private key is lost/stolen, I am afraid that the host cannot compensate for you. Please assess the risk before you participate the event.
</p>
<h3>Can I host my own event using BlockParty?</h3>
<p>
  Please contact the <a href="http://twitter.com/makoto_inoue">author of this project</a> if you are interested.
</p>

<h2>Terms and conditions</h2>
<p>
  By downloading and deploying this software, you agree to our terms and conditions of use. We accept no responsibility whether in contract, tort or otherwise for any loss or damage arising out of or in connection with your use of our software and recommend that you ensure your devices are protected by using appropriate virus protection.
</p>

## Hacking guide

If you are interested in contributing to blockparty, have a look into ["help wanted" tag on Github issues](https://github.com/makoto/blockparty/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22). They are relatively easy and does not require so much application specific knowledges.

### Prerequisite

- [geth](https://github.com/ethereum/go-ethereum/wiki/geth)
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [webpack](https://webpack.github.io/)
- [ganache-cli](https://github.com/trufflesuite/ganache-cli) = v6.0.3 (ganache-core: 2.0.2) for local use

### Installation

- Run `npm`

### Running test

- Run `ganache-cli -a 300` in one console
- Generate test public/secret key

```
cd tmp/
openssl genrsa 2048 > test_private.key
openssl rsa -pubout < test_private.key > test_public.key
```

- Run `npm run test`

### Running test coverage

```
./node_modules/.bin/solidity-coverage
```

### Running locally

- Run local node (geth, ganache test rpc, etc)
- Run `./node_modules/.bin/truffle migrate --network development`
- Run `npm run dev`
- Open `http://localhost:8080`

NOTE: If you have metamask, your account on ganache will not have ether to register. Either send it via terminal, or open the browser in the incognite mode, so you use default account on local node.

### Building asset files to deploy

- Run `npm run build`
- Upload the content of files under `build` directory

### Encryption (experimental)

By passing public key file location to parameter of Conference during migration, it can allow user to register with their user name encrypted.

### Configurable values (experimental)

Event name is configurable as `name`

eg: Encrypt participant name

```
./node_modules/.bin/truffle migrate --config '{"name":"CodeUp No..", "encryption":"./tmp/test_public.key"  }'
```

Changing number of participants

```
./node_modules/.bin/truffle migrate --config '{"name":"CodeUp No..", "limitOfParticipants":15}'
```

## Deploying and running on real network

For `ropsten` and `mainnet` it now deploys via Infura. Pass the extra to set deployment specific

```
--network $NETWORK --mnemonic $SECRET
```

NOTE: `ropsten` and `mainnet` uses different gasPrice. Check `truffle.js` file and `scripts/util/set_gas.js` for the detail.

