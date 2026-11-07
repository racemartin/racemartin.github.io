function setupFilterGroup(buttonSelector, itemSelector, { useAll = false, container = null } = {}) {
  const buttons = document.querySelectorAll(buttonSelector);
  const items = document.querySelectorAll(itemSelector);
  if (!buttons.length || !items.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');

      items.forEach((item) => {
        const tags = (item.dataset.filter || item.dataset.tags || '').split(' ');
        const visible = (useAll && filter === 'all') || tags.includes(filter);
        item.classList.toggle('hidden', !visible);
      });

      if (container) container.dataset.domain = filter;
    });
  });
}

setupFilterGroup('#projets .filter', '#projets .project-card', { useAll: true });
setupFilterGroup('.skill-filter', '#skillsGrid span', { container: document.getElementById('skillsGrid') });

const emailButtons = document.querySelectorAll('.email-link');
emailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const address = `${button.dataset.user}@${button.dataset.domain}.${button.dataset.tld}`;
    window.location.href = `mailto:${address}`;
  });
});
