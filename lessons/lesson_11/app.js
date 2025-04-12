// "use strict";

// const users = [
//   {
//     id: `0344240`,
//     firstName: `Jonibek`,
//     LastName: `Qurbonov`,
//     userCard: {
//       cardName: `Humo`,
//       cardNum: `9860-1201-3209-2313`,
//       cardMonth: `12/29`,
//       cardPass: `1271`,
//       cardClickPass: `11998`,
//       amount: 200000,
//     },
//   },
//   {
//     id: `1243241`,
//     firstName: `Asror`,
//     LastName: `Javlonov`,
//     userCard: {
//       cardName: `Uzcard`,
//       cardNum: `4121-1201-3209-2313`,
//       cardMonth: `01/27`,
//       cardPass: `8787`,
//       cardClickPass: `87122`,
//       amount: 20000,
//     },
//   },
// ];

// const ATM = {
//   /* Verify user card */
//   userCard: function (cardNum, cardPass) {
//     return users.find(
//       (user) =>
//         user.userCard.cardNum === cardNum && user.userCard.cardPass === cardPass
//     );
//   },

//   /* Verify user for Click system */
//   verifyClick: function (cardNum, clickPass) {
//     return users.find(
//       (user) =>
//         user.userCard.cardNum === cardNum &&
//         user.userCard.cardClickPass === clickPass
//     );
//   },

//   /* Withdraw money (Paynet -2% commission) */
//   paynet: function (cardNum, cardPass, amount) {
//     const user = this.userCard(cardNum, cardPass);
//     if (!user) {
//       return { success: false, message: "Invalid card or password" };
//     }

//     const totalAmount = amount + amount * 0.02; // 2% commission
//     if (user.userCard.amount < totalAmount) {
//       return { success: false, message: "Insufficient funds" };
//     }

//     user.userCard.amount -= totalAmount;
//     return {
//       success: true,
//       message: `Withdrawn ${amount} with 2% commission (${
//         amount * 0.02
//       }). Remaining balance: ${user.userCard.amount}`,
//     };
//   },

//   /* Transfer money via Click (+2% bonus) */
//   click: function (cardNum, clickPass, amount) {
//     const user = this.verifyClick(cardNum, clickPass);
//     if (!user) {
//       return { success: false, message: "Invalid card or Click password" };
//     }

//     const bonusAmount = amount * 0.02; // 2% bonus
//     user.userCard.amount += bonusAmount;

//     return {
//       success: true,
//       message: `Received ${amount} with 2% bonus (${bonusAmount}). New balance: ${user.userCard.amount}`,
//     };
//   },

//   /* Pay utility bills (-1% commission) */
//   komunal: function (cardNum, cardPass, amount) {
//     const user = this.userCard(cardNum, cardPass);
//     if (!user) {
//       return { success: false, message: "Invalid card or password" };
//     }

//     const totalAmount = amount + amount * 0.01; // 1% commission
//     if (user.userCard.amount < totalAmount) {
//       return { success: false, message: "Insufficient funds" };
//     }

//     user.userCard.amount -= totalAmount;
//     return {
//       success: true,
//       message: `Paid ${amount} for utility with 1% commission (${
//         amount * 0.01
//       }). Remaining balance: ${user.userCard.amount}`,
//     };
//   },

//   /* Check balance */
//   checkBalance: function (cardNum, cardPass) {
//     const user = this.userCard(cardNum, cardPass);
//     if (!user) {
//       return { success: false, message: "Invalid card or password" };
//     }

//     return {
//       success: true,
//       message: `Your balance: ${user.userCard.amount}`,
//     };
//   },
// };

// // Example usage:
// console.log(ATM.paynet("9860-1201-3209-2313", "1271", 10000));
// console.log(ATM.click("4121-1201-3209-2313", "87122", 10000));
// console.log(ATM.komunal("9860-1201-3209-2313", "1271", 5000));
// console.log(ATM.checkBalance("9860-1201-3209-2313", "1271"));

// ===================================================================

"use strict";

