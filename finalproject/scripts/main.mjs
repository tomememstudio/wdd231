const year = document.querySelector("#year")
const lastModified = document.querySelector("#lastModified")

if (year) {
    year.textContent = new Date().getFullYear()
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`
}
const menuBtn = document.querySelector("#menuBtn")
const nav = document.querySelector("#navMenu")

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open")

})

const modal = document.querySelector("#specialModal")

document.querySelector("#openModal").addEventListener("click", () => {

    modal.showModal()

})

document.querySelector("#closeModal").addEventListener("click", () => {

    modal.close()

})