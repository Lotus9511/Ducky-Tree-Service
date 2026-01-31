// -----------------------------
// Mobile menu
// -----------------------------
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!isOpen));
  drawer?.classList.toggle("show");
});

// Close drawer when clicking a link
drawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    drawer.classList.remove("show");
    hamburger?.setAttribute("aria-expanded", "false");
  });
});

// -----------------------------
// Services flip cards
// -----------------------------
const serviceCards = Array.from(document.querySelectorAll("#services .card"));

function closeAllServiceCards(except) {
  serviceCards.forEach((c) => {
    if (except && c === except) return;
    c.classList.remove("flipped");
    const back = c.querySelector(".card-back");
    back?.setAttribute("aria-hidden", "true");
  });
}

function openServiceCard(card) {
  if (!card) return;
  closeAllServiceCards(card);
  card.classList.add("flipped");
  const back = card.querySelector(".card-back");
  back?.setAttribute("aria-hidden", "false");
}

function closeServiceCard(card) {
  if (!card) return;
  card.classList.remove("flipped");
  const back = card.querySelector(".card-back");
  back?.setAttribute("aria-hidden", "true");
}

serviceCards.forEach((card) => {
  const learnMore = card.querySelector(".card-front .more");
  const backClose = card.querySelector(".back-close");

  learnMore?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openServiceCard(card);
  });

  backClose?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeServiceCard(card);
  });

  card.addEventListener("click", (e) => {
    if (!(card.classList.contains("flipped"))) return;
    const target = e.target;
    if (target instanceof Element && (target.closest("a") || target.closest("button"))) return;
    closeServiceCard(card);
  });

  card.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key !== "Enter" && key !== " ") return;
    e.preventDefault();
    if (card.classList.contains("flipped")) closeServiceCard(card);
    else openServiceCard(card);
  });
});

// Click anywhere outside a service card closes any open card
document.addEventListener("click", (e) => {
  if (!serviceCards.length) return;
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.closest("#services .card")) return;
  closeAllServiceCards();
});

// -----------------------------
// Modal
// -----------------------------
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModalBtn");

function openModal() {
  modal?.classList.add("show");
  modal?.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal?.classList.remove("show");
  modal?.setAttribute("aria-hidden", "true");
}

closeBtn?.addEventListener("click", closeModal);

// close if you click outside the card
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// close with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// -----------------------------
// Form -> Google Sheets
// -----------------------------
const form = document.getElementById("quoteForm");
const hint = document.getElementById("formHint");

// 1) PASTE YOUR WEB APP URL HERE:
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxwAizKPyRJNWw_U1MChh7d3VzbimUi6rOmHJ8_l86mo2PyrJCzWgVZslyx9uheT3MI/exec";

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn?.textContent || "Send Request";

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  }

  const payload = {
    name: document.getElementById("name")?.value?.trim() || "",
    phone: document.getElementById("phone")?.value?.trim() || "",
    email: document.getElementById("email")?.value?.trim() || "",
    service: document.getElementById("service")?.value || "",
    address: document.getElementById("address")?.value?.trim() || "",
    timeline: document.getElementById("timeline")?.value || "",
    contactpref: document.getElementById("contactpref")?.value || "",
    details: document.getElementById("details")?.value?.trim() || "",
    page: window.location.href,
  };

  const modalMsg = document.getElementById("modalMsg");
  const modalTitle = document.getElementById("modalTitle");

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();

    let ok = false;
    try {
      const json = JSON.parse(text);
      ok = !!json.ok;
    } catch {
      ok = res.ok; // treat HTTP 200 as success if response isn't JSON
    }

    if (ok) {
      if (modalTitle) modalTitle.textContent = "✅ Sent!";
      if (modalMsg) modalMsg.textContent = "We will contact you ASAP.";
      openModal();
      form.reset();
      if (hint) hint.textContent = "";
    } else {
      if (modalTitle) modalTitle.textContent = "⚠️ Couldn't send";
      if (modalMsg) modalMsg.textContent = "Please call or text 609 213 6222.";
      openModal();
      if (hint) hint.textContent = "⚠️ Couldn't send. Please call or text 609 213 6222.";
      console.error("Server returned non-ok response:", text);
    }
  } catch (err) {
    // 👤 Customer-facing message
    if (modalTitle) modalTitle.textContent = "⚠️ Couldn't send";
    if (modalMsg)
      modalMsg.textContent =
        "Something went wrong. Please call or text 609 213 6222 and we’ll help right away.";
    openModal();

    if (hint) hint.textContent = "⚠️ Couldn't send. Please call or text 609 213 6222.";

    // 🧑‍💻 Developer-only logs
    console.error("❌ Form submit failed");
    console.error("Error:", err);
    console.error("Message:", err?.message);
    console.error("Endpoint:", SCRIPT_URL);
  } finally {
    // 🔁 Always re-enable button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
});
