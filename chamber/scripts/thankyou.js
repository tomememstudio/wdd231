const params = new URLSearchParams(window.location.search)

document.querySelector("#results").innerHTML = `
<p><strong>First Name:</strong> ${params.get("firstname")}</p>
<p><strong>Last Name:</strong> ${params.get("lastname")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Phone:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("organization")}</p>
<p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
`
// Set current year
document.querySelector("#year").textContent = new Date().getFullYear();

// Set last modified date
document.querySelector("#lastModified").textContent = document.lastModified;