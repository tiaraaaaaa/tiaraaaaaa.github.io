document.querySelectorAll('.theme-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const current =
      document.documentElement.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('color-mode', next);
  });
});

document.querySelectorAll('.news-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const section = button.closest('.news-section');
    const extraEntries = section.querySelectorAll('.news-entry-extra');
    const expanded = button.getAttribute('aria-expanded') === 'true';

    extraEntries.forEach((entry) => {
      entry.hidden = expanded;
    });

    button.setAttribute('aria-expanded', String(!expanded));
    button.setAttribute(
      'aria-label',
      expanded ? 'Show more news' : 'Show fewer news'
    );
    button.textContent = expanded
      ? button.dataset.collapsedLabel
      : button.dataset.expandedLabel;
  });
});
