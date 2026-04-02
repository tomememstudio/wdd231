// Set timestamp when page loads
document.addEventListener("DOMContentLoaded", () => {

    const timestampField = document.querySelector("#timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

});

// Set current year
document.querySelector("#year").textContent = new Date().getFullYear();

// Set last modified date
document.querySelector("#lastModified").textContent = document.lastModified;