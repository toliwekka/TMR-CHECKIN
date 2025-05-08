document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("form_005_first-name") || "Your";
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toUpperCase();
    document.getElementById("userName").textContent = `${capitalized},`;
});

// Global variables
let AScore = 0;
let BScore = 0;
let percA = 0;
let percB = 0;

const maxA = 70;
const maxB = 240;

const heroMessages = [
    "🧠 Your emotional gauge reveals how you've been feeling deep down—emotionally, socially, and cognitively.",
    "💡 A higher score in Part A often reflects inner resilience, calm, and mental clarity.",
    "🎯 Your functional score captures how you’re managing daily life, routines, responsibilities, and support systems.",
    "⚖️ Balance across emotional and functional areas is key to overall well-being.",
    "📈 Bar charts offer a clear comparison between emotional and functional states—side by side.",
    "🍩 Donut visuals provide a quick glance at where you stand and where you can grow.",
    "📊 Each chart is a mirror—reflecting not just scores, but trends and possibilities.",
    "🧭 Think of these results as a compass, not a destination. They're here to guide you, not define you.",
    "🌱 Scores shift as life shifts. These insights are a moment-in-time snapshot to help you realign.",
    "🛠️ Use the feedback to build better habits, deeper connections, and healthier boundaries.",
    "📌 Remember: no score can capture your full complexity—it simply opens the door to deeper reflection.",
    "🫂 You are not your numbers. You're a story in motion—this is just one meaningful chapter.",
    "🌈 Wellness is a spectrum. Wherever you land, there’s a path forward.",
    "🔥 High scores show you're thriving. Lower scores signal where you may need support or change.",
    "💬 Each insight is an invitation to check in with yourself and your environment.",
];

// Rotate messages
let heroIndex = 0;
setInterval(() => {
    const heroEl = document.getElementById("heroText");
    if (heroEl) {
        heroIndex = (heroIndex + 1) % heroMessages.length;
        heroEl.textContent = heroMessages[heroIndex];
    }
}, 5000);

// On page load

window.onload = function () {
    getStoredData(); // Call the function to fetch the data
};

window.addEventListener("DOMContentLoaded", () => {
    // Initial fetch of the scores from localStorage
    AScore = parseInt(localStorage.getItem("form_042_PartA_Score")) || 0;
    BScore = parseInt(localStorage.getItem("form_044_PartB_Score")) || 0;

    // If the values are already set, proceed with the calculations
    if (AScore !== 0 && BScore !== 0) {
        percA = parseFloat(((AScore / maxA) * 100).toFixed(2));
        percB = parseFloat(((BScore / maxB) * 100).toFixed(2));

        updateScores(AScore, BScore);
        updateTextContent(AScore, BScore, percA, percB);
        plotGauges(percA, percB);
        renderAllCharts(percA, percB);
    } else {
        getStoredData(); // If the values aren't set, fetch again
    }
});

// Function to fetch data from localStorage and retry if it's not yet available
function getStoredData() {
    const tempAScore = localStorage.getItem("form_062_PartA_Score");
    const tempBScore = localStorage.getItem("form_064_PartB_Score");

    // If the scores are not yet available, retry after 100ms
    if (tempAScore === null || tempBScore === null) {
        setTimeout(getStoredData, 400); // Retry every 100ms until values are found
    } else {
        // Once the data is available, update the scores
        AScore = parseInt(tempAScore);
        BScore = parseInt(tempBScore);

        // Recalculate percentages after data is available
        percA = parseFloat(((AScore / maxA) * 100).toFixed(2));
        percB = parseFloat(((BScore / maxB) * 100).toFixed(2));

        updateScores(AScore, BScore);
        updateTextContent(AScore, BScore, percA, percB);
        plotGauges(percA, percB);
        renderAllCharts(percA, percB);
    }
}

