// +90 degrees since hands in the 12 o-clock position are ALREADY rotated 90 degrees:
function updateTime() {
  var d = new Date();
  var hours = d.getHours() % 12;
  var mins = d.getMinutes();
  var secs = d.getSeconds();

  const degreesInHour = 30;
  const degreesInMinute = 6;
  const degreesInSecond = 6;

  document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hours * degreesInHour + 90}deg)`;
  document.getElementsByClassName('min-hand')[0].style.transform = `rotate(${mins * degreesInMinute + 90}deg)`;
  document.getElementsByClassName('second-hand')[0].style.transform = `rotate(${secs * degreesInSecond + 90}deg)`;
}

setInterval(function() {
  updateTime();
}, 1000);
