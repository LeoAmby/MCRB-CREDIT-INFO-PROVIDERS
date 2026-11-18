
/* =========================================
   1. INSTITUTION DATA

   Replace sample records with actual
   Metropol institution records.
========================================= */

const categories = [

    {
        id: "commercial-banks",
        name: "Commercial Banks",
        description: "FINANCIAL INSTITUTIONS",
        icon: "bi-bank",
        institutions: [
            "ABC Bank",
            "Access Bank",
            "Bank of Africa",
            "Bank of Baroda",
            "Bank of India",
            "Citibank",
            "Co-operative Bank",
            "Credit Bank",
            "Development Bank",
            "Diamond Trust Bank",
            "Ecobank",
            "Equity Bank",
            "Family Bank",
            "First Community Bank",
            "Guaranty Trust Bank",
            "Gulf African Bank",
            "I&M Bank",
            "Kingdom Bank",
            "Mayfair Bank",
            "M-Oriental Bank",
            "National Bank",
            "NCBA Bank",
            "Prime Bank",
            "Sidian Bank",
            "Standard Chartered Bank",
            "Stanbic Bank",
            "UBA Kenya Bank"
        ]
    },

    {
        id: "microfinance-banks",
        name: "Microfinance Banks",
        description: "MICROFINANCE INSTITUTIONS",
        icon: "bi-cash-stack",
        institutions: [
            "Example Microfinance Institution One",
            "Example Microfinance Institution Two",
            "Example Microfinance Institution Three"
        ]
    },

    {
        id: "saccos",
        name: "SACCOs",
        description: "SAVINGS & CREDIT CO-OPERATIVES",
        icon: "bi-people",
        institutions: [
            "Example SACCO One",
            "Example SACCO Two",
            "Example SACCO Three",
            "Example SACCO Four"
        ]
    },

    {
        id: "digital-credit",
        name: "Digital Credit Providers",
        description: "DIGITAL FINANCIAL SERVICES",
        icon: "bi-phone",
        institutions: [
            "Example Digital Provider One",
            "Example Digital Provider Two",
            "Example Digital Provider Three"
        ]
    },

    {
        id: "insurance",
        name: "Insurance Companies",
        description: "INSURANCE INSTITUTIONS",
        icon: "bi-shield-check",
        institutions: [
            "Example Insurance Company One",
            "Example Insurance Company Two",
            "Example Insurance Company Three"
        ]
    },

    {
        id: "other-providers",
        name: "Other Credit Providers",
        description: "OTHER CREDIT INSTITUTIONS",
        icon: "bi-diagram-3",
        institutions: [
            "Example Credit Provider One",
            "Example Credit Provider Two"
        ]
    },

    {
        id: "hire-purchase",
        name: "Hire Purchase Companies",
        description: "ASSET FINANCING",
        icon: "bi-car-front",
        institutions: [
            "Example Hire Purchase Company One",
            "Example Hire Purchase Company Two"
        ]
    },

    {
        id: "utilities",
        name: "Utility Companies",
        description: "UTILITY SERVICE PROVIDERS",
        icon: "bi-lightning-charge",
        institutions: [
            "Example Utility Company One",
            "Example Utility Company Two"
        ]
    }

];


/* =========================================
   2. GLOBAL VARIABLES
========================================= */

const categoryLanding =
    document.getElementById("categoryLanding");

const categoryDetails =
    document.getElementById("categoryDetails");

const categoryGrid =
    document.getElementById("categoryGrid");

const institutionList =
    document.getElementById("institutionList");

const institutionSearch =
    document.getElementById("institutionSearch");

const pageSize = 12;

let selectedCategory = null;

let currentPage = 1;

let filteredInstitutions = [];


/* =========================================
   3. GENERATE CATEGORY CARDS
========================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "category-card";

        card.setAttribute(
            "aria-label",
            `View ${category.name}`
        );

        card.innerHTML = `

            <div class="category-icon">
                <i class="bi ${category.icon}"></i>
            </div>

            <div class="category-info">

                <h3>${category.name}</h3>

                <small>${category.description}</small>

                <div class="category-bottom">

                    <span>Explore category</span>

                    <i class="bi bi-arrow-right"></i>

                </div>

            </div>

        `;

        card.addEventListener("click", () => {

            openCategory(category.id);

        });

        categoryGrid.appendChild(card);

    });

}


/* =========================================
   4. OPEN SELECTED CATEGORY
========================================= */

