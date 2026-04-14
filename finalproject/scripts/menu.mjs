const year = document.querySelector("#year")
const lastModified = document.querySelector("#lastModified")

if (year) {
    year.textContent = new Date().getFullYear()
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`
}
const container = document.querySelector("#menuContainer")

async function loadMenu() {

    try {

        const response = await fetch("data/menu.json")

        const foods = await response.json()

        foods.forEach(food => {

            const card = document.createElement("div")

            card.classList.add("food-card")

            card.innerHTML = `

<h3>${food.name}</h3>

<img src="${food.image}" alt="${food.name}" loading="lazy">

<p>Category: ${food.category}</p>

<p>Price: ${food.price}</p>

`

            container.appendChild(card)

        })

    }

    catch (error) {

        console.log("Error loading menu", error)

    }

}

loadMenu()