const url = "data/members.json";
const container = document.querySelector("#members");

// FETCH DATA
async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        displayMembers(data.members);

    } catch (error) {
        console.error("Error loading members:", error);
    }
}

getMembers();

// DISPLAY MEMBERS
function displayMembers(members) {
    container.innerHTML = ""; // clear if needed

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("card"); // 🔥 IMPORTANT FIX

        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const image = document.createElement("img");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.href = member.websiteURL;
        website.target = "_blank";

        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    });
}

// DEFAULT VIEW
container.classList.add("grid");

// TOGGLE VIEW
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

// FOOTER DATES
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;