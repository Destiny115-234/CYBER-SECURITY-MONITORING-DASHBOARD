// ================================
// MODAL ELEMENTS
// ================================

// Get modal elements (we will add these in HTML later if needed)
const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Alert Details</h2>
        <p id="modal-text">Loading...</p>
    </div>
`;

document.body.appendChild(modal);

// ================================
// SELECT ALL "VIEW DETAILS" BUTTONS
// ================================

const detailButtons = document.querySelectorAll(".details-btn");

// ================================
// OPEN MODAL FUNCTION
// ================================

detailButtons.forEach(button => {
    button.addEventListener("click", function () {

        const card = this.parentElement;
        const title = card.querySelector("h3").innerText;
        const severity = card.querySelector("p").innerText;

        document.getElementById("modal-text").innerText =
            `${title} - ${severity}`;

        modal.style.display = "flex";
    });
});

// ================================
// CLOSE MODAL FUNCTION
// ================================

modal.addEventListener("click", function (e) {

    if (e.target.classList.contains("modal") ||
        e.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }

});
// ================================
// ALERT FILTER SYSTEM
// ================================

const form = document.getElementById("filterForm");
const searchInput = document.getElementById("searchInput");
const severityFilter = document.getElementById("severityFilter");
const cards = document.querySelectorAll(".alert-card");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchValue = searchInput.value.toLowerCase();
    const severityValue = severityFilter.value;

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();
        const severity = card.getAttribute("data-severity");

        const matchesSearch = title.includes(searchValue);
        const matchesSeverity =
            severityValue === "all" || severity === severityValue;

        if (matchesSearch && matchesSeverity) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});