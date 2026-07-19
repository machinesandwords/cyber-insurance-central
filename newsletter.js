// ═══════════════════════════════════════════════════════════
// NEWSLETTER — cyberinsurancecentral.com
// Posts {email, group_id} to this site's Cloudflare Worker.
// WORKER_URL and GROUP_ID are placeholders until Phase 1 setup
// (MailerLite group + Worker deploy) is complete — see MAINTENANCE.md.
// ═══════════════════════════════════════════════════════════

const WORKER_URL = "https://newsletter.cyberinsurancecentral.com"; // TODO: confirm after Worker deploy
const GROUP_ID = "TODO_SET_AFTER_MAILERLITE_GROUP_CREATED";

(function () {
  const form = document.getElementById('nl-form');
  if (!form) return;

  const emailInput = document.getElementById('nl-email');
  const submitBtn = document.getElementById('nl-submit');
  const msg = document.getElementById('nl-msg');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    submitBtn.disabled = true;
    msg.style.display = 'none';
    msg.classList.remove('error');

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, group_id: GROUP_ID })
      });
      const data = await res.json();

      // NOTE: success check varies by site — verify against actual
      // deployed Worker response shape before launch (data.success vs
      // data.message === 'Subscribed').
      if (data.success || data.message === 'Subscribed') {
        submitBtn.textContent = 'Subscribed';
        submitBtn.classList.add('subscribed');
        msg.textContent = "You're on the list.";
        msg.style.display = 'block';
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (err) {
      submitBtn.disabled = false;
      msg.textContent = 'Something went wrong. Try again.';
      msg.classList.add('error');
      msg.style.display = 'block';
    }
  });
})();