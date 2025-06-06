document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn__menu");
  const menu = document.getElementById("menu__mobile");
  const sairOverlay = document.getElementById("overlay__menu");

  // Menu Mobile
  if (btnMenu && menu && sairOverlay) {
    btnMenu.addEventListener("click", () => {
      menu.classList.toggle("abrir__menu");
    });

    menu.addEventListener("click", () => {
      menu.classList.remove("abrir__menu");
    });

    sairOverlay.addEventListener("click", () => {
      menu.classList.remove("abrir__menu");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
  const themeIcon = document.getElementById("themeIcon");
  const themeIconMobile = document.getElementById("themeIconMobile");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  let currentTheme = savedTheme || "light";

  function setTheme(theme) {
    body.classList.remove("light-mode", "dark-mode", "eclipse-mode");
    body.classList.add(`${theme}-mode`);
    localStorage.setItem("theme", theme);

    const iconPath =
      theme === "dark"
        ? "simbulo-lua.png"
        : theme === "eclipse"
        ? "simbulo-eclipse.png"
        : "simbulo-sol.png";

    themeIcon.src = `src/assets/images/${iconPath}`;
    if (themeIconMobile)
      themeIconMobile.src = `./src/assets/images/${iconPath}`;

    themeIcon.alt =
      theme === "dark"
        ? "Modo Escuro"
        : theme === "eclipse"
        ? "Modo Eclipse"
        : "Modo Claro";

    currentTheme = theme;
  }

  setTheme(currentTheme);

  function toggleTheme() {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("eclipse");
    } else {
      setTheme("light");
    }
  }

  if (darkModeToggle) darkModeToggle.addEventListener("click", toggleTheme);
  if (darkModeToggleMobile)
    darkModeToggleMobile.addEventListener("click", toggleTheme);
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
