import mainPages from '../config';
const normalizePath = (path) => path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

export function initNavigationDirection() {
  document.addEventListener('astro:before-preparation', (ev) => {
    const from = normalizePath(window.location.pathname);
    const to = normalizePath(new URL(ev.to).pathname);
    
    const fromIdx = mainPages.findIndex(page => page.path = from);
    const toIdx = mainPages.findIndex(page => page.path = to);

    if (fromIdx !== -1 && toIdx !== -1) {
      ev.direction = toIdx > fromIdx ? 'forward' : 'back';
    }
  });
}

initNavigationDirection();