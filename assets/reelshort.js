const popularTrack = document.getElementById('popular-track');
document.querySelector('.arrow.right')?.addEventListener('click', () => popularTrack.scrollBy({left:260, behavior:'smooth'}));
document.querySelector('.arrow.left')?.addEventListener('click', () => popularTrack.scrollBy({left:-260, behavior:'smooth'}));

const searchOverlay = document.querySelector('.search-overlay');
document.querySelector('.search-toggle').addEventListener('click', () => {
  searchOverlay.classList.add('open');
  searchOverlay.setAttribute('aria-hidden','false');
  searchOverlay.querySelector('input').focus();
});
document.querySelector('.search-close').addEventListener('click', () => {
  searchOverlay.classList.remove('open');
  searchOverlay.setAttribute('aria-hidden','true');
});
searchOverlay.querySelector('input').addEventListener('input', (event) => {
  const term = event.target.value.trim().toLowerCase();
  document.querySelectorAll('.drama-card').forEach(card => {
    card.style.display = !term || card.dataset.title.toLowerCase().includes(term) ? '' : 'none';
  });
});

const dialog = document.querySelector('.player-dialog');
document.querySelectorAll('.drama-card, .watch-btn').forEach(control => {
  control.addEventListener('click', () => {
    const title = control.dataset.title || control.textContent.trim();
    const desc = control.dataset.desc || 'Entre em uma história intensa de amor, segredo e escolhas impossíveis.';
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('p').textContent = desc;
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

const accountDialog = document.querySelector('.account-dialog');
document.querySelector('.login-btn').addEventListener('click', () => accountDialog.showModal());
document.querySelector('.account-close').addEventListener('click', () => accountDialog.close());
accountDialog.addEventListener('close', () => {
  if (accountDialog.returnValue === 'default') return;
});

const appDialog = document.querySelector('.app-dialog');
document.querySelector('.download-btn').addEventListener('click', () => appDialog.showModal());
document.querySelector('.app-close').addEventListener('click', () => appDialog.close());
