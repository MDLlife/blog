---
title: MDL Desktop Wallet v0.27.1 Release
date: 2021-03-31
short_description: MDL development continues! MDL Desktop Wallet v0.27.1 is released
image: images/80/2018-02-16-development-update-1.jpg
next_article:
prev_article: /en/2019-05-03-mdl-dev-update-part-3
lan: en
categories: ["Development"]
show_in_top: show
---

We are happy to announce some important updates this week, including new versions of our desktop wallet and key improvements on the UX/UI front. This version of wallet supports [Skycoin's hardware wallet](https://skycoin.com/skywallet). Also includes all the features of Skycoin's version 0.27.

The wallet has been updated from  0.26.1 -> 0.27.1, including changes and improvements in step with Skycoin wallet developments.
Among the multiple updates are:

### Added

- Updated electron from version 2 to version 10, with many security fixes
- Add `createRawTransactionV2` CLI command, which calls the API of `/wallet/transaction` to create the transaction and can create then unsigned transaction. Once the API's performance issue has been fixed, we will replace the `createRawTransaction` with it.
- Add `signTransaction` CLI command to sign transaction.
- Do windows electron builds by travis and abandon the appveyor
- Migrate `mdl.live` to `mdl.cx`
- Use transaction history when scanning wallet addresses, instead of the current address balance
- Document the daemon's CLI options
- Add the ability to save transaction notes
- Add CLI `encodeJsonTransaction` command to retrieve raw transaction given its JSON representation
- Add `package bip44`, implementing the bip44 spec https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
- Codesign daemon and standalone binaries
- Add a guided method for entering the seeds in the GUI
- Add new wallet type `collection` for wallets that are an arbitrary collection of private keys, rather than generated from a seed
- Add new wallet type `bip44` for hierarchical deterministic (HD) wallets obeying the bip44 protocol.
  The Skycoin bip44 `coin` number is `8000`. Nice round number. How can we add MDL there as well?
  `bip44` wallets avoid address reuse, generating a new change address for each transaction.
  Affects APIs are `POST /api/v1/wallet`, `GET /api/v1/wallets`, `GET /api/v1/wallet`, `POST /api/v1/wallet/seed` and `POST /api/v1/wallet/recover`.
  Refer to the [API documentation](./src/api/README.md) for API changes.
  `bip44` wallets support bip39 "seed passphrases".
  More details are explained in https://github.com/skycoin/skycoin/wiki/Wallet-File-Formats-and-Types
- `cli walletCreate` support for `bip44` wallets added
- Add `bip44_coin` field to `GET /api/v1/health` `fiber` params
- Add the "bulk send" option to the GUI advanced form
- Add `cli walletKeyExport` command to export `xpub`, `xprv`, `pub` and `prv` key from a `bip44` wallet
- Add `xpub` type wallet, which can generate addresses without exposing private keys
- Add `block_publisher` flag to `/api/v1/health`
- Add `no_broadcast` option to `POST /api/v1/injectTransaction` to disable broadcast of the transaction. The transaction will only be added to the local pool.
- Add `cli distributeGenesis` command to split the genesis block into distribution addresses when setting up a new fiber coin

### Fixed

- Price loading is displayed correctly now
- #7, #162, corrupted file in ~/.mdl/data/ dir makes the desktop wallet show ERROR #1.
- #87, can not run web gui from MDL docker image.
- #2287 A `Content-Type` with a `charset` specified, for example `application/json; charset=utf-8`, will not return an HTTP 415 error anymore
- Fix `fiber.toml` transaction verification parameters ignored by newcoin
- #2373 Fix and clean-up further panics with various `mdl-cli` commands (lastBlocks, checkdb) which were not correctly handling arguments.
- #2442 Reset the "trusted" flag to false for all peers on load, before registering default hardcoded peers in the peerlist
- #26 Add additional database corruption checks in ResetCorruptDB to detect encoder ErrBufferUnderflow and ErrMaxLenExceeded

### Changed

- `type` is now a required parameter for `POST /api/v1/wallet`. `type` can be `deterministic`, `bip44` or `xpub`.
- Add `display_name`, `ticker`, `coin_hours_display_name`, `coin_hours_display_name_singular`, `coin_hours_ticker`, `explorer_url` to the `/health` endpoint response
- `cli addPrivateKey` will only work on a `collection` type wallet. Create one with `cli walletCreate -t collection`
- Don't print the wallet in the terminal after `cli encryptWallet` or `cli decryptWallet`
- Remove `WALLET_DIR` and `WALLET_NAME` envvars from the `cli` tool. Commands which need to operate on a wallet file accept the wallet file on the command line instead.
- Now the modal window for showing QR codes in the GUI allows to request specific amounts of coins, as in mobile wallets. This changes did no include the ability to read QR codes or URLs.

### Removed

- Remove `-arbitrating` option from the daemon CLI options
- Remove `-print-web-interface-address` option from the daemon CLI options
- Remove `cli walletDir` command


# [Download page](https://github.com/MDLlife/MDL/releases/tag/v0.27.1)

* cli: CLI utility for communicating with the daemon and various offline operations (https://github.com/MDLlife/MDL/blob/release/0.27.1/cmd/mdl-cli)
* daemon: For running as a daemon on a server
* gui-standalone: For running from the command line as a desktop client that opens in your browser
* gui-electron: For running as a desktop client that opens in its own application

Architectures

    win: Windows (32-bit or 64-bit)
    win-x64: 64-bit Windows
    win-x86: 32-bit Windows
    linux-arm: ARM Linux (e.g. RaspberryPi)
    linux-x64: 64-bit Linux
    osx: 64-bit OS X / macOS
    osx-darwn-x64: 64-bit OS X / macOS

* [MacOS Wallet](https://github.com/MDLlife/MDL/releases/download/v0.27.1/MDL-0.27.1-osx.dmg)
* [Windows Wallet](https://github.com/MDLlife/MDL/releases/download/v0.27.1/MDL-0.27.1-win-setup.exe)
* [Linux Wallet AppImage](https://github.com/MDLlife/MDL/releases/download/v0.27.1/MDL-0.27.1-linux.AppImage)
* [Linux Wallet snap (amd64)](https://github.com/MDLlife/MDL/releases/download/v0.27.1/MDL_0.27.1-linux_amd64.snap)

Remember, we also have Android wallet:

* [Android Wallet](https://MDL.app)
