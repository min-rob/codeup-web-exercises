import { books } from "../data/books.js";

const renderBookElement = (books) => {
    const {
        isbn10,
        title,
        authors,
        categories,
        thumbnail,
        description,
        published_year,
        average_rating,
        num_pages,
        ratings_count,
        price,
        style,
    } = books;
    const bookElement = document.createElement("tr");
    bookElement.innerHTML = `
        <td>${title}</td>
        <td>${authors}</td>
        <td>${categories}</td>
        <td>${isbn10}</td>
        <td>${published_year}</td>
        <td>
        <button class="btn btn-sm btn-danger" data-delete>Delete</button></td>
        `;
    const deleteBtn = bookElement.querySelector("button[data-delete]");
    deleteBtn.addEventListener("click", (e) => {
        bookElement.remove();
    });
    // document.querySelector("#book-list").appendChild(bookElement);
    //return the node
    return bookElement;
};

const updateBooks = (books) => {
    document.querySelector("#book-list").innerHTML = "";
    //get all input values
    const categoryInput = document.querySelector("#category");

    const categoryValue = categoryInput.value;

    const searchInput = document.querySelector("#search");

    const searchValue = searchInput.value;

    //filter
    let filteredBooks = books;

    filteredBooks = filteredBooks.filter((book) => {
        //not filtering by category
        if (!categoryValue) {
            return true;
        }
        if (typeof book.categories !== "string") {
            return false;
        }
        return book.categories
            .toLowerCase()
            .includes(categoryValue.toLowerCase());
    });
    filteredBooks = filteredBooks.filter((book) => {
        //not filtering by searching
        if (!searchValue) {
            return true;
        }
        if (typeof book.title !== "string") {
            return false;
        }
        return book.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    //use a fragment to update in one go, not each book at a time.
    const booksFragment = document.createDocumentFragment();

    //render the element
    for (let book of filteredBooks) {
        booksFragment.appendChild(renderBookElement(book));
    }
    //finding the place to insert the fragment
    document.querySelector("#book-list").appendChild(booksFragment);
};

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const handleFilterEvents = (books) => {
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener(
        "input",
        debounce((e) => {
            if (
                searchInput.value.length < 3 ||
                searchInput.value.toLowerCase() === "the"
            ) {
                return;
            }
            updateBooks(books);
        }, 500)
    );
    const categoryInput = document.querySelector("#category");
    categoryInput.addEventListener(
        "change",
        debounce((e) => {
            updateBooks(books);
        }, 500)
    );
};

// MAIN
(() => {
    updateBooks(books);
    handleFilterEvents(books);
})();
