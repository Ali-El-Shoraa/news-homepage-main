let iconMenu = document.querySelector(".icon-menu");
let links = document.querySelector(".links");
let nav = document.querySelector("nav");
console.log();
if (iconMenu.className == "icon-menu") {
  iconMenu.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.style.cssText =
      "width:100%;height: 100vh;position:fixed;background-color: #00000096;";
    document.body.prepend(overlay);
    let closeTag = document.createElement("img");
    closeTag.src = "assets/images/icon-menu-close.svg";
    closeTag.className = "close-tag";
    links.prepend(closeTag);
    closeTag.style.cssText = "display: block;margin: 40px 15px 20px auto;";
    links.classList.replace("links", "links-js");
    closeTag.onclick = function () {
      links.classList.replace("links-js", "links");
      closeTag.remove();
      overlay.remove();
    };
  });
}
