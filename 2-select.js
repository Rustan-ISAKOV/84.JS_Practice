function fun1() {
	var sel = document.getElementById("mySelect").selectedIndex;
	document.getElementById("lab").style.display = "block";
	document.getElementById("fText").style.display = "block"; 
// 1 вариант
	/*document.getElementById("fText").value = document.getElementById("mySelect").value;*/
     
// 2 вариант    
	var options = document.getElementById("mySelect").options;
	// выводит текст списка 
	document.getElementById("fText").value = options[sel].text;
	// выводит заданное значение 
	document.getElementById("fText").value = options[sel].value; 
 
}    
// вывод данных бегунка в параграф и в поле ввода
function funRange() {
	var range = document.getElementById("range1");
	// document.getElementById("par").innerHTML = range.value;
	// or
	document.getElementById("par").innerHTML = document.getElementById("range1").value;
	document.getElementById("pText").value = document.getElementById("range1").value;

// изменение ширины блока при изменении бегунка
document.getElementById("kvadrat").style.width = document.getElementById("range1").value + "px";

/*// OR в конце Н. добавлять единицы измерения
	var divSize = document.getElementById("kvadrat");
	divSize.style.width = range.value + 'px';*/
}
 
