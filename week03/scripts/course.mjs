const byuiCourse = {
    title: "Web Development",
    sections: [
        { number: 1, enrolled: 30 },
        { number: 2, enrolled: 25 },
    ],
    changeEnrollment(sectionNum, enroll = true) {
        const section = this.sections.find(s => s.number === sectionNum);
        if (section) {
            section.enrolled += enroll ? 1 : -1;
        }
        // remove renderSections(this.sections) from here
    }
};

export default byuiCourse;