function updateScores(AScore, BScore) {
    const scoreAElement = document.getElementById("scoreA");
    const scoreBElement = document.getElementById("scoreB");
    const totalScoreElement = document.getElementById("totalScore");

    if (scoreAElement) scoreAElement.textContent = `AScore: ${AScore}`;
    if (scoreBElement) scoreBElement.textContent = `BScore: ${BScore}`;
    if (totalScoreElement) totalScoreElement.textContent = `Total Score: ${AScore + BScore}`;
}

function updateTextContent(rawA, rawB, percA, percB) {
    document.getElementById("partA-raw").textContent = rawA;
    document.getElementById("partA-percent").textContent = `${percA}%`;
    document.getElementById("partA-status").textContent = getPartAStatus(percA);
    document.getElementById("partA-comment").textContent = getPartAComment(percA);

    document.getElementById("partB-raw").textContent = rawB;
    document.getElementById("partB-percent").textContent = `${percB}%`;
    document.getElementById("partB-status").textContent = getPartBStatus(percB);
    document.getElementById("partB-comment").textContent = getPartBComment(percB);
}

function getPartAStatus(score) {
    if (score < 57) return "Below Optimal (Severe concern)";
    if (score < 63) return "Watchful (Borderline)";
    if (score < 86) return "Generally Stable (Mild issues)";
    return "Thriving (Excellent)";
}

function getPartAComment(percentage) {
    const messages = [
        {
            range: [0, 57],
            list: [
                "It looks like you’ve had a tough time recently. You’re not alone — let's take the first step toward getting the support you deserve.",
                "Your emotional well-being matters. Let’s explore ways to strengthen your resilience and find moments of peace.",
                "This score suggests a heavy emotional load. It’s okay to seek help, and small steps can lead to powerful healing.",
                "You’re doing the best you can, and that’s enough for now. Let's work together to lighten your emotional burden.",
                "There’s strength in acknowledging when things feel overwhelming. You're not alone in this journey.",
                "Let’s pause and breathe. The storm may be strong, but so is your potential to rise above it.",
            ],
        },
        {
            range: [57.01, 63],
            list: [
                "You’re at a delicate balance — not too low, but not quite where you might want to be. A small shift could make a big difference.",
                "You’re doing okay, but there’s room for upliftment. Let’s focus on building daily emotional wins.",
                "Your emotional state shows resilience with some signs of weariness. You’ve got what it takes to bounce back.",
                "You’ve come this far — now let’s strengthen your momentum toward well-being.",
                "You're at a pivot point — with some intentional care, things can start looking up.",
                "This is a reminder that even moderate progress is still progress. Let’s add a little spark to your emotional wellness.",
            ],
        },
        {
            range: [63.01, 86],
            list: [
                "You’re managing well emotionally — great job. Let’s keep nurturing what’s working and gently improve what isn’t.",
                "There’s evidence of solid emotional grounding here. Keep building on those positive foundations.",
                "You’re in a stable space emotionally. That’s something to celebrate!",
                "Your emotional awareness is evident — you’re doing the inner work, and it shows.",
                "This is a good emotional health zone. Let’s keep reinforcing these habits and insights.",
                "You're showing strength and balance. A few intentional actions could elevate you even further.",
            ],
        },
        {
            range: [86.01, 100],
            list: [
                "Outstanding emotional strength! You’re radiating resilience and inner peace.",
                "This score reflects a high level of emotional clarity and wellness. Keep shining.",
                "You’re in a powerful emotional space. Let’s harness that to uplift others too.",
                "Your emotional well-being is exceptional. Keep nurturing what helps you thrive.",
                "You’ve cultivated an inner calm that’s both rare and inspiring.",
                "Your emotional energy is vibrant and centered — a beautiful state to be in.",
            ],
        },
    ];

    return pickAComment(percentage, messages);
}

function pickAComment(percentage, messages) {
    const messageGroup = messages.find(({ range }) => percentage >= range[0] && percentage <= range[1]);

    if (messageGroup && messageGroup.list.length > 0) {
        const randomIndex = Math.floor(Math.random() * messageGroup.list.length);
        return messageGroup.list[randomIndex];
    } else {
        return "No comment available for this score.";
    }
}

