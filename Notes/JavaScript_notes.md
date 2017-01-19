### JavaScript Notes

 - Returns the first element with a class of "myclass":
```
document.querySelector(".myclass");
```
 - Can do more specific selections, for instance checkboxes (input type="checkbox") within a div with class="inbox":
```
document.querySelectorAll('.inbox input[type="checkbox"]');
```
 - Returns an array-like collection of all elements with the class of "example":
```
document.getElementsByClassName("example");
```
 - Syntax for coding functionality onto e.g. every checkbox within a collection of checkboxes:
```
checkboxes.forEach(checkbox => {
    if (checkbox == previousChecked) {
      // do some stuff to that checkbox
    }
  });
```
 - An event listener listens out for the completion of a CSS transition before executing endAnimation:
```
button.addEventListener('transitionend', endAnimation);
```
 - document.documentElement returns the root element of the document (i.e. everything) and then setProperty(PropertyName, PropertyValue) changes the style value for elements which match the given propertyName (in this case a CSS variable, hence "--"):
```
document.documentElement.style.setProperty(`--${this.name}`, this.value);
```
