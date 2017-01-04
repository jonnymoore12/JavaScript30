### JavaScript Notes

 - Returns the first element with a class of "myclass":
```
document.querySelector(".myclass");
```
 - Returns an array-like collection of all elements with the class of "example":
```
document.getElementsByClassName("example");
```
 - An event listener listens out for the completion of a CSS transition before executing endAnimation:
```
button.addEventListener('transitionend', endAnimation);
```
 - document.documentElement returns the root element of the document (i.e. everything) and then setProperty(PropertyName, PropertyValue) changes the style value for elements which match the given propertyName (in this case a CSS variable, hence "--"):
```
document.documentElement.style.setProperty(`--${this.name}`, this.value);
```