function getPartBStatus(score) {
    if (score < 29) return "Critical (Severe concern)";
    if (score < 54) return "Needs Attention (Significant concern)";
    if (score < 79) return "Needs Improvement (Mild concern)";
    return "Functioning Well (Healthy range)";
}

function getPartBComment(percentage) {
    const messages = [
        {
            range: [0, 29],
            list: [
                "Your support system and sense of belonging may need strengthening. Let's explore ways to help you feel more connected and supported.",
                "This score suggests you're experiencing some social or environmental disconnection. You're not alone, and things can improve with the right support.",
                "It seems like your current environment might not be meeting your emotional or relational needs. Let’s identify what could make things better.",
                "Everyone needs a safe space to thrive — let’s work on building or rebuilding that for you.",
                "Support is essential to growth. Let's find the people and places that lift you up.",
            ],
        },
        {
            range: [29.01, 54],
            list: [
                "You're navigating through some ups and downs in your external environment. Let’s strengthen the supportive elements around you.",
                "There’s potential for greater connection and comfort in your surroundings. A few key shifts can bring big change.",
                "Your environment is somewhat stable, but there's room for improvement. Let’s boost your sense of safety and support.",
                "You’re making it work — now let’s make it better. A bit more structure or support could elevate your environment.",
                "Progress is showing, but there’s space to create more meaningful support systems. You're on the right path.",
            ],
        },
        {
            range: [54.01, 79],
            list: [
                "You’ve built a relatively supportive environment — great work. Let’s keep improving what’s already working.",
                "This score shows you're surrounded by helpful elements, with just a few gaps to close. You're almost there!",
                "You’re in a pretty solid space. A little more refinement and connection could take things to the next level.",
                "You’ve created a foundation of support and safety. Keep reinforcing those positive spaces and relationships.",
                "Nice progress! Your surroundings and support systems are showing up for you in meaningful ways.",
            ],
        },
        {
            range: [79.01, 100],
            list: [
                "You’re thriving in a nurturing environment — well done! Let’s celebrate what’s working and keep it going.",
                "This score reflects a high level of environmental and relational wellness. Keep surrounding yourself with what uplifts you.",
                "You’re in a great place socially and environmentally. Let’s keep fueling that positive momentum.",
                "You’ve cultivated meaningful support and a sense of belonging — that’s powerful.",
                "Strong connections and a safe environment are shining through here. You’re doing an amazing job.",
            ],
        },
    ];

    return pickComment(percentage, messages);
}

function pickComment(percentage, messages) {
    const messageGroup = messages.find(({ range }) => percentage >= range[0] && percentage <= range[1]);

    if (messageGroup && messageGroup.list.length > 0) {
        const randomIndex = Math.floor(Math.random() * messageGroup.list.length);
        return messageGroup.list[randomIndex];
    } else {
        return "No comment available for this score.";
    }
}

function plotGauges(percA, percB) {
    Plotly.newPlot("gaugeA", [
        {
            type: "indicator",
            mode: "gauge+number",
            value: percA,
            title: { text: "Emotional State" },
            gauge: {
                axis: { range: [0, 100] },
                bar: { color: "#a4b0b1" },
                steps: [
                    { range: [0, 57], color: "#FF0000" },
                    { range: [57, 63], color: "#FF8C00" },
                    { range: [63, 86], color: "#FFFC00" },
                    { range: [86, 100], color: "#00FF00" },
                ],
            },
        },
    ]);

    Plotly.newPlot("gaugeB", [
        {
            type: "indicator",
            mode: "gauge+number",
            value: percB,
            title: { text: "Functional Score" },
            gauge: {
                axis: { range: [0, 100] },
                bar: { color: "#a4b0b1" },
                steps: [
                    { range: [0, 29], color: "#FF0000" },
                    { range: [29, 54], color: "#FF8C00" },
                    { range: [54, 79], color: "#FFFC00" },
                    { range: [79, 100], color: "#00FF00" },
                ],
            },
        },
    ]);
}