const users = [
  {
    id: `0344240`,
    firstName: `Jonibek`,
    LastName: `Qurbonov`,
    userCard: {
      cardName: `Humo`,
      cardNum: `9860-1201-3209-2313`,
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
      cardNum: `4121-1201-3209-2313`,
      cardPass: `8787`,
      cardClickPass: `87122`,
      amount: 20000,
    },
  },
];

const ATM = {
  /* Verify user card */
  userCard: function (cardNum, cardPass) {
    return users.find(
      (user) =>
        user.userCard.cardNum === cardNum && user.userCard.cardPass === cardPass
    );
  },

  /* Verify user for Click system */
  verifyClick: function (cardNum, clickPass) {
    return users.find(
      (user) =>
        user.userCard.cardNum === cardNum &&
        user.userCard.cardClickPass === clickPass
    );
  },

  /* Withdraw money (Paynet -2% commission) */
  paynet: function (cardNum, cardPass, amount) {
    const user = this.userCard(cardNum, cardPass);
    if (!user) {
      return { success: false, message: "Invalid card or password" };
    }

    const totalAmount = amount + amount * 0.02; // 2% commission
    if (user.userCard.amount < totalAmount) {
      return { success: false, message: "Insufficient funds" };
    }

    user.userCard.amount -= totalAmount;
    return {
      success: true,
      message: `Withdrawn ${amount} with 2% commission (${
        amount * 0.02
      }). Remaining balance: ${user.userCard.amount}`,
    };
  },

  /* Transfer money via Click (+2% bonus) */
  click: function (cardNum, clickPass, amount) {
    const user = this.verifyClick(cardNum, clickPass);
    if (!user) {
      return { success: false, message: "Invalid card or Click password" };
    }

    const bonusAmount = amount * 0.02; // 2% bonus
    user.userCard.amount += bonusAmount;

    return {
      success: true,
      message: `Received ${amount} with 2% bonus (${bonusAmount}). New balance: ${user.userCard.amount}`,
    };
  },

  /* Check balance */
  checkBalance: function (cardNum, cardPass) {
    const user = this.userCard(cardNum, cardPass);
    if (!user) {
      return { success: false, message: "Invalid card or password" };
    }

    return {
      success: true,
      message: `Your balance: ${user.userCard.amount}`,
    };
  },

  /* Transfer money between accounts */
  transfer: function (fromCardNum, fromCardPass, toCardNum, amount) {
    // Find sender and receiver
    const sender = this.userCard(fromCardNum, fromCardPass);
    const receiver = users.find((user) => user.userCard.cardNum === toCardNum);

    // Validations
    if (!sender) {
      return { success: false, message: "Invalid sender card or password" };
    }

    if (!receiver) {
      return { success: false, message: "Receiver card not found" };
    }

    if (sender.userCard.cardNum === receiver.userCard.cardNum) {
      return { success: false, message: "Cannot transfer to the same account" };
    }

    const commission = amount * 0.01; // 1% commission
    const totalAmount = amount + commission;

    if (sender.userCard.amount < totalAmount) {
      return { success: false, message: "Insufficient funds for transfer" };
    }

    // Perform transfer
    sender.userCard.amount -= totalAmount;
    receiver.userCard.amount += amount;

    return {
      success: true,
      message: `Transferred ${amount} from ${sender.userCard.cardNum} to ${receiver.userCard.cardNum} with 1% commission (${commission}).\nSender new balance: ${sender.userCard.amount}\nReceiver new balance: ${receiver.userCard.amount}`,
    };
  },
};

// Example usage of transfer function
console.log("Before transfer:");
console.log(ATM.checkBalance("9860-1201-3209-2313", "1271"));
console.log(ATM.checkBalance("4121-1201-3209-2313", "8787"));

console.log("\nTransferring 50000 from Humo to Uzcard:");
console.log(
  ATM.transfer("9860-1201-3209-2313", "1271", "4121-1201-3209-2313", 50000)
);

console.log("\nAfter transfer:");
console.log(ATM.checkBalance("9860-1201-3209-2313", "1271"));
console.log(ATM.checkBalance("4121-1201-3209-2313", "8787"));
