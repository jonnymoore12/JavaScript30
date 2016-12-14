document.onkeydown = function(event) {
  audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  // "Rewind" audio file for quick repeated hits of same button:
  audio.currentTime = 0;
  audio.play();
  animateButton(event);
}

animateButton = function(event) {
  button = document.querySelector(`div[data-key="${event.keyCode}"]`);
  $(button).addClass('playing');
  buttons = document.querySelectorAll('.key');
  buttons.forEach(function(){
    // Listen in for when the transition on the button ends (see CSS)
    // then execute our method endAnimation:
    button.addEventListener('transitionend', endAnimation);
  });
}

endAnimation = function() {
  $(this).removeClass('playing');
}











































// document.onkeydown = function(event) {
//   audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
//   // Deal with cases when keypress doesn't match any audio elements:
//   if (!audio) return;
//     // Reset the audio to the beginning of track so you don't have to wait for it
//     // to finish before the "next" hit can work:
//   audio.currentTime = 0;
//   audio.play();
//   animateButton();
// }

// function animateButton() {
//   button = document.querySelector(`div[data-key="${event.keyCode}"]`);
//   $(button).addClass('playing');
//   // Add removeClass to an AnimateEnd method for each button
//   const buttons = document.querySelectorAll(".key");
//   buttons.forEach(function(button) {
//     // The event waits for the transition (see CSS) to end:
//     button.addEventListener('transitionend', endAnimation);
//   });
// }
//
// function endAnimation() {
//   $(this).removeClass('playing');
// }