function openCategory(categoryId) {

    selectedCategory = categories.find(
        category => category.id === categoryId
    );

    if (!selectedCategory) return;

    // Hide category landing view
    categoryLanding.style.display = "none";

    // Show category details
    categoryDetails.style.display = "block";

    // Update category information
    document.getElementById("detailTitle").textContent =
        selectedCategory.name;

    document.getElementById("detailDescription").textContent =
        selectedCategory.description;

    document.getElementById("detailIcon").innerHTML = `
        <i class="bi ${selectedCategory.icon}"></i>
    `;

    // Update institution count
    document.getElementById("institutionCount").textContent =
        selectedCategory.institutions.length;

    // Reset search and pagination
    institutionSearch.value = "";

    currentPage = 1;

    filteredInstitutions = [
        ...selectedCategory.institutions
    ];

    renderInstitutions();

    // Scroll to directory
    window.scrollTo({
        top: document.querySelector(
            ".directory-section"
        ).offsetTop,
        behavior: "smooth"
    });

}


/* =========================================
   5. DISPLAY INSTITUTIONS
========================================= */

function renderInstitutions() {

    institutionList.innerHTML = "";

    const total = filteredInstitutions.length;

    const totalPages = Math.ceil(total / pageSize);

    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * pageSize;

    const endIndex = Math.min(
        startIndex + pageSize,
        total
    );

    const currentInstitutions =
        filteredInstitutions.slice(startIndex, endIndex);


    // Create institution rows
    currentInstitutions.forEach((institution, index) => {

        const item = document.createElement("li");

        const number = document.createElement("span");

        number.className = "institution-number";

        number.textContent = String(
            startIndex + index + 1
        ).padStart(2, "0");

        const name = document.createElement("span");

        name.className = "institution-name";

        name.textContent = institution;

        const arrow = document.createElement("i");

        arrow.className = "bi bi-arrow-up-right";

        item.appendChild(number);

        item.appendChild(name);

        item.appendChild(arrow);

        institutionList.appendChild(item);

    });


    // Handle empty search results
    const emptyState =
        document.getElementById("emptyState");

    const paginationArea =
        document.getElementById("paginationArea");

    if (total === 0) {

        emptyState.style.display = "block";

        paginationArea.style.display = "none";

    } else {

        emptyState.style.display = "none";

        paginationArea.style.display = "flex";

    }


    // Update result information
    document.getElementById("resultCount").textContent =
        `Showing ${total} institutions`;

    document.getElementById("paginationInfo").textContent =
        `Showing ${total === 0 ? 0 : startIndex + 1} - ${endIndex} of ${total}`;


    renderPagination(totalPages);

}


/* =========================================
   6. SEARCH INSTITUTIONS
========================================= */

institutionSearch.addEventListener("input", function() {

    const searchTerm = this.value
        .trim()
        .toLowerCase();

    filteredInstitutions =
        selectedCategory.institutions.filter(institution =>

            institution.toLowerCase().includes(searchTerm)

        );

    currentPage = 1;

    renderInstitutions();

});


/* =========================================
   7. PAGINATION
========================================= */

function renderPagination(totalPages) {

    const controls =
        document.getElementById("paginationControls");

    controls.innerHTML = "";

    if (totalPages <= 1) return;


    // Previous button
    const previous = document.createElement("button");

    previous.type = "button";

    previous.className = "page-btn";

    previous.innerHTML = '<i class="bi bi-chevron-left"></i>';

    previous.disabled = currentPage === 1;

    previous.setAttribute("aria-label", "Previous page");

    previous.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            renderInstitutions();

        }

    });

    controls.appendChild(previous);


    // Page number buttons
    let startPage = Math.max(1, currentPage - 2);

    let endPage = Math.min(
        totalPages,
        currentPage + 2
    );

    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
    }

    if (currentPage > totalPages - 3) {
        startPage = Math.max(1, totalPages - 4);
    }

    for (let page = startPage; page <= endPage; page++) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "page-btn";

        if (page === currentPage) {

            button.classList.add("active");

            button.setAttribute("aria-current", "page");

        }

        button.textContent = page;

        button.addEventListener("click", () => {

            currentPage = page;

            renderInstitutions();

        });

        controls.appendChild(button);

    }


    // Next button
    const next = document.createElement("button");

    next.type = "button";

    next.className = "page-btn";

    next.innerHTML = '<i class="bi bi-chevron-right"></i>';

    next.disabled = currentPage === totalPages;

    next.setAttribute("aria-label", "Next page");

    next.addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderInstitutions();

        }

    });

    controls.appendChild(next);

}


/* =========================================
   8. BACK TO CATEGORIES
========================================= */

document.getElementById("backButton")
    .addEventListener("click", function() {

        // Hide category details
        categoryDetails.style.display = "none";

        // Show category landing
        categoryLanding.style.display = "block";

        // Clear selection
        selectedCategory = null;

        institutionSearch.value = "";

        // Return to categories
        window.scrollTo({
            top: document.querySelector(
                ".directory-section"
            ).offsetTop,
            behavior: "smooth"
        });

    });


/* =========================================
   9. AUTOMATIC FOOTER YEAR
========================================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================================
   10. INITIALISE PAGE
========================================= */

renderCategories();
