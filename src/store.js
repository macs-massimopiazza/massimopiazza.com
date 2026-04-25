import { atom } from 'nanostores';

export const themeStore = atom('light');
export const isSideNavOpen = atom(false);


export function toggleTheme() {
  const newTheme = themeStore.get() === 'light' ? 'dark' : 'light';
  themeStore.set(newTheme);
  
  // Logica DOM
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
}

export function toggleSideNav() {
  isSideNavOpen.set(!isSideNavOpen.get());
}

export function closeSideNav() {
  isSideNavOpen.set(false);
}