function elemInViewport(elem, full) {
  var box = elem.getBoundingClientRect();
  var top = box.top;
  var left = box.left;
  var bottom = box.bottom;
  var right = box.right;
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  var maxWidth = 0;
  var maxHeight = 0;
  if (full) {
    maxWidth = right - left;
    maxHeight = bottom - top;
  }
  return (
    Math.min(height, bottom) - Math.max(0, top) >= maxHeight &&
    Math.min(width, right) - Math.max(0, left) >= maxWidth
  );
}

window.addEventListener("scroll", (e) => {
  const elements = document.querySelectorAll(".section-wrapper");

  elements.forEach((el) => {
    if (elemInViewport(el, true)) {
      if (el.childNodes[1].classList.contains("section-hidden")) {
        el.childNodes[1].classList.remove("section-hidden");
        el.childNodes[1].classList.add("section-shown");
      }
    }
  });
});

document.querySelector(".burger-button").addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle("stop");
  document.querySelector(".menu").classList.toggle("open");
});
