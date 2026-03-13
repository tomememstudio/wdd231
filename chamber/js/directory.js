const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);

}

getMembers();

const displayMembers = (members) => {

    members.forEach(member => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const image = document.createElement("img");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.href = member.website;

        image.src = `images/${member.image}`;
        image.alt = member.name;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);

    });

}
const members = document.querySelector("#members");
members.classList.add("grid");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;