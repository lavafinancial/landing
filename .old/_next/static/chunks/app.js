// menu
const mybtn = document.querySelector(".header-mobile-open-button");
const menubtn = document.querySelector(".header-menu-draw");
const maskbtn = document.querySelector(".header-menu-draw-mask");
mybtn.addEventListener("click", () => {
  menubtn.classList.add("open");
  maskbtn.classList.add("open");
});
maskbtn.addEventListener("click", () => {
  menubtn.classList.remove("open");
  maskbtn.classList.remove("open");
});
// end menu

// faq btns
const faqbtns = document.querySelectorAll(".Collapsible span");
const faqcontents = document.querySelectorAll(".Collapsible__contentOuter");
faqbtns.forEach(togglebtn);

function togglebtn(faqbtn, index) {
  faqbtn.addEventListener("click", () => {
    faqbtn.classList.toggle("is-open");
    faqbtn.classList.toggle("is-closed");

    if (faqbtn.getAttribute("aria-expanded") == "false") {
      faqbtn.setAttribute("aria-expanded", "true");
    } else {
      faqbtn.setAttribute("aria-expanded", "false");
    }
    if (faqcontents[index].style.height === "0px") {
      faqcontents[index].style.height = "auto";
    } else {
      faqcontents[index].style.height = "0px";
    }
  });
}
