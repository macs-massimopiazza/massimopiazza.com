import { atom } from 'nanostores';

export const themeStore = atom('light');

export function toggleTheme() {
  const newTheme = themeStore.get() === 'light' ? 'dark' : 'light';
  themeStore.set(newTheme);
  
  // Logica DOM
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
}