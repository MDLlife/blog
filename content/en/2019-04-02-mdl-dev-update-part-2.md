---
title: MDL Talent Hub - Development update 2019 (part II)
date: 2019-04-02
short_description: Chess tournament is starting now
image: images/80/2018-02-16-development-update-1.jpg
next_article:
prev_article: /en/2018-03-04-mdl-dev-update-part-1
lan: en
categories: ["Development"]
show_in_top: show
---

In [part one](https://mdl.wtf/en/2019-03-04-mdl-dev-update-part-1/) of our extended update for 2019 a few weeks ago we announced that we were starting migration to Desktop Wallet v0.25, along with other developments for the first part of the year. This time we are happy to bring news that migration is complete and v0.25 has launched, with new fixes and features that make trading MDL a better way to pay and be paid for any talent.

## Desktop wallet

In terms of [Desktop Wallet](https://github.com/MDLlife/MDL/releases) UI improvements, you’ll now be able to filter transactions in your History tab based on the wallets used for the transaction and also when you made the transaction. The URI specification has been extended to support plain addresses without an mdl: prefix, and the libmdl source code has been removed thanks based on migration to https://github.com/skycoin/libskycoin. On the technical front, the desktop wallet now has the CLI addressTransactions command, as well as /api/v2/wallet/seed/verify to verify if a seed is a valid bip39 mnemonic seed, and much much more.


 ![](/images/dev-update-2019-2/desktop-wallet-history-filter.png)

There is really a lot to read about technical updates. For the full detailed list you can check [CHANGELOG](https://github.com/MDLlife/MDL/blob/master/CHANGELOG.md)


## Mobile Wallet

[Mobile Wallet](https://MDL.app) is improving quickly -- the Google Play Wallet Beta has been released with localization updates for Traditional and Simplified Chinese, Dutch (NL), Spanish (Castellano and US), Russian, German, and soon-to-be-released Japanese.


  Pin protection              |   Dashboard         | Explorer                         |
  :-------------------------:|:------------------------:|:-------------------------:
  ![](/images/dev-update-2019-2/android-wallet-pin.jpg)  |  ![](/images/dev-update-2019-2/android-wallet-dashboard.jpg) |  ![](/images/dev-update-2019-2/android-wallet-explorer.jpg)
  ![](/images/dev-update-2019-2/android-wallet-create.jpg)  |  ![](/images/dev-update-2019-2/android-wallet-import.jpg) |  ![](/images/dev-update-2019-2/android-wallet-success.jpg)

Mobile Wallet now supports Skycoin wallet’s QR-code scanner, and lets you set an amount in MDL to receive to your own wallet via QR code.

Explorer integration has been added for TXID and Addresses, and the UI now shows the MDL Theme for all Dialogues.  

## Blockchain Explorer

[The web explorer](https://explorer.mdl.life) is getting a brand new update and will be ready to show detailed info on Talent Hours for all transactions, figuratively putting the “TH” in MDL TH. (This was previously known as Token Hours). There’s also much more, to be announced soon.

## Mobile Platform apps

The Mobile MDL Talent Hub platform app is now being translated into Flutter, which will give both Android and iOS users a native experience. (More on this soon in an article of its own.)

## Web Portal

Lastly, the [web portal](https://MDL.live) is getting more features ready. check out the full list of app portals and functions that are making the user experience smoother and more solid all around:

- Gig feedback

![](/images/dev-update-2019-2/web-feedback-1.png)


  Talent              |   Booker
  :-------------------------:|:-------------------------:
  ![](/images/dev-update-2019-2/web-feedback-2.png)  |  ![](/images/dev-update-2019-2/web-feedback-3.png)

- Translations
 - Chinese traditional,
 - Spanish,
 - Portuguese,
 - Russian,
 - Arabic,
 - German,
 - Indonesian,
 - Japanese,
 - Korean,
 - Croatian
- Payment management for bookers

  ![](/images/dev-update-2019-2/web-payment-talent.png)  

- Payment management for talents

  ![](/images/dev-update-2019-2/web-payment-talent-2.png)

- Calendar

  ![](/images/dev-update-2019-2/web-calendar.png)

- Onboarding (Complete for Models and Bookers)
- SMS login / signup implementation
- Messenger
- Progressive WebApp and Service Workers
- Gig creation for Bookers
