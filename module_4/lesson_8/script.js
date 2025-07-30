


// ---------------------------------- 2

/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);



// ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};


/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],



  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    const obj = { id: amount, amount, type };
    return obj;
  },


  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },


  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if(this.balance < amount) {
      console.log("недостатньо коштів");
      return;
    }
    this.balance -= amount;

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },


  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },


  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for(const item of this.transactions) {
      if(item.id === id) {
        return item;
      }
    }
    return "Not found";
  },


  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;

    for(const item of this.transactions) {
      if(item.type === type) {
        sum += item.amount;
      }
    }
    return sum;
  },
};



// account.deposit(300);
// account.deposit(400);

// account.withdraw(100);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(300));
// console.log("DEPOSIT", account.getTransactionTotal(Transaction.DEPOSIT));
// console.log("WITHDRAW", account.getTransactionTotal(Transaction.WITHDRAW));


// console.log(account);






