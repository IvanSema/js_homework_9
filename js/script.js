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


  // Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }


console.log();

let table = '', i = 0, first_array = [], second_array = [], third_array = [];

table += '<table id="table" style="margin: 0 auto;"><tr><td onclick="first_arr_func()">A</td><td onclick="second_arr_func()">B</td><td onclick="third_arr_func()">C</td>';
while(i <=10){
  
  first_array.push(getRandomInt(0, 200));
  second_array.push(Math.random().toString(36).substr(2, 3));
  third_array.push(Math.random().toString(36).substr(2, 3));

  table+= `<tr><td>${first_array[i]}</td><td>${second_array[i]}</td><td>${third_array[i]}</td>`
  i++
}

table+= '</table>';
document.write(table);


function compareFunction(a, b){

  if (a > b){
    return 1;
  }else if (a < b){
    return -1;
  }else{
    return 0;
  }
}


function printSorted(){
  let elem = document.getElementById('table');
  elem.parentNode.removeChild(elem);
  table = '', i = 0;
  table += '<table id="table" style="margin: 0 auto;"><tr><td onclick="first_arr_func()">A</td><td onclick="second_arr_func()">B</td><td onclick="third_arr_func()">C</td>';
  while(i <=10){
    table+= `<tr><td>${first_array[i]}</td><td>${second_array[i]}</td><td>${third_array[i]}</td>`
    i++
    }
    table+= '</table>';
    document.write(table);
  }


function first_arr_func(){
  first_array.sort(compareFunction);
  printSorted();
}

function second_arr_func(){
  second_array.sort(compareFunction);
  printSorted();
}

function third_arr_func(){
  third_array.sort(compareFunction);
  printSorted();
}




// 3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.



let point = document.getElementById('pointID');


addEventListener('mousedown', point => {
  x = point.offsetX;
  y = point.offsetY;

  console.log(x, y);
});

addEventListener('mousemove', point => {
  let window = document.getElementById('third-block');
  window.style.width = ( point.offsetY + 'px');
  x+=1
  console.log(x);
})

// point.onmousedown = function(e) { // 1. отследить нажатие

//   // подготовить к перемещению
//   // 2. разместить на том же месте, но в абсолютных координатах
//   point.style.position = 'absolute';
//   moveAt(e);
//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.appendChild(point);


//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//   function moveAt(e) {
//     point.style.left = e.pageX - point.offsetWidth / 2 + 'px';
//     point.style.top = e.pageY - point.offsetHeight / 2 + 'px';
//   }

//   // 3, перемещать по экрану
//   document.onmousemove = function(e) {
//     moveAt(e);
//   }

//   // 4. отследить окончание переноса
//   point.onmouseup = function() {
//     document.onmousemove = null;
//     point.onmouseup = null;
//   }
// }

