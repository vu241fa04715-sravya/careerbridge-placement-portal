/* =========================================================
   PLACEMENT DRIVE DATA
========================================================= */

const drives = [

    {
        company: "Microsoft",
        shortName: "MS",
        role: "Software Engineer",
        date: "2026-09-15",
        deadline: "2026-09-12",
        package: 24,
        openings: 15,
        location: "College Campus",
        status: "open",
        departments: ["CSE", "IT", "ECE"],
        eligibility: "Minimum 75% throughout academics with no active backlogs.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Amazon",
        shortName: "AMZ",
        role: "Software Development Engineer",
        date: "2026-09-18",
        deadline: "2026-09-15",
        package: 18,
        openings: 25,
        location: "College Campus",
        status: "open",
        departments: ["CSE", "IT", "ECE"],
        eligibility: "Minimum 70% in academics and strong programming fundamentals.",
        process: [
            "Online Test",
            "Coding Round",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Deloitte",
        shortName: "D",
        role: "Technology Analyst",
        date: "2026-09-22",
        deadline: "2026-09-19",
        package: 16,
        openings: 35,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics with no active backlogs.",
        process: [
            "Aptitude Test",
            "Technical Round",
            "HR Interview"
        ]
    },

    {
        company: "IBM",
        shortName: "IBM",
        role: "Software Developer",
        date: "2026-09-25",
        deadline: "2026-09-22",
        package: 15,
        openings: 30,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE"],
        eligibility: "Minimum 65% throughout academics.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Accenture",
        shortName: "ACC",
        role: "Associate Software Engineer",
        date: "2026-09-28",
        deadline: "2026-09-25",
        package: 14,
        openings: 50,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE", "MECH"],
        eligibility: "Minimum 60% throughout academics with no active backlogs.",
        process: [
            "Cognitive Assessment",
            "Technical Assessment",
            "Interview"
        ]
    },

    {
        company: "TCS",
        shortName: "TCS",
        role: "System Engineer",
        date: "2026-10-02",
        deadline: "2026-09-28",
        package: 12,
        openings: 60,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE", "MECH"],
        eligibility: "Minimum 60% in 10th, 12th and graduation.",
        process: [
            "TCS Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Cognizant",
        shortName: "COG",
        role: "Programmer Analyst",
        date: "2026-10-05",
        deadline: "2026-10-01",
        package: 11,
        openings: 40,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Infosys",
        shortName: "INF",
        role: "Systems Engineer",
        date: "2026-10-08",
        deadline: "2026-10-04",
        package: 10,
        openings: 55,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics with no active backlogs.",
        process: [
            "Online Test",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Wipro",
        shortName: "WIP",
        role: "Project Engineer",
        date: "2026-10-11",
        deadline: "2026-10-07",
        package: 9,
        openings: 45,
        location: "College Campus",
        status: "upcoming",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Aptitude Test",
            "Technical Round",
            "HR Round"
        ]
    },

    {
        company: "EY",
        shortName: "EY",
        role: "Technology Analyst",
        date: "2026-08-20",
        deadline: "2026-08-16",
        package: 9,
        openings: 20,
        location: "College Campus",
        status: "completed",
        departments: ["CSE", "IT", "ECE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Capgemini",
        shortName: "CAP",
        role: "Software Engineer",
        date: "2026-08-24",
        deadline: "2026-08-20",
        package: 10,
        openings: 35,
        location: "College Campus",
        status: "completed",
        departments: ["CSE", "IT", "ECE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "HCLTech",
        shortName: "HCL",
        role: "Graduate Engineer Trainee",
        date: "2026-08-28",
        deadline: "2026-08-24",
        package: 10,
        openings: 40,
        location: "College Campus",
        status: "completed",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Technical Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    },

    {
        company: "Tech Mahindra",
        shortName: "TM",
        role: "Associate Software Engineer",
        date: "2026-08-12",
        deadline: "2026-08-08",
        package: 8,
        openings: 30,
        location: "College Campus",
        status: "closed",
        departments: ["CSE", "IT", "ECE", "EEE"],
        eligibility: "Minimum 60% throughout academics.",
        process: [
            "Online Assessment",
            "Technical Interview",
            "HR Interview"
        ]
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const drivesContainer =
    document.getElementById("drivesContainer");

const driveSearch =
    document.getElementById("driveSearch");

const driveStatus =
    document.getElementById("driveStatus");

const driveDepartment =
    document.getElementById("driveDepartment");

const driveSort =
    document.getElementById("driveSort");

const resetDriveFilters =
    document.getElementById("resetDriveFilters");

const resetDriveFiltersEmpty =
    document.getElementById("resetDriveFiltersEmpty");

const noDrives =
    document.getElementById("noDrives");

const driveResultCount =
    document.getElementById("driveResultCount");

const modalRegisterBtn =
    document.getElementById("modalRegisterBtn");

let selectedDrive = null;


/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDriveDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   STATUS LABEL
========================================================= */

function getStatusLabel(status) {

    const labels = {
        open: "Open",
        upcoming: "Upcoming",
        closed: "Closed",
        completed: "Completed"
    };

    return labels[status] || status;

}


/* =========================================================
   STATUS CLASS
========================================================= */

function getStatusClass(status) {

    return `drive-status ${status}`;

}


/* =========================================================
   RENDER DRIVES
========================================================= */

function renderDrives(driveList) {

    drivesContainer.innerHTML = "";


    if (driveList.length === 0) {

        noDrives.classList.remove("d-none");

        driveResultCount.textContent =
            "No placement drives match your filters.";

        return;

    }


    noDrives.classList.add("d-none");


    driveList.forEach(drive => {

        const originalIndex =
            drives.indexOf(drive);


        const card =
            document.createElement("div");


        card.className =
            "col-lg-4 col-md-6";


        card.innerHTML = `

            <div class="drive-card">

                <div class="drive-card-header">

                    <div class="drive-company-logo">
                        ${drive.shortName}
                    </div>

                    <span class="${getStatusClass(drive.status)}">
                        ${getStatusLabel(drive.status)}
                    </span>

                </div>


                <div class="drive-card-body">

                    <h4>
                        ${drive.company}
                    </h4>

                    <p class="drive-role">
                        <i class="fa-solid fa-briefcase"></i>
                        ${drive.role}
                    </p>


                    <div class="drive-info-list">

                        <div>

                            <i class="fa-solid fa-calendar"></i>

                            <span>
                                ${formatDriveDate(drive.date)}
                            </span>

                        </div>


                        <div>

                            <i class="fa-solid fa-indian-rupee-sign"></i>

                            <span>
                                ₹${drive.package} LPA
                            </span>

                        </div>


                        <div>

                            <i class="fa-solid fa-users"></i>

                            <span>
                                ${drive.openings} Openings
                            </span>

                        </div>


                        <div>

                            <i class="fa-solid fa-location-dot"></i>

                            <span>
                                ${drive.location}
                            </span>

                        </div>

                    </div>


                    <div class="drive-departments">

                        ${drive.departments.map(dept => `
                            <span>
                                ${dept}
                            </span>
                        `).join("")}

                    </div>


                    <div class="drive-deadline">

                        <span>
                            <i class="fa-solid fa-clock"></i>
                            Registration Deadline
                        </span>

                        <strong>
                            ${formatDriveDate(drive.deadline)}
                        </strong>

                    </div>


                    <button
                        class="btn btn-outline-primary drive-details-btn"
                        onclick="showDriveDetails(${originalIndex})">

                        View Drive Details

                        <i class="fa-solid fa-arrow-right ms-1"></i>

                    </button>

                </div>

            </div>

        `;


        drivesContainer.appendChild(card);

    });


    driveResultCount.textContent =
        `Showing ${driveList.length} of ${drives.length} drives`;

}


/* =========================================================
   FILTER + SORT
========================================================= */

function filterAndSortDrives() {

    const searchTerm =
        driveSearch.value
            .toLowerCase()
            .trim();


    const status =
        driveStatus.value;


    const department =
        driveDepartment.value;


    const sort =
        driveSort.value;


    let filteredDrives =
        drives.filter(drive => {


            const matchesSearch =

                drive.company
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                drive.role
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesStatus =
                status === "all" ||
                drive.status === status;


            const matchesDepartment =
                department === "all" ||
                drive.departments.includes(department);


            return (
                matchesSearch &&
                matchesStatus &&
                matchesDepartment
            );

        });


    /* =====================================================
       SORTING
    ===================================================== */

    if (sort === "date") {

        filteredDrives.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    else if (sort === "package") {

        filteredDrives.sort(
            (a, b) =>
                b.package - a.package
        );

    }


    else if (sort === "openings") {

        filteredDrives.sort(
            (a, b) =>
                b.openings - a.openings
        );

    }


    else if (sort === "company") {

        filteredDrives.sort(
            (a, b) =>
                a.company.localeCompare(
                    b.company
                )
        );

    }


    renderDrives(filteredDrives);

}


/* =========================================================
   SHOW DRIVE DETAILS
========================================================= */

function showDriveDetails(index) {

    const drive =
        drives[index];


    selectedDrive =
        drive;


    document.getElementById(
        "modalDriveLogo"
    ).textContent =
        drive.shortName;


    document.getElementById(
        "driveDetailsModalLabel"
    ).textContent =
        drive.company;


    document.getElementById(
        "modalDriveRole"
    ).textContent =
        drive.role;


    document.getElementById(
        "modalDriveDate"
    ).textContent =
        formatDriveDate(drive.date);


    document.getElementById(
        "modalDriveDeadline"
    ).textContent =
        formatDriveDate(drive.deadline);


    document.getElementById(
        "modalDrivePackage"
    ).textContent =
        `₹${drive.package} LPA`;


    document.getElementById(
        "modalDriveOpenings"
    ).textContent =
        drive.openings;


    document.getElementById(
        "modalDriveLocation"
    ).textContent =
        drive.location;


    document.getElementById(
        "modalDriveStatus"
    ).textContent =
        getStatusLabel(drive.status);


    document.getElementById(
        "modalDriveEligibility"
    ).textContent =
        drive.eligibility;


    /* Departments */

    document.getElementById(
        "modalDriveDepartments"
    ).innerHTML =

        drive.departments.map(dept => `
            <span class="drive-modal-tag">
                ${dept}
            </span>
        `).join("");


    /* Selection process */

    document.getElementById(
        "modalDriveProcess"
    ).innerHTML =

        drive.process.map((step, index) => `
            <span class="drive-process-tag">
                ${index + 1}. ${step}
            </span>
        `).join("");


    /* Register button */

    if (
        drive.status === "open" ||
        drive.status === "upcoming"
    ) {

        modalRegisterBtn.disabled = false;

        modalRegisterBtn.innerHTML = `
            <i class="fa-solid fa-paper-plane me-1"></i>
            Register Interest
        `;

    }

    else {

        modalRegisterBtn.disabled = true;

        modalRegisterBtn.innerHTML = `
            <i class="fa-solid fa-lock me-1"></i>
            Registration Closed
        `;

    }


    const modalElement =
        document.getElementById(
            "driveDetailsModal"
        );


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    modal.show();

}


/* =========================================================
   REGISTER INTEREST
========================================================= */

modalRegisterBtn.addEventListener(
    "click",
    () => {

        if (!selectedDrive) {
            return;
        }


        const driveModalElement =
            document.getElementById(
                "driveDetailsModal"
            );


        const driveModal =
            bootstrap.Modal.getOrCreateInstance(
                driveModalElement
            );


        driveModal.hide();


        document.getElementById(
            "registrationMessage"
        ).textContent =

            `Your interest has been recorded for the ${selectedDrive.company} ${selectedDrive.role} placement drive.`;


        setTimeout(() => {

            const registrationElement =
                document.getElementById(
                    "registrationModal"
                );


            const registrationModal =
                bootstrap.Modal.getOrCreateInstance(
                    registrationElement
                );


            registrationModal.show();

        }, 300);

    }
);


/* =========================================================
   RESET FILTERS
========================================================= */

function resetDriveFilterOptions() {

    driveSearch.value = "";

    driveStatus.value = "all";

    driveDepartment.value = "all";

    driveSort.value = "date";

    filterAndSortDrives();

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

driveSearch.addEventListener(
    "input",
    filterAndSortDrives
);

driveStatus.addEventListener(
    "change",
    filterAndSortDrives
);

driveDepartment.addEventListener(
    "change",
    filterAndSortDrives
);

driveSort.addEventListener(
    "change",
    filterAndSortDrives
);

resetDriveFilters.addEventListener(
    "click",
    resetDriveFilterOptions
);

resetDriveFiltersEmpty.addEventListener(
    "click",
    resetDriveFilterOptions
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        filterAndSortDrives();

    }
);