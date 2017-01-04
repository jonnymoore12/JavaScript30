### CSS / HTML Notes

 - Data can be stored on DOM elements in our HTML (in this case data related to sizing the element):
```
data-sizing="px"
```
... and accessed in JavaScript using:
```
this.dataset.sizing
```
 - Syntax for adding a translation to elements of a particular class. The translation is effectively animated by adding and removing the ".active" class to the first child of the element with class "panel" :
```
.panel > *:first-child { transform: translateY(-100%); }
.panel.active > *:first-child { transform: translateY(0); }
```
