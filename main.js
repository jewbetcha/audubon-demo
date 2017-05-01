$(document).ready(function() {
  $("#input").keyup(function() {
    var val = $(this).val();
    var array = val.split('');
    var name = document.querySelector('.name');
    var markup = '';

    for (var v of array) {
      markup += `<span class="letter">${v}</span>`
    }
    console.log(markup);
    if (markup === undefined) {
      // do nothing
    }
    else {
      name.innerHTML = markup;
    }
  });

  var animate = document.querySelector('#animate');
  animate.addEventListener('click', function() {
    $('.letter').each(function() {
      $(this).addClass('animate')
    });
    var els = document.querySelectorAll('.letter');

    var nodeList = anime({
      targets: els,
      translateY: [
        { value: -100, elasticity: 100 }
      ],
      rotate: {
        value: 360,
        duration: 100,
        easing: 'easeInOutSine',
        elasticity: 100
      },
      scale: [
        { value: 1, duration: 100, elasticity: 100 , easing: 'easeOutExpo'},
        { value: 75, duration: 100, delay: 50, easing: 'easeOutExpo' },
        { value: 1, duration: 100, elasticity: 100, easing: 'easeOutExpo' }
      ],
      // scaleY: [
      //   { value: [1.75, 1], duration: 500 },
      //   { value: 2, duration: 50, delay: 100, easing: 'easeOutExpo' },
      //   { value: 1, duration: 450 },
      //   { value: 1.75, duration: 50, delay: 100, easing: 'easeOutExpo' },
      //   { value: 1, duration: 450 }
      // ],
      delay: function(el, i, l) { return i * 90; },
      duration: 100
    });
  });
  var reload = document.querySelector('#reload');
  reload.addEventListener('click', function() {
    location.reload();
  });
});
