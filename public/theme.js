const initTheme = () => {
  const dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (dark_mode) {
    localStorage.setItem('dark_mode', true);
    document.documentElement.classList.add('dark');
  }
};

initTheme();
