// TODO: Create an AJAX GET request for the file under data/inventory.json

const getData = async () => {
    const url = "./data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const createCardElement = ({ title, quantity, price, categories }) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card");
    cardWrapper.innerHTML = `
        <div class="card card-header">${title}</div>
        <div class="card card-body">
            <ul>
                <li>
                    <span>
                        <strong>Stock:</strong>
                        <span>${quantity} left</span>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Price:</strong>
                        <span>$${price}</span>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Tool Type:</strong>
                        <span>${categories}</span>
                    </span>
                </li>
            </ul>
        </div>
        <div class="card card-footer">
            <button>Add to cart</button>
        </div>
    `;

    const cartBtn = cardWrapper.querySelector("button");
    cartBtn.addEventListener("click", () => {
        alert("Added to cart");
    });

    return cardWrapper;
};

const renderInventory = (inventory) => {
    const tbody = document.querySelector("#insertProducts");
    const inventoryFragment = document.createDocumentFragment();
    for (let tool of inventory) {
        const card = createCardElement(tool);
        inventoryFragment.appendChild(card);
    }
    tbody.appendChild(inventoryFragment);
};

(async () => {
    const inventory = await getData();
    console.log(inventory);
    renderInventory(inventory);
})();
