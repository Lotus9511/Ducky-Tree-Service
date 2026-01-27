
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');

hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    drawer.classList.toggle('show');
});

// Close drawer when clicking a link
drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
    drawer.classList.remove('show');
    hamburger?.setAttribute('aria-expanded', 'false');
    });
});

// ✅ Send form to Google Sheets
const form = document.getElementById('quoteForm');
const hint = document.getElementById('formHint');

const modal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeModalBtn');

function openModal() {
    modal?.classList.add('show');
    modal?.setAttribute('aria-hidden', 'false');
}
function closeModal() {
    modal?.classList.remove('show');
    modal?.setAttribute('aria-hidden', 'true');
}

closeBtn?.addEventListener('click', closeModal);

// close if you click outside the card
modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// close with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// 1) PASTE YOUR WEB APP URL HERE: ---------> #DONT CHANGE URL <-----------------
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwAizKPyRJNWw_U1MChh7d3VzbimUi6rOmHJ8_l86mo2PyrJCzWgVZslyx9uheT3MI/exec";

form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const payload = {
    name: document.getElementById('name')?.value?.trim() || "",
    phone: document.getElementById('phone')?.value?.trim() || "",
    email: document.getElementById('email')?.value?.trim() || "",
    service: document.getElementById('service')?.value || "",
    address: document.getElementById('address')?.value?.trim() || "",
    timeline: document.getElementById('timeline')?.value || "",
    contactpref: document.getElementById('contactpref')?.value || "",
    details: document.getElementById('details')?.value?.trim() || "",
    page: window.location.href
    };

    const modalMsg = document.getElementById('modalMsg');
    const modalTitle = document.getElementById('modalTitle');

    try {
    const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const text = await res.text();

    let ok = false;
    try {
        const json = JSON.parse(text);
        ok = !!json.ok;
    } catch {
        ok = res.ok; // treat HTTP 200 as success
    }

    if (ok) {
        modalTitle.textContent = "✅ Sent!";
        modalMsg.textContent = "We will contact you ASAP.";
        openModal();
        form.reset();
        if (hint) hint.textContent = "";
    } else {
        modalTitle.textContent = "⚠️ Couldn't send";
        modalMsg.textContent = "Please call 609 213 6222.";
        openModal();
        if (hint) hint.textContent = "⚠️ Couldn't send. Please call 609 213 6222.";
    }

    } catch (err) {
    modalTitle.textContent = "⚠️ Send failed MODAL TITLE ";
    modalMsg.textContent = "Please call 609 213 6222.";
    openModal();
    if (hint) hint.textContent = "⚠️ Couldn't send. Please call 609 213 6222.";
    console.error(err);
    } finally {
    if (submitBtn) submitBtn.disabled = false;
    }
});
