const wrap = document.querySelector(".one");

wrap.addEventListener("mouseover", (event) => {
  document.querySelector(".one").classList.add("top");
  document.querySelector(".two").classList.add("mid");
  document.querySelector(".three").classList.add("bottom");
  document.querySelector(".one").classList.remove("-top");
  document.querySelector(".two").classList.remove("-mid");
  document.querySelector(".three").classList.remove("-bottom");
});

wrap.addEventListener("mouseout", (event) => {
  document.querySelector(".one").classList.remove("top");
  document.querySelector(".two").classList.remove("mid");
  document.querySelector(".three").classList.remove("bottom");

  document.querySelector(".one").classList.add("-top");
  document.querySelector(".two").classList.add("-mid");
  document.querySelector(".three").classList.add("-bottom");
});
