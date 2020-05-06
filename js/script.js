// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.


document.addEventListener('keydown', function(event) {
    document.getElementById('js-textarea').innerHTML = document.getElementById('text-block').innerHTML;

    if (event.code == 'KeyE' && event.ctrlKey) {
      event.preventDefault()
      document.getElementById('text-block').style.display = 'none';
      document.getElementById('js-textarea').style.display = 'block'; 
    }


    if (event.code == 'Equal' && event.ctrlKey) {
      event.preventDefault()
      document.getElementById('text-block').innerHTML = document.getElementById('js-textarea').value;
      document.getElementById('text-block').style.display = 'block';
      document.getElementById('js-textarea').style.display = 'none'; 
    }    

  });

