// File: static/app.js (append or merge)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const pwd = document.getElementById('password');
  const togglePwd = document.getElementById('togglePwd');
  const skip = document.getElementById('skipLoginBtn');
  const statusLive = document.getElementById('formStatus');

  function validateField(input){
    if (!input) return true;
    const ok = input.checkValidity();
    input.classList.toggle('is-invalid', !ok);
    return ok;
  }

  email?.addEventListener('input', () => validateField(email));
  pwd?.addEventListener('input', () => validateField(pwd));

  togglePwd?.addEventListener('click', function(){
    const isText = pwd.type === 'text';
    pwd.type = isText ? 'password' : 'text';
    this.textContent = isText ? 'Show' : 'Hide';
    this.setAttribute('aria-pressed', String(!isText));
  });

  // Redirect helper
  function goToApp(){
    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('loginModal'));
    modal.hide();
    setTimeout(() => { window.open('/app', '_blank'); }, 150);
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ok = validateField(email) & validateField(pwd);
    if (!ok) {
      statusLive.textContent = 'Please fix the highlighted fields.';
      return;
    }

    // Example async auth call; replace with real endpoint
    try {
      // const res = await fetch('/api/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email: email.value.trim(), password: pwd.value }) });
      // if (!res.ok) throw new Error('Invalid credentials');
      // const data = await res.json(); // handle tokens/session
      statusLive.textContent = 'Login successful, redirecting…';
      goToApp(); // success path
    } catch (err) {
      statusLive.textContent = 'Login failed. Check credentials and try again.';
      email.classList.add('is-invalid');
      pwd.classList.add('is-invalid');
    }
  });

  skip?.addEventListener('click', () => { window.open('/app', '_blank'); });

  // Keep backdrop blur behavior
  const loginModal = document.getElementById('loginModal');
  loginModal?.addEventListener('show.bs.modal', () => {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.classList.add('blur');
  });
  loginModal?.addEventListener('hidden.bs.modal', () => {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) backdrop.classList.remove('blur');
  });
});