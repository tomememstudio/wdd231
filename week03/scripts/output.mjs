export function setTitle(course) {
    document.querySelector("#courseTitle").textContent = course.title;
}

export function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    sections.forEach(section => {
        const li = document.createElement("li");
        li.textContent = `Section ${section.number}: ${section.enrolled} enrolled`;
        sectionList.appendChild(li);
    });
}