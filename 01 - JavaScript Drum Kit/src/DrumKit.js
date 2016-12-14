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
