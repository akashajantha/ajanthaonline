 const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", String(isOpen));
            menuBtn.textContent = isOpen ? "✕" : "☰";
        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.textContent = "☰";
            });
        });

        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            const whatsappNumber = "919845352945";

            const text =
                `Hello Ajantha Studio & Frame Works!\n\n` +
                `Name: ${name}\n` +
                `Phone: ${phone}\n` +
                `Service: ${service}\n` +
                `Message: ${message}`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank", "noopener");
        });

        
/* ================= CONTACT FORM ================= */

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const whatsappMessage =
        "Hello Ajantha Studio & Frame Works!\n\n" +
        "I would like to enquire about your services.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Service: " + service + "\n" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/919845352945?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});


/* =========================================
   CUSTOM PHOTO FRAME FORM
========================================= */

(function () {
    const form = document.getElementById("frameCustomForm");

    if (!form) return;

    const frameType = document.getElementById("frameType");

    const recopyOptions = document.getElementById("recopyOptions");
    const customFrameOptions = document.getElementById("customFrameOptions");

    const recopyMaterial = document.getElementById("recopyMaterial");
    const recopySize = document.getElementById("recopySize");

    const frameOrientation = document.getElementById("frameOrientation");
    const customFrameSize = document.getElementById("customFrameSize");

    function setGroupEnabled(group, enabled) {
        group.querySelectorAll("select, input").forEach(function (field) {
            field.disabled = !enabled;
            field.required = enabled;
        });
    }

    function updateFrameOptions() {
        const selectedType = frameType.value;
        const isRecopy =
            selectedType === "Recopy Photo (Death Photo)";

        const isCustom =
            selectedType === "Collage Frame" ||
            selectedType === "Single Photo";

        recopyOptions.hidden = !isRecopy;
        customFrameOptions.hidden = !isCustom;

        setGroupEnabled(recopyOptions, isRecopy);
        setGroupEnabled(customFrameOptions, isCustom);
    }

    frameType.addEventListener("change", updateFrameOptions);

    updateFrameOptions();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const name =
            document.getElementById("frameCustomerName").value.trim();

        const phone =
            document.getElementById("frameCustomerPhone").value.trim();

        const place =
            document.getElementById("frameCustomerPlace").value.trim();

        const type = frameType.value;

        let optionDetails = "";

        if (type === "Recopy Photo (Death Photo)") {
            optionDetails =
                "Cover Material: " + recopyMaterial.value + "\n" +
                "Size: " + recopySize.value;
        } else {
            optionDetails =
                "Orientation: " + frameOrientation.value + "\n" +
                "Size: " + customFrameSize.value;
        }

        const whatsappMessage =
            "Hello Ajantha Studio & Frame Works!\n\n" +
            "I would like to customise a photo frame.\n\n" +
            "Customer Details\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Place: " + place + "\n\n" +
            "Frame Requirements\n" +
            "Frame Type: " + type + "\n" +
            optionDetails + "\n\n" +
            "I will send my photo as a document in this WhatsApp chat. " +
            "Please help me with the design and price.\n\n" +
            "Thank you!";

        const whatsappURL =
            "https://wa.me/919845352945?text=" +
            encodeURIComponent(whatsappMessage);

        const whatsappWindow = window.open(
            whatsappURL,
            "_blank"
        );

        if (!whatsappWindow) {
            window.location.href = whatsappURL;
        }
    });
})();
