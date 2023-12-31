(function () {
  ("use strict");

  /**
   * TODO:
   * Create an object with firstName and lastName properties that are strings
   * with your first and last name. Store this object in a variable named
   * `person`.
   *
   * Example:
   *  > console.log(person.firstName) // "Rick"
   *  > console.log(person.lastName) // "Sanchez"
   */

  const person = {
    firstName: "Rick",
    lastName: "Sanchez",
    sayHello: function () {
      console.log(`Hello from ${this.firstName} ${this.lastName}`);
    },
  };

  //   console.log(person.firstName);
  //   console.log(person.lastName);

  /**
   * TODO:
   * Add a sayHello method to the person object that returns a greeting using
   * the firstName and lastName properties.
   * console.log the returned message to check your work
   *
   * Example
   * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
   */

  console.log(person.sayHello());

  /** TODO:
   * HEB has an offer for the shoppers that buy products amounting to
   * more than $200. If a shopper spends more than $200, they get a 12%
   * discount. Write a JS program, using conditionals, that logs to the
   * browser, how much Ryan, Cameron and George need to pay. We know that
   * Cameron bought $180, Ryan $250 and George $320. Your program will have to
   * display a line with the name of the person, the amount before the
   * discount, the discount, if any, and the amount after the discount.
   *
   * Uncomment the lines below to create an array of objects where each object
   * represents one shopper. Use a foreach loop to iterate through the array,
   * and console.log the relevant messages for each person
   */

  const shoppers = [
    { name: "Cameron", amount: 180 },
    { name: "Ryan", amount: 250 },
    { name: "George", amount: 320 },
  ];

  const totalPrice = () => {
    const discountPct = 12 / 100;
    let discountAmt;
    let totalBill;
    shoppers.forEach((shopper) => {
      if (shopper.amount > 200) {
        discountAmt = shopper.amount * discountPct;
        totalBill = shopper.amount - discountAmt;
        console.log(
          `${shopper.name} gets a total discount of $${discountAmt}! The total bill is $${totalBill}`
        );
      } else {
        console.log(`${shopper.name} does not get a discount.`);
      }
    });
  };

  totalPrice();

  // discount = 12% if spent > $200

  /** TODO:
   * Create an array of objects that represent books and store it in a
   * variable named `books`. Each object should have a title and an author
   * property. The author property should be an object with properties
   * `firstName` and `lastName`. Be creative and add at least 5 books to the
   * array
   *
   * Example:
   * > console.log(books[0].title) // "The Salmon of Doubt"
   * > console.log(books[0].author.firstName) // "Douglas"
   * > console.log(books[0].author.lastName) // "Adams"
   */

  const books = [
    {
      title: "Rich Dad Poor Dad",
      author: { firstName: "Robert", lastName: "Kiyosaki" },
    },
    {
      title: "The Intelligent Investor",
      author: { firstName: "Benjamin", lastName: "Graham" },
    },
    {
      title: "Think and Grow Rich",
      author: { firstName: "Napoleon", lastName: "Hill" },
    },
    {
      title: "The Total Money Makeover",
      author: { firstName: "Dave", lastName: "Ramsey" },
    },
    {
      title: "Secrets of the Millionaire Mind",
      author: { firstName: "T.Harv", lastName: "Eker" },
    },
  ];

  /**
   * TODO:
   * Loop through the books array and output the following information about
   * each book:
   * - the book number (use the index of the book in the array)
   * - the book title
   * - author's full name (first name + last name)
   *
   * Example Console Output:
   *
   *      Book # 1
   *      Title: The Salmon of Doubt
   *      Author: Douglas Adams
   *      ---
   *      Book # 2
   *      Title: Walkaway
   *      Author: Cory Doctorow
   *      ---
   *      Book # 3
   *      Title: A Brief History of Time
   *      Author: Stephen Hawking
   *      ---
   *      ...
   */

  //   const listBook = () => {
  //     books.forEach((book) => {
  //       const title = book.title;
  //       const fullName = `${book.author.firstName} ${book.author.lastName}`;
  //       const index = books.indexOf(book);
  //       console.log(`
  //     Book # ${index + 1}
  //     Title: ${title}
  //     Author: ${fullName}`);
  //     });
  //   };

  //   listBook();

  /**
   * Bonus:
   * - Create a function named `createBook` that accepts a title and author
   *   name and returns a book object with the properties described
   *   previously. Refactor your code that creates the books array to instead
   *   use your function.
   * - Create a function named `showBookInfo` that accepts a book object and
   *   outputs the information described above. Refactor your loop to use your
   *   `showBookInfo` function.
   */

  const createBook = () => {
    let newBooks = [];
    let bookTitle;
    let authorFirstName;
    let authorLastName;
    let answer;
    do {
      bookTitle = prompt("Please enter the title of your book.");
      console.log(bookTitle);
      authorFirstName = prompt("Please enter the first name of your author.");
      console.log(authorFirstName);
      authorLastName = prompt("Please enter the last name of your author.");
      console.log(authorLastName);
      answer = confirm("Would you like to add another book?");
      console.log(answer);
      (newBooks = {
        title: bookTitle,
        author: {
          firstName: authorFirstName,
          lastName: authorLastName,
        },
      }),
        books.push(newBooks);
    } while (answer === true);
    {
      alert("Thank you come again");
    }
  };

  createBook();
  // console.log(books);

  // const listBook = (arrBooks) => {
  //   arrBooks.forEach((book) => {
  //     const title = book.title;
  //     const fullName = `${book.author.firstName} ${book.author.lastName}`;
  //     const index = arrBooks.indexOf(book);
  //     console.log(`Book # ${index + 1}\nTitle: ${title}\nAuthor: ${fullName}`);
  //   });
  // };

  const showBookInfo = (arr) => {
    let result;
    for (let book of arr) {
      const i = arr.indexOf(book);
      const { title } = book;
      const { firstName, lastName } = book.author;
      result = console.log(
        `Book # ${i + 1}\nTitle: ${title}\nAuthor: ${firstName} ${lastName}`
      );
    }
    return result;
  };

  showBookInfo(books);
})();
