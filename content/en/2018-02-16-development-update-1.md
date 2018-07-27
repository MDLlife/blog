---
title: Development Update #1
date: 2018-02-16
short_description: The MDL Platform has been in the state of active development for quite some time now.
image: images/80/2018-02-16-development-update-1.jpg
next_article: /en/2018-02-16-development-update-1
prev_article: /en/2018-01-31-pre-ito-hard-cap
lan: en
categories: ["News"]
---


Dear blockchain friends and MDL supporters.

The MDL Platform has been in the state of active development for quite some time now and the time has come to share some updates with the community.

We currently have around six ongoing dev projects within MDL. Some of them have been open source from day one (wallet, teller, the blockchain, blog, website), while others are being developed in-house and are tested internally (platform backend, android client, etc).

I am glad to announce that our dev team has grown to six people. With our team growing so fast, it is now more important than ever to align our priorities and focus on the tasks at hand by assigning the right roles to the right, qualified people.

Speaking of priorities, our ITO is nearing, this is why most of our effort have been spent on setting up the wallet, testnet, blockchain for MDL (pronounced model/medal/M.D.L.) Token, fixing all the functionalities of the teller, syncing and securing the nodes and preparing solutions for the hot wallet.

In today’s update, I will focus on the open-source projects.


***MDL Testnet node -> Mainnet node, wallet***

https://github.com/MDLlife/MDL

MDL is based on Skycoin’s codebase. This is why we have taken the time to fork and test it internally. We haven’t witnessed any fatal issues, but there are still a few small (insignificant) bugs that are in the process of being fixed. The core functionality is already workable and at the same time the Skycoin team has been hard at work at improving their platform which now already has more than 1000 git commits in the main Sky branch. We are following in sync and are merging those into our code.

Due to some changes in the codebase, we will have to get through most of them manually, not to break our working code. From the genesis block, generated on 2018-01-25 at 03:51, MDL tokens have been distributed to 100 addresses (10,000,000 MDL each), where 24 of those have been locked for 1 year, and 20 addresses locked for 2 years, in accordance with our roadmap/dev plan. The rest have been stored safely offline.

We have separated the first small bunch of 100 MDL’s from the first 10,000,000 MDL to perform internal testing. We will continue with the tests until the beginning of the ITO. This means that unless in the unlikely event any critical bugs are found, this blockchain will become the mainnet and the fun will begin!

The current minimum division of the token is 0.001 MDL, once MDL allows more users, it will be possible to divide one token to 0.000001 MDL (6 decimals), but we decided not to divide in more than that since it won't be necessary. Sky-based cryptos have maximum of 6 decimals division, which is much less human-error-prone. But currently we don’t want the network to flood with micro-transactions. Token hours and their behavior are also being worked on and we will provide an update on that soon.

***ITO tools, the Teller***

https://github.com/MDLlife/teller

MDL Talent Hub is finalizing the legal aspects which will determine how we execute the KYC. Whitelisting MDL addresses for our teller during the ITO is most likely the way we want to go. This is why we have been tinkering with the teller in order to support it. The MDL Teller is planned to support the following conversions:

 * BTC -> MDL
 * ETH -> MDL
 * SKY -> MDL
 * WAVES -> MDL

And of course our early investors will be able to swap their Waves-based MDL.life (pre-MDL) tokens through the teller as well.

***MDL Explorer***

https://github.com/MDLlife/explorer

The MDL Explorer will work by running the MDL node locally first and then run the explorer. Currently there is no big difference with Sky’s Explorer, and you will even see Skycoin in many places if you run it. This is one of the things we will be changing soon. [Bounty for improving the explorer and rebranding it into MDL?] Furthermore, we will be setting up a server to run the MDL explorer globally soon. Don’t forget though, every MDL wallet has its own explorer in the last tab.

Our designers and our conceptual team are in the process of finishing the new brand-book/look of MDL which is why the design of the above products have not been our number one priority yet. Once the new design, logo and corporate colors are confirmed, we will update and improve the design too.

Because all the projects above are open-sourced, interested developers have a chance to clone and compile the code themselves, following the instructions on GitHub.

Installable versions of the wallet for all the popular systems (Mac/Win/Linux) will shortly be available to our community members as well. Actually, those who are comfortable with Go can already compile it with gox ;)

***MDL Address: MDLzVebXKCqbtGJMnEoGdFkewvUN5KMryrRTc***
https://github.com/MDLlife/MDL/pull/1

We're considering to add three bytes (exactly, "MDL") in front of every MDL token address, to make it more distinguishable and recognizable, eliminating the chances to accidentally send MDL tokens to Sky address, Suncoin address, etc.
It's still not a final decision and we're estimating the costs and risks, but the code is already being written for that. See the first pull request above.


I'll try to cover some details on our internal projects in the next development update, as soon as it is possible. Now my hands and head gotta switch back from English to Golang, so more awesome stuff will shortly be available for our supporters, artists, bookers and all blockchain people.


Truly yours,
MDL.life's CTO, RT, Gladenbach
