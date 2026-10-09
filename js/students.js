/* =========================================================
   STUDENT DATA
========================================================= */

const students = [

    {
        name: "Arjun Kumar",
        roll: "22CSE001",
        department: "CSE",
        company: "Microsoft",
        package: 24,
        status: "placed",
        role: "Software Engineer",
        year: 2026
    },

    {
        name: "Priya Sharma",
        roll: "22CSE014",
        department: "CSE",
        company: "Amazon",
        package: 18,
        status: "placed",
        role: "Software Development Engineer",
        year: 2026
    },

    {
        name: "Rahul Reddy",
        roll: "22CSE027",
        department: "CSE",
        company: "Deloitte",
        package: 16,
        status: "placed",
        role: "Technology Consultant",
        year: 2026
    },

    {
        name: "Sneha Patel",
        roll: "22CSE041",
        department: "CSE",
        company: "IBM",
        package: 15,
        status: "placed",
        role: "Software Developer",
        year: 2026
    },

    {
        name: "Vikram Singh",
        roll: "22CSE056",
        department: "CSE",
        company: "Accenture",
        package: 14,
        status: "placed",
        role: "Associate Software Engineer",
        year: 2026
    },

    {
        name: "Ananya Rao",
        roll: "22CSE072",
        department: "CSE",
        company: "TCS",
        package: 12,
        status: "placed",
        role: "Software Engineer",
        year: 2026
    },

    {
        name: "Karthik Varma",
        roll: "22IT008",
        department: "IT",
        company: "Infosys",
        package: 10,
        status: "placed",
        role: "Systems Engineer",
        year: 2026
    },

    {
        name: "Meghana Reddy",
        roll: "22IT021",
        department: "IT",
        company: "Cognizant",
        package: 11,
        status: "placed",
        role: "Programmer Analyst",
        year: 2026
    },

    {
        name: "Aditya Verma",
        roll: "22IT034",
        department: "IT",
        company: "Accenture",
        package: 14,
        status: "placed",
        role: "Application Developer",
        year: 2026
    },

    {
        name: "Pooja Nair",
        roll: "22IT047",
        department: "IT",
        company: "TCS",
        package: 12,
        status: "placed",
        role: "System Engineer",
        year: 2026
    },

    {
        name: "Sai Teja",
        roll: "22ECE005",
        department: "ECE",
        company: "Microsoft",
        package: 22,
        status: "placed",
        role: "Product Engineer",
        year: 2026
    },

    {
        name: "Harini Das",
        roll: "22ECE018",
        department: "ECE",
        company: "IBM",
        package: 15,
        status: "placed",
        role: "Associate Technical Engineer",
        year: 2026
    },

    {
        name: "Nikhil Rao",
        roll: "22ECE031",
        department: "ECE",
        company: "Deloitte",
        package: 16,
        status: "placed",
        role: "Technology Analyst",
        year: 2026
    },

    {
        name: "Divya Rani",
        roll: "22ECE045",
        department: "ECE",
        company: "Infosys",
        package: 10,
        status: "placed",
        role: "Technology Analyst",
        year: 2026
    },

    {
        name: "Manoj Kumar",
        roll: "22EEE009",
        department: "EEE",
        company: "TCS",
        package: 12,
        status: "placed",
        role: "System Engineer",
        year: 2026
    },

    {
        name: "Keerthi Lakshmi",
        roll: "22EEE023",
        department: "EEE",
        company: "Wipro",
        package: 9,
        status: "placed",
        role: "Project Engineer",
        year: 2026
    },

    {
        name: "Rohit Kumar",
        roll: "22EEE036",
        department: "EEE",
        company: "Cognizant",
        package: 11,
        status: "placed",
        role: "Programmer Analyst",
        year: 2026
    },

    {
        name: "Ashok Reddy",
        roll: "22MECH012",
        department: "MECH",
        company: "Daimler Truck",
        package: 12,
        status: "placed",
        role: "Graduate Engineer",
        year: 2026
    },

    {
        name: "Lakshmi Priya",
        roll: "22MECH025",
        department: "MECH",
        company: "Accenture",
        package: 14,
        status: "placed",
        role: "Business Analyst",
        year: 2026
    },

    {
        name: "Tarun Sai",
        roll: "22MECH038",
        department: "MECH",
        company: "TCS",
        package: 8,
        status: "placed",
        role: "System Engineer",
        year: 2026
    },

    {
        name: "Sandeep Kumar",
        roll: "22CIVIL011",
        department: "CIVIL",
        company: "Infosys",
        package: 9,
        status: "placed",
        role: "Systems Engineer",
        year: 2026
    },

    {
        name: "Swathi Reddy",
        roll: "22CIVIL024",
        department: "CIVIL",
        company: "Wipro",
        package: 8,
        status: "placed",
        role: "Project Engineer",
        year: 2026
    },

    {
        name: "Naveen Kumar",
        roll: "22CIVIL037",
        department: "CIVIL",
        company: "-",
        package: 0,
        status: "unplaced",
        role: "Seeking Opportunity",
        year: 2026
    },

    {
        name: "Ishita Rao",
        roll: "22CSE088",
        department: "CSE",
        company: "-",
        package: 0,
        status: "unplaced",
        role: "Seeking Opportunity",
        year: 2026
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const studentSearch =
    document.getElementById("studentSearch");

const departmentFilter =
    document.getElementById("departmentFilter");

const statusFilter =
    document.getElementById("statusFilter");

const companyFilter =
    document.getElementById("companyFilter");

const studentSort =
    document.getElementById("studentSort");

const resetStudentFilters =
    document.getElementById("resetStudentFilters");

const resetStudentFiltersEmpty =
    document.getElementById("resetStudentFiltersEmpty");

const studentsTableBody =
    document.getElementById("studentsTableBody");

const noStudents =
    document.getElementById("noStudents");

const studentResultCount =
    document.getElementById("studentResultCount");


/* =========================================================
   GET INITIALS
========================================================= */

function getInitials(name) {

    if (!name || name === "-") {
        return "ST";
    }

    const words = name.split(" ");

    if (words.length >= 2) {

        return (
            words[0].charAt(0) +
            words[1].charAt(0)
        ).toUpperCase();

    }

    return name.substring(0, 2).toUpperCase();

}


/* =========================================================
   RENDER STUDENTS
========================================================= */

function renderStudents(studentList) {

    studentsTableBody.innerHTML = "";


    if (studentList.length === 0) {

        noStudents.classList.remove("d-none");

        studentResultCount.textContent =
            "No student records match your filters.";

        return;

    }


    noStudents.classList.add("d-none");


    studentList.forEach(student => {

        const originalIndex =
            students.indexOf(student);


        const row =
            document.createElement("tr");


        const packageText =
            student.package > 0
                ? `₹${student.package} LPA`
                : "—";


        const statusBadge =
            student.status === "placed"
                ? `
                    <span class="student-status placed">
                        <i class="fa-solid fa-circle-check"></i>
                        Placed
                    </span>
                  `
                : `
                    <span class="student-status unplaced">
                        <i class="fa-solid fa-clock"></i>
                        Looking
                    </span>
                  `;


        row.innerHTML = `

            <td>

                <div class="student-table-profile">

                    <div class="student-avatar">
                        ${getInitials(student.name)}
                    </div>

                    <div>

                        <strong>
                            ${student.name}
                        </strong>

                        <small>
                            ${student.role}
                        </small>

                    </div>

                </div>

            </td>


            <td>
                <span class="student-roll">
                    ${student.roll}
                </span>
            </td>


            <td>

                <span class="department-badge">
                    ${student.department}
                </span>

            </td>


            <td>

                ${
                    student.company !== "-"
                    ? `
                        <span class="student-company">
                            ${student.company}
                        </span>
                      `
                    : `
                        <span class="student-company-muted">
                            Not Placed
                        </span>
                      `
                }

            </td>


            <td>

                <strong class="student-package">
                    ${packageText}
                </strong>

            </td>


            <td>
                ${statusBadge}
            </td>


            <td>

                <button
                    class="student-view-btn"
                    onclick="showStudentDetails(${originalIndex})"
                    aria-label="View student details">

                    <i class="fa-solid fa-eye"></i>

                </button>

            </td>

        `;


        studentsTableBody.appendChild(row);

    });


    studentResultCount.textContent =
        `Showing ${studentList.length} of ${students.length} students`;

}


/* =========================================================
   FILTER STUDENTS
========================================================= */

function filterStudents() {

    const searchTerm =
        studentSearch.value
            .toLowerCase()
            .trim();


    const department =
        departmentFilter.value;


    const status =
        statusFilter.value;


    const company =
        companyFilter.value;


    const sort =
        studentSort.value;


    let filteredStudents =
        students.filter(student => {


            const matchesSearch =

                student.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                student.roll
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                student.company
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                student.department
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesDepartment =
                department === "all" ||
                student.department === department;


            const matchesStatus =
                status === "all" ||
                student.status === status;


            const matchesCompany =
                company === "all" ||
                student.company === company;


            return (
                matchesSearch &&
                matchesDepartment &&
                matchesStatus &&
                matchesCompany
            );

        });


    /* =====================================================
       SORT
    ===================================================== */

    if (sort === "name") {

        filteredStudents.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    else if (sort === "package") {

        filteredStudents.sort(
            (a, b) =>
                b.package - a.package
        );

    }


    else if (sort === "department") {

        filteredStudents.sort(
            (a, b) =>
                a.department.localeCompare(
                    b.department
                )
        );

    }


    renderStudents(filteredStudents);

}


/* =========================================================
   STUDENT DETAILS MODAL
========================================================= */

function showStudentDetails(index) {

    const student =
        students[index];


    document.getElementById(
        "modalStudentAvatar"
    ).textContent =
        getInitials(student.name);


    document.getElementById(
        "studentDetailsModalLabel"
    ).textContent =
        student.name;


    document.getElementById(
        "modalStudentRoll"
    ).textContent =
        student.roll;


    document.getElementById(
        "modalStudentDepartment"
    ).textContent =
        student.department;


    document.getElementById(
        "modalStudentCompany"
    ).textContent =
        student.company === "-"
            ? "Not Placed"
            : student.company;


    document.getElementById(
        "modalStudentPackage"
    ).textContent =
        student.package > 0
            ? `₹${student.package} LPA`
            : "Not Applicable";


    document.getElementById(
        "modalStudentStatus"
    ).textContent =
        student.status === "placed"
            ? "Placed"
            : "Looking for Opportunity";


    document.getElementById(
        "modalStudentRole"
    ).textContent =
        student.role;


    document.getElementById(
        "modalStudentYear"
    ).textContent =
        student.year;


    const modalElement =
        document.getElementById(
            "studentDetailsModal"
        );


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    modal.show();

}


/* =========================================================
   RESET FILTERS
========================================================= */

function resetStudentFilterOptions() {

    studentSearch.value = "";

    departmentFilter.value = "all";

    statusFilter.value = "all";

    companyFilter.value = "all";

    studentSort.value = "name";

    filterStudents();

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

studentSearch.addEventListener(
    "input",
    filterStudents
);

departmentFilter.addEventListener(
    "change",
    filterStudents
);

statusFilter.addEventListener(
    "change",
    filterStudents
);

companyFilter.addEventListener(
    "change",
    filterStudents
);

studentSort.addEventListener(
    "change",
    filterStudents
);

resetStudentFilters.addEventListener(
    "click",
    resetStudentFilterOptions
);

resetStudentFiltersEmpty.addEventListener(
    "click",
    resetStudentFilterOptions
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderStudents(students);

    }
);