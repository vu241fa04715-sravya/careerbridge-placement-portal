/* =========================================================
   COMPANIES DATA
========================================================= */

const companies = [

    {
        name: "TCS",
        shortName: "TCS",
        industry: "technology",
        industryName: "Technology",
        students: 125,
        package: 12,
        year: 2026,
        location: "Multiple Locations",
        roles: [
            "Software Engineer",
            "System Engineer",
            "Developer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Tata Consultancy Services is a leading global IT services and consulting organization offering opportunities in software development, technology consulting and digital transformation."
    },

    {
        name: "Infosys",
        shortName: "INF",
        industry: "technology",
        industryName: "Technology",
        students: 98,
        package: 10,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Systems Engineer",
            "Technology Analyst",
            "Software Developer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Infosys is a global technology services and consulting company providing opportunities in software engineering, cloud, data and digital technologies."
    },

    {
        name: "Wipro",
        shortName: "WIP",
        industry: "technology",
        industryName: "Technology",
        students: 61,
        package: 9,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Project Engineer",
            "Software Engineer",
            "Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Wipro provides technology services and consulting solutions across multiple industries and offers campus opportunities for engineering graduates."
    },

    {
        name: "Accenture",
        shortName: "ACC",
        industry: "consulting",
        industryName: "Consulting",
        students: 105,
        package: 14,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Associate Software Engineer",
            "Application Developer",
            "Business Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE",
            "MECH"
        ],
        description:
            "Accenture is a global professional services company combining technology, consulting and digital capabilities to help organizations transform their businesses."
    },

    {
        name: "Deloitte",
        shortName: "D",
        industry: "consulting",
        industryName: "Consulting",
        students: 72,
        package: 16,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Analyst",
            "Technology Consultant",
            "Business Technology Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Deloitte provides consulting, technology, audit and professional services with career opportunities across business and technology functions."
    },

    {
        name: "Cognizant",
        shortName: "COG",
        industry: "technology",
        industryName: "Technology",
        students: 82,
        package: 11,
        year: 2026,
        location: "Chennai",
        roles: [
            "Programmer Analyst",
            "Software Engineer",
            "Junior Developer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Cognizant is a technology and professional services organization offering opportunities in software engineering, cloud, data and digital transformation."
    },

    {
        name: "Capgemini",
        shortName: "CAP",
        industry: "consulting",
        industryName: "Consulting",
        students: 58,
        package: 10,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Analyst",
            "Software Engineer",
            "Associate Consultant"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "Capgemini provides consulting, technology services and digital transformation solutions to organizations around the world."
    },

    {
        name: "IBM",
        shortName: "IBM",
        industry: "technology",
        industryName: "Technology",
        students: 65,
        package: 15,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Software Developer",
            "Associate Technical Engineer",
            "Data Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "IBM is a technology company working across cloud computing, artificial intelligence, software and enterprise technology."
    },

    {
        name: "Microsoft",
        shortName: "MS",
        industry: "technology",
        industryName: "Technology",
        students: 24,
        package: 24,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Software Engineer",
            "Cloud Engineer",
            "Product Engineer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "Microsoft develops software, cloud platforms and technology products, offering highly competitive engineering opportunities."
    },

    {
        name: "Amazon",
        shortName: "AMZ",
        industry: "ecommerce",
        industryName: "E-Commerce",
        students: 42,
        package: 18,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Software Development Engineer",
            "Cloud Support Associate",
            "Operations Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "Amazon operates technology, e-commerce and cloud businesses and provides opportunities in software development and technology operations."
    },

    {
        name: "Google",
        shortName: "G",
        industry: "technology",
        industryName: "Technology",
        students: 12,
        package: 22,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Software Engineer",
            "Product Engineer",
            "Data Engineer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "Google develops widely used technology products and services and provides opportunities in software engineering, data and cloud technologies."
    },

    {
        name: "EY",
        shortName: "EY",
        industry: "consulting",
        industryName: "Consulting",
        students: 48,
        package: 9,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Technology Analyst",
            "Consultant",
            "Business Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "EY provides assurance, consulting, strategy and technology services with career opportunities across business and technology functions."
    },

    {
        name: "KPMG",
        shortName: "KPMG",
        industry: "consulting",
        industryName: "Consulting",
        students: 38,
        package: 8.5,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Analyst",
            "Technology Consultant",
            "Associate Consultant"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "KPMG provides audit, tax and advisory services with opportunities in technology consulting, analytics and business services."
    },

    {
        name: "PwC",
        shortName: "PwC",
        industry: "consulting",
        industryName: "Consulting",
        students: 35,
        package: 9.5,
        year: 2026,
        location: "Hyderabad",
        roles: [
            "Associate",
            "Technology Consultant",
            "Data Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "PwC provides professional services across consulting, assurance and tax, with growing opportunities in technology and analytics."
    },

    {
        name: "HCLTech",
        shortName: "HCL",
        industry: "technology",
        industryName: "Technology",
        students: 56,
        package: 10,
        year: 2026,
        location: "Noida",
        roles: [
            "Graduate Engineer Trainee",
            "Software Engineer",
            "Technical Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "HCLTech provides technology and engineering services across cloud, software, digital transformation and infrastructure."
    },

    {
        name: "Tech Mahindra",
        shortName: "TM",
        industry: "technology",
        industryName: "Technology",
        students: 45,
        package: 8,
        year: 2026,
        location: "Pune",
        roles: [
            "Associate Software Engineer",
            "Software Engineer",
            "Technical Support Engineer"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE",
            "EEE"
        ],
        description:
            "Tech Mahindra provides digital transformation and technology solutions across telecommunications and enterprise industries."
    },

    {
        name: "JPMorgan Chase",
        shortName: "JPM",
        industry: "finance",
        industryName: "Finance",
        students: 18,
        package: 17,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Software Engineer",
            "Technology Analyst",
            "Operations Analyst"
        ],
        branches: [
            "CSE",
            "IT",
            "ECE"
        ],
        description:
            "JPMorgan Chase provides financial services globally and recruits technology graduates for software engineering and technology roles."
    },

    {
        name: "Daimler Truck",
        shortName: "DT",
        industry: "engineering",
        industryName: "Engineering",
        students: 15,
        package: 12,
        year: 2026,
        location: "Bengaluru",
        roles: [
            "Graduate Engineer",
            "Software Engineer",
            "Engineering Analyst"
        ],
        branches: [
            "CSE",
            "ECE",
            "MECH",
            "EEE"
        ],
        description:
            "Daimler Truck operates in the commercial vehicle industry and offers engineering and technology opportunities for graduates."
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const companiesContainer =
    document.getElementById("companiesContainer");

const companySearch =
    document.getElementById("companySearch");

const industryFilter =
    document.getElementById("industryFilter");

const sortCompanies =
    document.getElementById("sortCompanies");

const resetFilters =
    document.getElementById("resetFilters");

const resetFiltersEmpty =
    document.getElementById("resetFiltersEmpty");

const noCompanies =
    document.getElementById("noCompanies");

const companyResultCount =
    document.getElementById("companyResultCount");


/* =========================================================
   RENDER COMPANIES
========================================================= */

function renderCompanies(companyList) {

    companiesContainer.innerHTML = "";

    if (companyList.length === 0) {

        noCompanies.classList.remove("d-none");

        companyResultCount.textContent =
            "No companies match your search.";

        return;
    }

    noCompanies.classList.add("d-none");


    companyList.forEach((company, index) => {

        const card = document.createElement("div");

        card.className =
            "col-lg-4 col-md-6 company-item";


        card.innerHTML = `

            <div class="company-card">

                <div class="company-card-top">

                    <div class="company-logo">
                        ${company.shortName}
                    </div>

                    <span class="company-industry-badge">
                        ${company.industryName}
                    </span>

                </div>


                <div class="company-card-body">

                    <h4>
                        ${company.name}
                    </h4>

                    <p class="company-description">
                        ${company.description}
                    </p>


                    <div class="company-metrics">

                        <div class="company-metric">

                            <i class="fa-solid fa-users"></i>

                            <div>
                                <strong>
                                    ${company.students}
                                </strong>

                                <span>
                                    Students
                                </span>
                            </div>

                        </div>


                        <div class="company-metric">

                            <i class="fa-solid fa-indian-rupee-sign"></i>

                            <div>
                                <strong>
                                    ₹${company.package}
                                </strong>

                                <span>
                                    Highest Package
                                </span>
                            </div>

                        </div>

                    </div>


                    <div class="company-roles">

                        <span class="roles-label">
                            Popular Roles
                        </span>

                        <div class="role-tags">

                            ${company.roles.slice(0, 2).map(role => `
                                <span class="role-tag">
                                    ${role}
                                </span>
                            `).join("")}

                            ${
                                company.roles.length > 2
                                ? `
                                    <span class="role-tag">
                                        +${company.roles.length - 2}
                                    </span>
                                  `
                                : ""
                            }

                        </div>

                    </div>


                    <button
                        class="btn btn-outline-primary company-details-btn"
                        onclick="showCompanyDetails(${index})">

                        View Details

                        <i class="fa-solid fa-arrow-right ms-1"></i>

                    </button>

                </div>

            </div>

        `;


        companiesContainer.appendChild(card);

    });


    companyResultCount.textContent =
        `Showing ${companyList.length} of ${companies.length} companies`;

}


/* =========================================================
   FILTER + SORT
========================================================= */

function filterAndSortCompanies() {

    const searchTerm =
        companySearch.value
            .toLowerCase()
            .trim();

    const industry =
        industryFilter.value;

    const sortBy =
        sortCompanies.value;


    let filteredCompanies =
        companies.filter(company => {

            const matchesSearch =
                company.name
                    .toLowerCase()
                    .includes(searchTerm) ||
                company.industryName
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesIndustry =
                industry === "all" ||
                company.industry === industry;


            return matchesSearch && matchesIndustry;

        });


    /* Sort */

    if (sortBy === "name") {

        filteredCompanies.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }

    else if (sortBy === "students") {

        filteredCompanies.sort(
            (a, b) => b.students - a.students
        );

    }

    else if (sortBy === "package") {

        filteredCompanies.sort(
            (a, b) => b.package - a.package
        );

    }


    renderCompanies(filteredCompanies);

}


/* =========================================================
   COMPANY DETAILS MODAL
========================================================= */

function showCompanyDetails(index) {

    const company =
        companies[index];


    document.getElementById(
        "modalCompanyLogo"
    ).textContent = company.shortName;


    document.getElementById(
        "companyDetailsModalLabel"
    ).textContent = company.name;


    document.getElementById(
        "modalCompanyIndustry"
    ).textContent = company.industryName;


    document.getElementById(
        "modalStudents"
    ).textContent = company.students;


    document.getElementById(
        "modalPackage"
    ).textContent = `₹${company.package} LPA`;


    document.getElementById(
        "modalYear"
    ).textContent = company.year;


    document.getElementById(
        "modalLocation"
    ).textContent = company.location;


    document.getElementById(
        "modalDescription"
    ).textContent = company.description;


    /* Roles */

    const rolesContainer =
        document.getElementById("modalRoles");

    rolesContainer.innerHTML =
        company.roles.map(role => `
            <span class="modal-tag">
                ${role}
            </span>
        `).join("");


    /* Branches */

    const branchesContainer =
        document.getElementById("modalBranches");

    branchesContainer.innerHTML =
        company.branches.map(branch => `
            <span class="modal-tag">
                ${branch}
            </span>
        `).join("");


    /* Open Bootstrap Modal */

    const modalElement =
        document.getElementById(
            "companyDetailsModal"
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

function resetCompanyFilters() {

    companySearch.value = "";

    industryFilter.value = "all";

    sortCompanies.value = "name";

    filterAndSortCompanies();

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

companySearch.addEventListener(
    "input",
    filterAndSortCompanies
);

industryFilter.addEventListener(
    "change",
    filterAndSortCompanies
);

sortCompanies.addEventListener(
    "change",
    filterAndSortCompanies
);

resetFilters.addEventListener(
    "click",
    resetCompanyFilters
);

resetFiltersEmpty.addEventListener(
    "click",
    resetCompanyFilters
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCompanies(companies);

    }
);