const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const logo = document.querySelector("#logo");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

menuBtn.addEventListener("click", menuToggle);
menu.childNodes.forEach((link) => link.addEventListener("click", menuToggle));

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  panels.forEach((panel) => panel.classList.add("hidden"));

  const target = e.target.children.length ? e.target.children[0] : e.target;
  target.classList.add("border-softRed", "border-b-4");
  const classString = target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function menuToggle() {
  logo.src = logo.src.includes("footer")
    ? "./images/logo-bookmark.svg"
    : "./images/logo-bookmark-footer.svg";
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}