// Function to determine the background color based on Part A score
function getColorForPartA(percA) {
    if (percA >= 0 && percA <= 57) return "#FF0000"; // Red
    if (percA > 57 && percA <= 63) return "#FF8C00"; // Orange
    if (percA > 63 && percA <= 86) return "#FFFC00"; // Yellow
    if (percA > 86 && percA <= 100) return "#00FF00"; // Green
    return "#FFFFFF"; // Default white if out of range
}

// Function to determine the background color based on Part B score
function getColorForPartB(percB) {
    if (percB >= 0 && percB <= 29) return "#FF0000"; // Red
    if (percB > 29 && percB <= 54) return "#FF8C00"; // Orange
    if (percB > 54 && percB <= 79) return "#FFFC00"; // Yellow
    if (percB > 79 && percB <= 100) return "#00FF00"; // Green
    return "#FFFFFF"; // Default white if out of range
}

function renderAllCharts(percA, percB) {
    const cAScore = Math.round(percA);
    const cBScore = Math.round(percB);

    const partAColor = getColorForPartA(percA);
    const partBColor = getColorForPartB(percB);

    // Function to determine the background color for Part A score in this chart section
    function getColorForPartA_BarChartSection(percA) {
        console.log("[DEBUG] Calculating color for Part A with score:", percA);
        if (percA >= 0 && percA <= 57) return "#FF0000"; // Red
        if (percA > 57 && percA <= 63) return "#FF8C00"; // Orange
        if (percA > 63 && percA <= 86) return "#FFFC00"; // Yellow
        if (percA > 86 && percA <= 100) return "#00FF00"; // Green
        console.warn("[WARNING] Part A score out of expected range:", percA);
        return "#FFFFFF"; // Default white
    }

    // Function to determine the background color for Part B score in this chart section
    function getColorForPartB_BarChartSection(percB) {
        console.log("[DEBUG] Calculating color for Part B with score:", percB);
        if (percB >= 0 && percB <= 29) return "#FF0000"; // Red
        if (percB > 29 && percB <= 54) return "#FF8C00"; // Orange
        if (percB > 54 && percB <= 79) return "#FFFC00"; // Yellow
        if (percB > 79 && percB <= 100) return "#00FF00"; // Green
        console.warn("[WARNING] Part B score out of expected range:", percB);
        return "#FFFFFF"; // Default white
    }

    // Gauge Charts (Plotly)
    Plotly.newPlot("gaugeA", [
        {
            type: "indicator",
            mode: "gauge+number",
            value: percA,
            title: { text: "Part A Gauge" },
            gauge: {
                axis: { range: [0, 100] },
                bar: { color: "#a4b0b1" },
                steps: [
                    { range: [0, 57], color: "#FF0000" },
                    { range: [57.01, 63], color: "#FF8C00" },
                    { range: [63.01, 86], color: "#FFFC00" },
                    { range: [86.01, 100], color: "#00FF00" },
                ],
            },
        },
    ]);

    Plotly.newPlot("gaugeB", [
        {
            type: "indicator",
            mode: "gauge+number",
            value: percB,
            title: { text: "Functional Score" },
            gauge: {
                axis: { range: [0, 100] },
                bar: { color: "#a4b0b1" },
                steps: [
                    { range: [0, 29], color: "#FF0000" },
                    { range: [29.01, 54], color: "#FF8C00" },
                    { range: [54.01, 79], color: "#FFFC00" },
                    { range: [79.01, 100], color: "#00FF00" },
                ],
            },
        },
    ]);
}


