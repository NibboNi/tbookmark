const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

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
