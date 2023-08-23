import{e as d,_ as m,f as c,g as b,r as o,o as T,h as f,w as l,d as i,a as v,b as M,p as _,l as w}from"./index-4a9fbba2.js";import{u as k}from"./modal-8e080340.js";const h=[{inputs:[{internalType:"address",name:"_govTokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"availableAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"totalClaimed",type:"uint256"}],name:"Amounts",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"claimer",type:"address"},{indexed:!1,internalType:"uint256",name:"amountClaimed",type:"uint256"},{indexed:!1,internalType:"uint256",name:"availableAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"TokensClaimed",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"totalClaimed",type:"uint256"},{components:[{internalType:"uint256",name:"unlockDate",type:"uint256"},{internalType:"uint256",name:"percent",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"}],internalType:"struct Wallet.Lock[]",name:"locks",type:"tuple[]"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"currentLockNumber",type:"uint256"}],indexed:!1,internalType:"struct Wallet.Round",name:"round",type:"tuple"},{indexed:!1,internalType:"uint256",name:"currentTime",type:"uint256"}],name:"roundStateInUPD",type:"event"},{inputs:[],name:"ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"CLAIMER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEV_ADMIN",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_user",type:"address[]"}],name:"addBatchToWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_unlockDate",type:"uint256[]"},{internalType:"uint256[]",name:"_percent",type:"uint256[]"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"addLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_totalAmount",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"addRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string[]",name:"names",type:"string[]"},{internalType:"uint256[]",name:"totalAmounts",type:"uint256[]"}],name:"addRounds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"calcAvailableAmount",outputs:[{internalType:"uint256",name:"availableToken",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_recepient",type:"address"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"getRoundInfo",outputs:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"availableAmountInRound",type:"uint256"},{internalType:"uint256",name:"nextClaimDate",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"},{internalType:"string",name:"name",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRounds",outputs:[{components:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"totalClaimed",type:"uint256"},{components:[{internalType:"uint256",name:"unlockDate",type:"uint256"},{internalType:"uint256",name:"percent",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"}],internalType:"struct Wallet.Lock[]",name:"locks",type:"tuple[]"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"currentLockNumber",type:"uint256"}],internalType:"struct Wallet.Round[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"getUserInfo",outputs:[{internalType:"uint256",name:"amount_",type:"uint256"},{internalType:"uint256",name:"available_",type:"uint256"},{internalType:"uint256",name:"amountWithClaimed_",type:"uint256"},{internalType:"uint256",name:"currentLockTime_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"govTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"migrateUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"percentPrecision",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_user",type:"address[]"}],name:"removeBatchFromWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_recepient",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"tokenAddress",type:"address"}],name:"removeToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_currentLockNumber",type:"uint256"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"updateCurrentLockNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_indexLock",type:"uint256"},{internalType:"uint256",name:"_indexRound",type:"uint256"},{internalType:"uint256",name:"_percent",type:"uint256"},{internalType:"uint256",name:"_unlockDate",type:"uint256"},{internalType:"uint256",name:"_claimed",type:"uint256"}],name:"updateLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_precision",type:"uint256"}],name:"updatePercentPrecision",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_govTokenAddress",type:"address"}],name:"updateTokenAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"bool",name:"_inWhitelist",type:"bool"}],name:"updateUserInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"bool",name:"inWhitelist",type:"bool"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"pubSale",type:"bool"},{internalType:"bool",name:"priSale",type:"bool"},{internalType:"bool",name:"seedSale",type:"bool"}],stateMutability:"view",type:"function"}],R=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_upgradedAddress",type:"address"}],name:"deprecate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"deprecated",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_evilUser",type:"address"}],name:"addBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"upgradedAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maximumFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_maker",type:"address"}],name:"getBlackListStatus",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newBasisPoints",type:"uint256"},{name:"newMaxFee",type:"uint256"}],name:"setParams",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"issue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"redeem",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"basisPointsRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isBlackListed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"MAX_UINT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_initialSupply",type:"uint256"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Issue",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"newAddress",type:"address"}],name:"Deprecate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"feeBasisPoints",type:"uint256"},{indexed:!1,name:"maxFee",type:"uint256"}],name:"Params",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_blackListedUser",type:"address"},{indexed:!1,name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"}],x=[{inputs:[{internalType:"address",name:"_USDTToken",type:"address"},{internalType:"address",name:"_MLPToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"},{internalType:"uint256",name:"_totalAmount",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mlpAmount",type:"uint256"}],name:"TokenExchanged",type:"event"},{inputs:[],name:"ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MLPToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"SERVICE_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDTToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_receiver",type:"address"}],name:"claimUsdt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getInfoAboutUsdt",outputs:[{internalType:"uint256",name:"USDTReceived_",type:"uint256"},{internalType:"uint256",name:"USDTClaimed_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"migrateUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mlpTotalAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ratesPrecision",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"swap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_MLPToken",type:"address"}],name:"updateMLPToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_totalAmount",type:"uint256"}],name:"updateMLPTotalAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"}],name:"updateRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_USDTToken",type:"address"}],name:"updateUSDTToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"updateUsdtClaimed",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"updateUsdtReceived",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtClaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdtReceived",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],A=[{inputs:[{internalType:"address",name:"_USDTToken",type:"address"},{internalType:"address",name:"_MLPToken",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"},{internalType:"uint256",name:"_totalAmount",type:"uint256"},{internalType:"uint256",name:"_minOrder",type:"uint256"},{internalType:"uint256",name:"_maxOrder",type:"uint256"},{internalType:"address",name:"_usdtReceiver",type:"address"},{internalType:"uint256[]",name:"unlockDates",type:"uint256[]"},{internalType:"uint256[]",name:"percents",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"mlpAmount",type:"uint256"}],name:"TokenExchanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"claimer",type:"address"},{indexed:!1,internalType:"uint256",name:"amountClaimed",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"TokensClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"addresses",type:"address[]"},{indexed:!1,internalType:"uint256[]",name:"value2",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"claimed",type:"uint256[]"}],name:"UserMigrated",type:"event"},{inputs:[],name:"ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MLPToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDTAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimerAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getUserInfo",outputs:[{internalType:"uint256",name:"amount_",type:"uint256"},{internalType:"uint256",name:"available_",type:"uint256"},{internalType:"uint256",name:"claimed_",type:"uint256"},{internalType:"uint256",name:"currentLockTime_",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxOrder",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"},{internalType:"uint256[]",name:"_claimed",type:"uint256[]"}],name:"migrateUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"minOrder",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mlpTotalAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ratesPrecision",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"swap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferMlpToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtReceived",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdtReceiver",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"}],stateMutability:"view",type:"function"}],g=[{inputs:[{internalType:"address",name:"_govTokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"claimer",type:"address"},{indexed:!1,internalType:"uint256",name:"amountClaimed",type:"uint256"},{indexed:!1,internalType:"uint256",name:"availableAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"TokensClaimed",type:"event"},{inputs:[],name:"ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"CLAIMER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_user",type:"address[]"}],name:"addBatchToWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_unlockDate",type:"uint256[]"},{internalType:"uint256[]",name:"_percent",type:"uint256[]"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"addLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"uint256",name:"_totalAmount",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"addRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string[]",name:"names",type:"string[]"},{internalType:"uint256[]",name:"totalAmounts",type:"uint256[]"}],name:"addRounds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"totalClaimed",type:"uint256"},{components:[{internalType:"uint256",name:"unlockDate",type:"uint256"},{internalType:"uint256",name:"percent",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"}],internalType:"struct Wallet.Lock[]",name:"locks",type:"tuple[]"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"currentLockNumber",type:"uint256"}],internalType:"struct Wallet.Round",name:"round",type:"tuple"}],name:"calcAvailableAmount",outputs:[{internalType:"uint256",name:"availableToken",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_recepient",type:"address"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"getRoundInfo",outputs:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"availableAmountInRound",type:"uint256"},{internalType:"uint256",name:"nextClaimDate",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"},{internalType:"string",name:"name",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRounds",outputs:[{components:[{internalType:"uint256",name:"totalAmount",type:"uint256"},{internalType:"uint256",name:"totalClaimed",type:"uint256"},{components:[{internalType:"uint256",name:"unlockDate",type:"uint256"},{internalType:"uint256",name:"percent",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"}],internalType:"struct Wallet.Lock[]",name:"locks",type:"tuple[]"},{internalType:"string",name:"name",type:"string"},{internalType:"uint256",name:"currentLockNumber",type:"uint256"}],internalType:"struct Wallet.Round[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"getUserInfo",outputs:[{internalType:"uint256",name:"amount_",type:"uint256"},{internalType:"uint256",name:"available_",type:"uint256"},{internalType:"uint256",name:"amountWithClaimed_",type:"uint256"},{internalType:"uint256",name:"currentLockTime_",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"govTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_users",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"migrateUsers",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"percentPrecision",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_user",type:"address[]"}],name:"removeBatchFromWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhiteList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_recepient",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"tokenAddress",type:"address"}],name:"removeToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_currentLockNumber",type:"uint256"},{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"updateCurrentLockNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_indexLock",type:"uint256"},{internalType:"uint256",name:"_indexRound",type:"uint256"},{internalType:"uint256",name:"_percent",type:"uint256"},{internalType:"uint256",name:"_unlockDate",type:"uint256"},{internalType:"uint256",name:"_claimed",type:"uint256"}],name:"updateLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_precision",type:"uint256"}],name:"updatePercentPrecision",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_govTokenAddress",type:"address"}],name:"updateTokenAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"bool",name:"_inWhitelist",type:"bool"}],name:"updateUserInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"bool",name:"inWhitelist",type:"bool"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"pubSale",type:"bool"},{internalType:"bool",name:"priSale",type:"bool"},{internalType:"bool",name:"seedSale",type:"bool"}],stateMutability:"view",type:"function"}],C=d("web3",{state:()=>({isConnect:!1,tokens:{SharkContract:{},USDTContract:{},PrivateContract:{},PublicContract:{},AdminWalletContract:{}},rates:{PrivateRate:0,PublicRate:0},userInfo:{PrivateInfo:{},PublicInfo:{}},SharkBalance:0,account:{},adminRounds:{}}),getters:{isConnected:e=>e.isConnected,getTokens:e=>e.tokens,getAccount:e=>e.account,setSharkBalance:e=>e.SharkBalance,setRates:e=>e.rates,getUserInfo:e=>e.userInfo,getRounds:e=>e.adminRounds},actions:{async ConnectToMetamask(){try{await this.connect()}catch(e){throw console.log(e),new Error(`ConnectToMetamask store failed: ${e}`)}},async connect(){try{const e=await this.$services.web3Service.initWeb3();this.isConnect=!0}catch(e){throw this.isConnect=!1,new Error(`Web3 connect error: ${e}`)}},async initEthContracts(){await Promise.all([this.initSharkContract()])},async getContractsData(){await Promise.all([this.getSharkBalance()])},async initSharkContract(){const[e,n]=[h,{}.VITE_SHARK_TOKEN],t=await this.$services.web3Service.initWeb3Contract(e,n);this.tokens={...this.tokens,SharkContract:t}},async initUSDTContract(){const[e,n]=[R,{}.VITE_USDT_TOKEN],t=await this.$services.web3Service.initWeb3Contract(e,n);this.tokens={...this.tokens,USDTContract:t}},async initPrivateContract(){const[e,n]=[A,{}.VITE_PRIVATE_CONTRACT],t=await this.$services.web3Service.initWeb3Contract(e,n);this.tokens={...this.tokens,PrivateContract:t}},async initAdminWalletContract(){const[e,n]=[g,{}.VITE_ADMIN_WALLET],t=await this.$services.web3Service.initWeb3Contract(e,n);this.tokens={...this.tokens,AdminWalletContract:t}},async initPublicContract(){const[e,n]=[x,{}.VITE_PUBLIC_CONTRACT],t=await this.$services.web3Service.initWeb3Contract(e,n);this.tokens={...this.tokens,PublicContract:t}},async getSharkBalance(){const e=this.account.address,n=await this.tokens.SharkContract.instance.methods.balanceOf(e).call(),t=this.$services.web3Service.web3.utils.fromWei(n);this.SharkBalance=Number.isInteger(t)?t:Number(t).toFixed(4)},async getPrivateRate(){this.rates.PrivateRate=await this.$services.web3Service.getContractRate(this.tokens.PrivateContract.instance)},async getPrivateUserInfo(){this.userInfo.PrivateInfo=await this.$services.web3Service.getUserInfo(this.tokens.PrivateContract.instance)},async getPublicRate(){this.rates.PublicRate=await this.$services.web3Service.getContractRate(this.tokens.PublicContract.instance)},async getPublicUserInfo(){this.userInfo.PublicInfo=await this.$services.web3Service.getUserInfo(this.tokens.PublicContract.instance)},async getAdminRounds(){const e=this.account.address,n=await this.tokens.AdminWalletContract.methods.getRounds().call({from:e});this.adminRounds=n.map(t=>({name:t.name,totalAmount:t.totalAmount,totalClaimed:t.totalClaimed}))}}}),I="/default-tokensale-web3-vue3-front/assets/metamask_icon-1a82592e.svg",L="/default-tokensale-web3-vue3-front/assets/metamask_icon-1a82592e.svg";const S=c({name:"MetamaskConnectModal",setup(){const e=k(),n=C(),t=b(()=>e.options);async function u(){await e.hideModal()}async function p(a){await e.showModal(a)}async function y(a){try{await n.ConnectToMetamask(a)}catch(s){console.log("ConnectToMetamask failed: ",s)}}return{options:t,web3Store:n,metamaskImg:I,hideModal:u,showModal:p,ConnectToMetamask:y}},methods:{async connectMetamask(){try{await this.ConnectToMetamask(),await this.hideModal()}catch(e){await this.hideModal(),await this.showModal({type:"ErrorModal",options:{message:e}})}}}}),r=e=>(_("data-v-6bbbcdcb"),e=e(),w(),e),P={class:"flex-center flex-column"},U=r(()=>i("img",{class:"w-100",src:L,alt:"metamask"},null,-1)),D=r(()=>i("div",{class:"size24-weight700 mb-5 text-uppercase text-align-center"},[i("div",null,"Connect your"),i("div",null,"metamask account")],-1));function W(e,n,t,u,p,y){const a=o("BaseButton"),s=o("BaseModal");return T(),f(s,{modalSize:"small"},{default:l(()=>[i("div",P,[U,D,v(a,{buttonSize:e.breakpointWidth>960?"middle":"small",class:"flex-center",onButtonClick:e.connectMetamask},{default:l(()=>[M("Connect wallet")]),_:1},8,["buttonSize","onButtonClick"])])]),_:1})}const N=m(S,[["render",W],["__scopeId","data-v-6bbbcdcb"]]);export{N as default};