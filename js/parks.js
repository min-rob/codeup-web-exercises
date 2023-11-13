(() => {
    const highlightListBtn = document.querySelector("#hightlightList");
    highlightListBtn.addEventListener("click", (e) => {
        const lists = document.querySelectorAll("ul li:last-child");
        for (let list of lists) {
            list.classList.toggle("highlight");
        }
    });

    // const clickableHeaders = document.querySelectorAll("#national-park-name");
    // for (let clickableHeader of clickableHeaders) {
    //     clickableHeader.addEventListener("click", (e) => {
    //         const parentDiv = clickableHeader.parentElement;
    //         console.log("parent div is", parentDiv);
    //         const dataId = parentDiv.getAttribute("data-parks");
    //         console.log("dataId is:", dataId);
    //         const listItems = parentDiv.querySelectorAll("ul");
    //         for (let listItem of listItems) {
    //             listItem.classList.toggle("bold");
    //         }
    //     });
    // }

    //choosing all the H3's
    const h3s = document.querySelectorAll("h3");
    //looping through all the H3's
    for (let h3 of h3s) {
        //Adding an event listener of click to the H3's
        h3.addEventListener("click", (e) => {
            //getting the parent element of the H3 with the ul selector
            const list = h3.parentElement.querySelector("ul");
            //toggling the class of bold to the ul, where li's inherit the font styling.
            list.classList.toggle("bold");
        });
    }

    // const clickableLists = document.querySelectorAll(".park-facts");
    // for (let clickableList of clickableLists) {
    //     clickableList.addEventListener("click", (e) => {
    //         const parentDiv = clickableList.parentElement;
    //         console.log("parent div is", parentDiv);
    //         const dataId = parentDiv.getAttribute("data-parks");
    //         console.log("dataId is:", dataId);
    //         const listItems = parentDiv.querySelectorAll("ul");
    //         for (let listItem of listItems) {
    //             listItem.firstElementChild.style.color = "blue";
    //         }
    //     });
    // }

    //selecting all the Li's
    const listItems = document.querySelectorAll("li");
    //Looping through all of the list items.
    for (let listItem of listItems) {
        //adding click event listener to the Li's
        listItem.addEventListener("click", (e) => {
            //getting the parent element's, first child.
            const firstListItem = listItem.parentElement.firstElementChild;
            //adding a classlist of blue to the first list item.
            firstListItem.classList.toggle("blue");
        });
    }

    const pictures = document.querySelectorAll("img.picture-frame");
    for (let pic of pictures) {
        pic.addEventListener("click", (e) => {
            //nodes
            const leftImg = document.querySelectorAll("img.picture-frame")[0];
            const centerImg = document.querySelectorAll("img.picture-frame")[1];
            const rightImg = document.querySelectorAll("img.picture-frame")[2];

            //src getting it after click because they can switch
            const leftImgSrc = leftImg.getAttribute("src");
            const rightImgSrc = rightImg.getAttribute("src");
            const centerImgSrc = centerImg.getAttribute("src");

            if (e.target === leftImg) {
                leftImg.setAttribute("src", centerImgSrc);
                centerImg.setAttribute("src", leftImgSrc);
            }
            if (e.target === centerImg) {
                const rand = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    centerImg.setAttribute("src", leftImgSrc);
                } else {
                    centerImg.setAttribute("src", rightImgSrc);
                }
            }
            if (e.target === rightImg) {
                rightImg.setAttribute("src", centerImgSrc);
                centerImg.setAttribute("src", rightImgSrc);
            }
        });
    }
})();
