//Изменением ширины и высоты блока по изменяемым значениям бегунка
function fReSizeRange() {
	var toReSizeWidth = document.getElementById("rWidth").value;
	var toReSizeHeight= document.getElementById("rHeight").value;

	document.getElementById("sWText").value = toReSizeWidth;
	document.getElementById("sHText").value = toReSizeHeight;

	fExamChange(toReSizeWidth, toReSizeHeight);
}

//изменение ширины и высоты по вводимым значениям в поле ввода
function fInputData(){
	var toInputWidth = document.getElementById("sWText").value;
	var toInputHeight = document.getElementById("sHText").value;

	document.getElementById("rWidth").value = toInputWidth;
	document.getElementById("rHeight").value = toInputHeight;

	fExamChange(toInputWidth, toInputHeight);
}

// изменение ширины и высоты блока
function fExamChange(toChWidth, toChHeight) {
	document.getElementById("exam").style.width = toChWidth + "px";
	document.getElementById("exam").style.height = toChHeight + "px";
}

//закругление углов блока
function fRange() {
	var range1 = document.getElementById("range1").value;
	var range2 = document.getElementById("range2").value;
	var range3 = document.getElementById("range3").value;
	var range4 = document.getElementById("range4").value;

//1 вариант длинный
	/*	document.getElementById("field1").value = range1;
		document.getElementById("exam").style.borderTopLeftRadius = range1 + "px";

		document.getElementById("field2").value = range2;
		document.getElementById("exam").style.borderTopRightRadius = range2 + "px";

		document.getElementById("field3").value = range3;
		document.getElementById("exam").style.borderBottomRightRadius = range3 + "px";

		document.getElementById("field4").value = range4;
		document.getElementById("exam").style.borderBottomLeftRadius = range4 + "px";
	}*/

//2 вариант короче
	document.getElementById("field1").value = range1;
	document.getElementById("field2").value = range2;
	document.getElementById("field3").value = range3;
	document.getElementById("field4").value = range4;

	document.getElementById("exam").style.borderRadius = range1 + "% " + range2 + "% " + range3 + "% " + range4 + "%";
}
/*

oninput="fInputRadiusData"(){
	Надо сделать ввод чисел в поле для задания радиуса скругления
}*/
