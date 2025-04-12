"use strict";

const users = [
  {
    id: `0344240`,
    firstName: `Jonibek`,
    LastName: `Qurbonov`,
    userCard: {
      cardName: `Humo`,
      cardNum: `9860-1201-3209-2313`,
      cardMonth: `12/29`,
      cardPass: `1271`,
      cardClickPass: `11998`,
      amount: 200000,
    },
  },
  {
    id: `1243241`,
    firstName: `Asror`,
    LastName: `Javlonov`,
    userCard: {
      cardName: `Uzcard`,
      cardNum: `4121-1421-3091-2321`,
      cardMonth: `01/27`,
      cardPass: `8787`,
      cardClickPass: `87122`,
      amount: 20000,
    },
  },
];

const ATM = {
  /* user card */
  userCard: function (cardNum, cardPass, amount) {
    return users.find((user) => {
      user.userCard.cardNum === cardNum &&
        user.userCard.cardPass === cardPass &&
        user.userCard.amount > 0;
    });
  },

  /* paynet -2% */
  paynetPay: function () {
    let user = this.userCard(cardNum, cardPass, amount);

    if (user == true) {
      
    }
  },

  /* click -1% */
};

console.log(ATM.paynetPay("9860-1201-3209-2313", "1271", 10000));
