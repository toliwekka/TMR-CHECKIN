let selectedCountry;

document.addEventListener("DOMContentLoaded", () => {
    const addressInput = document.getElementById("002_evaluation_address");
    const suggestionsBox = document.getElementById("002_evaluation_suggestions");

    let selectedCountry = "Uganda"; // Default
    document.getElementById("003_evaluation_country").value = selectedCountry;
    updateDataLawNote(selectedCountry);

    // Close suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (!addressInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = "none";
        }
    });

    // You could add location autocomplete logic here
});

function updateDataLawNote(selectedCountry) {
    const country = selectedCountry?.trim();
    const law = regulationText[country];
    const countryDisplay = document.getElementById("country-name-display");
    const lawDisplay = document.getElementById("regulation-name-display");
    const lawNote = document.getElementById("data-law-note");

    if (law) {
        countryDisplay.textContent = country;
        lawDisplay.textContent = law.name;
        lawNote.innerHTML = `
        <p><strong>${law.name}</strong></p>
        <p>${law.description}</p>
      `;
        lawNote.style.display = "block";
        lawNote.style.opacity = 0;
        setTimeout(() => {
            lawNote.style.opacity = 1;
        }, 50);
    } else {
        countryDisplay.textContent = country || "your country";
        lawDisplay.textContent = "relevant Data Protection Law";
        lawNote.innerHTML = `<p>We are committed to adhering to the applicable data privacy laws in your country. Specific details are currently unavailable.</p>`;
    }
}

const regulationText = {
    Uganda: {
        name: "Data Protection and Privacy Act 2019",
        description: "This Act provides for the protection of personal data and privacy, regulating the collection and processing of personal information and establishing the National Personal Data Protection Office.",
    },
    Zambia: {
        name: "Data Protection Act 2021",
        description: "This Act provides a framework for the protection of personal data, outlining the rights of data subjects and the obligations of data controllers and processors.",
    },
    Zimbabwe: {
        name: "Data Protection Act 2021",
        description: "Enacted in 2021, this Act regulates the processing of personal data, establishes data protection principles, and sets up the Data Protection Authority.",
    },
    EU: {
        name: "General Data Protection Regulation (GDPR), 2018",
        description: "GDPR provides a comprehensive framework for data protection across the European Union, setting standards for the processing of personal data and the protection of individuals' privacy rights.",
    },
    "United States": {
        name: "California Consumer Privacy Act (CCPA), 2018",
        description: "The CCPA gives California residents enhanced privacy rights, including the right to access, delete, and opt-out of the sale of their personal data. Other states have their own privacy laws.",
    },
    "United Kingdom": {
        name: "Data Protection Act 2018",
        description: "Post-Brexit, the UK GDPR and this Act govern data protection, mirroring EU GDPR principles with domestic enforcement by the Information Commissioner's Office (ICO).",
    },
    Ireland: {
        name: "Data Protection Act 2018",
        description: "This Act implements the EU General Data Protection Regulation (GDPR) and provides for the establishment of the Data Protection Commission, outlining data protection principles and individuals' rights.",
    },
};
