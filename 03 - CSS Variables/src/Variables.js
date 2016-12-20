controls = document.querySelectorAll('.controls input');
controls.forEach(control => control.addEventListener('change', updateDisplay));

function updateDisplay() {
  console.log(this);
  // Relevant suffix for each input (e.g. "px" for spacing) stored in the dataset of each element:
  suffix = this.dataset.sizing || '';
  // document.documentElement returns the root element of the document (i.e. everything)
  // and setProperty looks for a matching PropertyName and changes it to the new value passed in:
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
