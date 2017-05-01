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

  var button = document.querySelector('button');
  button.addEventListener('click', function() {
    var myMultiTween2 = KUTE.allFromTo(
          '.letter',
          {translate:[0,0], rotate: 0},
          {translate:[0,150], rotate: 360},
          {transformOrigin: '10% 10%', offset: 200 }
      ).start();
  })
});
