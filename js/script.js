document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      document.getElementById('text-block').style.display = 'none';
      document.write(`<textarea class="text-block">${document.getElementById('text-block').innerHTML}</textarea>`);
    }


    
  });