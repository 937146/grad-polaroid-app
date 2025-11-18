// ===============================
//   GRAD POLAROID APP SCRIPT
// ===============================

// Limit stickers to 3
let selectedStickers = [];

// YEAR OPTIONS: Auto rotate yearly
function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const dropdown = document.getElementById("gradYear");

    dropdown.innerHTML = ""; // Clear old

    for (let i = 0; i < 3; i++) {
        const year = currentYear + i;
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        dropdown.appendChild(option);
    }
}

generateYearOptions(); // Run on load



// Update polaroid preview with name + gold bar + photo + stickers
function updatePreview() {
    const name = document.getElementById("fullName").value;
    const year = document.getElementById("gradYear").value;
    const strand = document.getElementById("strand").value;
    const subStrand = document.getElementById("tvlSub").value;
    const caption = document.getElementById("caption").value;
    const styleChoice = document.getElementById("polaroidStyle").value;

    const previewName = document.getElementById("previewName");
    const previewYear = document.getElementById("previewYear");
    const previewStrand = document.getElementById("previewStrand");
    const previewCaption = document.getElementById("previewCaption");
    const previewBox = document.getElementById("polaroidPreview");

    previewName.textContent = name || "Your Name";
    previewYear.textContent = `Class of ${year}`;
    previewCaption.textContent = caption || "";
    
    if (strand === "TVL") {
        previewStrand.textContent = `TVL – ${subStrand}`;
    } else {
        previewStrand.textContent = strand;
    }

    // Apply style themes
    if (styleChoice === "plain") {
        previewBox.style.border = "10px solid white";
        previewBox.style.background = "#fff";
    }
    else if (styleChoice === "aesthetic") {
        previewBox.style.border = "10px solid #ffe6f2";
        previewBox.style.background = "linear-gradient(135deg, #fef4ff, #fff)";
    }
    else if (styleChoice === "school_premium") {
        previewBox.style.border = "12px solid #4b1f6a"; // SPCF purple
        previewBox.style.background = "linear-gradient(135deg, #56307a, #2a0940)";
        previewBox.style.color = "white";
    }
}


// Upload photo preview
function loadImage(event) {
    const previewImage = document.getElementById("previewImage");
    previewImage.src = URL.createObjectURL(event.target.files[0]);
    updatePreview();
}



// Show or hide TVL sub-strand selector
function toggleTVL() {
    const strand = document.getElementById("strand").value;
    const tvlBox = document.getElementById("tvlBox");

    if (strand === "TVL") {
        tvlBox.style.display = "block";
    } else {
        tvlBox.style.display = "none";
    }

    updatePreview();
}



// Sticker selection
function selectSticker(src) {
    if (selectedStickers.length >= 3) {
        alert("You can only select up to 3 designs.");
        return;
    }

    selectedStickers.push(src);

    const stickerArea = document.getElementById("stickerArea");
    const img = document.createElement("img");
    img.src = src;
    img.className = "previewSticker";
    stickerArea.appendChild(img);

    updatePreview();
}



// Submit process
function submitForm() {
    const name = document.getElementById("fullName").value;
    const ig = document.getElementById("igHandle").value;
    const year = document.getElementById("gradYear").value;
    const song = document.getElementById("songInput").value;

    if (!name) return alert("Please enter your full name.");
    if (!ig) return alert("Please enter your Instagram handle.");

    alert(
        "Submitted!\n\n" +
        "Your post will appear on our IG account within 5 hours.\n" +
        "Thank you!"
    );
}
