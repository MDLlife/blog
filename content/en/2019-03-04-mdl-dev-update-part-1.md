---
title: MDL Talent Hub - Development update 2019 (part I)
date: 2019-03-04
short_description: Chess tournament is starting now
image: images/80/2018-02-16-development-update-1.jpg
next_article:
prev_article: /en/2018-12-18-mdl-global-chess-tournament-1
lan: en
categories: ["Development"]
show_in_top: show
---

We are happy to announce some important updates this week, including new versions of our desktop and mobile wallet and key improvements on the UX/UI front. This article though will only cover the first part. There's more soon.

New features for the app are ready to go, from ways talents and bookers can post feedback on each other to payment management and messaging, as well as improved onboarding. Meanwhile, we’ve built full end-to-end scenarios for bookers, talents, agencies, and most importantly parents that will help us make the gig booking process better for everyone involved.

## Desktop wallet
The wallet has been updated from  0.21 -> 0.24, including changes and improvements in step with Skycoin wallet developments:

https://github.com/MDLlife/MDL/blob/develop/CHANGELOG.md

Among the multiple updates are:

 - _***Wallet encryption***_ using chacha20+poly1305 for encryption and authentication and scrypt for key derivation.
<center>
  ![](/images/dev-update-2019-1/encrypted-wallet.png)
  Add passwords, not to store your seed in plain text
</center>

 - _***Advanced Send***_, allowing users to control which outputs to use for transaction, a detailed control of Token Hour allocation and feature to send to a multiple receivers (Multi-Send)

 <center>

 ![Choose addresses to send from](/images/dev-update-2019-1/choose-addr.png)
 Choose multiple addresses to send from, or specify one

 ![](/images/dev-update-2019-1/multiple-dest.png)
 Choose multiple destination addresses (Multi-Send)

 ![](/images/dev-update-2019-1/tokenhour-alloc.png)
 Specify Token Hours allocation to be sent along

 ![](/images/dev-update-2019-1/preview.png)
 Preview the transaction and see results.

 </center>
The result of this transaction can be seen in  [the explorer, here](https://explorer.mdl.wtf/app/transaction/529071af4ec3c148ea7f397f9b2d187809d7e9ff727507a008938ad67b0ca5f7)

 - _***Setup wizard***_, helps you creating a new secure encrypted wallet on first launch of the wallet

  Create Wallet              |   Encrypt Wallet
  :-------------------------:|:-------------------------:
  ![](/images/dev-update-2019-1/wizard-1.png)  |  ![](/images/dev-update-2019-1/wizard-3.png)

 - Added Content-Security-Policy header to http responses
   - Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.
 - Added CSRF check to wallet API
   - Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.  If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth.
 - Added libskycoin C API wrapper
   - libskycoin 0.0.1 released with bindings for cipher/address, cipher/hash, cipher/crypto, cli/create_rawtx
 - Updated website with new wallet links, including the new Android Beta wallet:

 <center>
  ![](/images/dev-update-2019-1/download-wallet.png)
  Also available at [github.com/MDLlife/MDL](https://github.com/MDLlife/MDL/releases)
 </center>

Migration to v0.25 has started, which will allow iOS mobile wallet, improved explorer with detailed Token Hours information and, soon, Skywallet integration.

More dev updates are coming soon, covering [Mobile wallets](https://play.google.com/store/apps/details?id=live.mdl.wallet) and [MDL TH platform development](https://mdl.live).
