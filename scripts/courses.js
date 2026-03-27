const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { code: "WDD231", name: "Web Frontend Development I", credits: 2, completed: false },
    { code: "CSE110", name: "Introduction to Programming", credits: 2, completed: true },
    { code: "CSE111", name: "Programming with Functions", credits: 2, completed: true },
    { code: "CSE212", name: "Programming with Data Structures", credits: 2, completed: false },
    { code: "CSE210", name: "Programming with Classes", credits: 2, completed: true }
];

const modal = document.querySelector("#courseModal");
const closeBtn = document.querySelector("#closeModal");
const modalContent = document.querySelector("#modalContent");
const courseContainer = document.querySelector("#courseList");
const creditDisplay = document.querySelector("#credits");

function showCourseDetails(course) {
    modalContent.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <p><strong>Title:</strong> ${course.title}</p>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Description:</strong> ${course.description}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p><strong>Tech Stack:</strong> ${course.technology}</p>
  `;

    modal.showModal();
}
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");
        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} credits</p>
    `;

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const filtered = courses.filter(course => course.code.includes("WDD"));
    displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {
    const filtered = courses.filter(course => course.code.includes("CSE"));
    displayCourses(filtered);
});
courseCard.addEventListener("click", () => {
    showCourseDetails(course);
});