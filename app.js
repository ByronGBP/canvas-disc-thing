function init () {
  const canvas = new Canvas();
  const playground = new Playground(canvas);
  setInterval(() => {
    playground.render();
  }, 25);
}

document.addEventListener('DOMContentLoaded', () => { init(); });