document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
    const addTaskBtn = document.getElementById("addTask");
    const saveTaskBtn = document.getElementById("saveTask");
    const deleteTaskBtn = document.getElementById("deleteTask");
    const taskModal = document.getElementById("taskModal");
    let editingEvent = null;

    const moodColors = {
        Happy: "#fde68a",
        Calm: "#bae6fd",
        Motivated: "#bbf7d0",
        Stressed: "#fecaca",
        Sad: "#ddd6fe",
    };

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        droppable: true,
        headerToolbar: {
            start: "title",
            center: "",
            end: "prev,next today",
        },
        events: JSON.parse(localStorage.getItem("calendarEvents")) || [],
        eventClick: function (info) {
            openModal(info.event);
        },
        dateClick: function (info) {
            openModal(null, info.dateStr);
        },
        eventDidMount: function (info) {
            const mood = info.event.extendedProps.mood;
            if (mood && moodColors[mood]) {
                info.el.style.backgroundColor = moodColors[mood];
            }
            info.el.style.cursor = "pointer";
        },
        eventDrop: function (info) {
            saveToLocal();
            Toastify({
                text: "Task moved!",
                duration: 2000,
                gravity: "top",
                position: "center",
                backgroundColor: "#60a5fa",
            }).showToast();
        },
        eventDragStart: function (info) {
            // Remove ghost image
            if (info.jsEvent.dataTransfer) {
                const img = new Image();
                img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEklEQVR42mNk+M/wHwAE/wL+3oylPwAAAABJRU5ErkJggg=="; // transparent pixel
                info.jsEvent.dataTransfer.setDragImage(img, 0, 0);
            }
        },
        eventDragStop: function (info) {
            saveToLocal();
            Toastify({
                text: "Task moved!",
                duration: 2000,
                gravity: "top",
                position: "center",
                backgroundColor: "#60a5fa",
            }).showToast();
        },
    });

    calendar.render();

    function openModal(event = null, dateStr = null) {
        editingEvent = event;
        taskModal.style.display = "block";

        if (event) {
            document.getElementById("taskTitle").value = event.title;
            document.getElementById("taskDescription").value = event.extendedProps.description || "";
            document.getElementById("taskMood").value = event.extendedProps.mood || "";
            document.getElementById("taskDate").value = event.startStr.split("T")[0];
            document.getElementById("taskStartTime").value = event.startStr.split("T")[1]?.substring(0, 5) || "";
            document.getElementById("taskEndTime").value = event.endStr ? event.endStr.split("T")[1]?.substring(0, 5) : "";
        } else {
            document.querySelectorAll("#taskModal input, #taskModal textarea, #taskModal select").forEach((input) => (input.value = ""));
            if (dateStr) {
                document.getElementById("taskDate").value = dateStr;
            }
        }
    }

    window.closeModal = function () {
        taskModal.style.display = "none";
        editingEvent = null;
    };

    saveTaskBtn.onclick = function () {
        const title = document.getElementById("taskTitle").value.trim();
        const description = document.getElementById("taskDescription").value.trim();
        const mood = document.getElementById("taskMood").value;
        const date = document.getElementById("taskDate").value;
        const startTime = document.getElementById("taskStartTime").value;
        const endTime = document.getElementById("taskEndTime").value;

        if (!title || !date) {
            alert("Please fill at least Title and Date.");
            return;
        }

        const start = startTime ? `${date}T${startTime}` : date;
        const end = endTime ? `${date}T${endTime}` : start;

        if (editingEvent) {
            editingEvent.setProp("title", title);
            editingEvent.setStart(start);
            editingEvent.setEnd(end);
            editingEvent.setExtendedProp("description", description);
            editingEvent.setExtendedProp("mood", mood);
        } else {
            calendar.addEvent({
                title: title,
                start: start,
                end: end,
                extendedProps: { description, mood },
            });
        }

        saveToLocal();
        Toastify({
            text: editingEvent ? "Task updated!" : "Task added!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#34d399",
        }).showToast();
        closeModal();
    };

    deleteTaskBtn.onclick = function () {
        if (editingEvent) {
            editingEvent.remove();
            saveToLocal();
            Toastify({
                text: "Task deleted!",
                duration: 3000,
                gravity: "top",
                position: "center",
                backgroundColor: "#f87171",
            }).showToast();
            closeModal();
        }
    };

    function saveToLocal() {
        const events = calendar.getEvents().map((event) => ({
            title: event.title,
            start: event.startStr,
            end: event.endStr || event.startStr,
            extendedProps: event.extendedProps,
        }));
        localStorage.setItem("calendarEvents", JSON.stringify(events));
    }
});
