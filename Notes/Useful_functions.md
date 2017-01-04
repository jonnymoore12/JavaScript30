Array.prototype.filter() is much like select in Ruby.
```
filteredInventors = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```
Array.prototype.reduce() is fair bit like inject in Ruby.
```
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instances = data.reduce(function(object, item){
  if (!object[item]) {
    object[item] = 0;
  }
  object[item] += 1;
  return object;
}, {});
```
Array.prototype.map():
```
inventorsNames = inventors.map(inventor => (inventor.first) + ' ' + (inventor.last));
```
String.prototype.match()
```
const regex = new RegExp(searchString, 'gi');
return place.city.match(regex) || place.state.match(regex);
```
