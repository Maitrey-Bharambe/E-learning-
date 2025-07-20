document.querySelector(".explore-btn").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".courses").offsetTop,
    behavior: "smooth",
  });
});
