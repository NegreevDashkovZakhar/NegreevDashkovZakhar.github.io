const changeClass = "change";
const menuBlock = ` 
<nav class="menu-block" id="menu-block">
    <a href="index.html">Все песни</a>
    <a href="artists.html">Все исполнители</a>
</nav>`;

const menuOnClick = () => {
  const menuIcon = document.getElementById("menu-icon");
  const menuBlock = document.getElementById("menu-block");
  menuIcon.classList.toggle(changeClass);
  menuBlock.classList.toggle(changeClass);
};

const onLoad = () => {
  const headerElement = document.getElementById("header");
  headerElement.innerHTML = `${menuBlock} ${headerElement.innerHTML}`;

  const menuElement = document.getElementById("menu-icon");
  menuElement.addEventListener("click", menuOnClick);
};

document.addEventListener("DOMContentLoaded", onLoad);
