panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// Add this as a separte eventListener rather than trying to chain it onto first:
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
  $(this).toggleClass("open");
}

function toggleActive(event) {
  if (event.propertyName.includes("flex")) {
    $(this).toggleClass("active");
  }
}
