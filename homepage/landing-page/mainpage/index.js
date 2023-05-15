setTimeout(function() {
    var items = document.querySelectorAll('.fade');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('fade-in');
    }
  }, 1500);
  
  const cols = document.querySelectorAll('.container .row .col');
cols.forEach(col => {
  col.classList.add('visible');
});

  