// on/Off текстового поля по checkbox 
/*function onClickMe() {               
	var CheckCond = document.getElementById("Chk");                
	if (CheckCond.checked) {            
		document.getElementById("fText").style.display = "inline";       
}*/                                                                                                                                                                                                                          
//в поле вводится инфо и от  ображается в текстовом поле                       
	if (document.getElementById("Chk").checked) {        
		document.getElementById("fText").style.display = "inline";    
	} else {  
		document.getElementById("fText").style.display = "none"; 
		document.getElementById("fText").value = ""; 
		document.getElementById("parag").style.display = "none";
	}  
	document.getElementById("fText2").value = document.getElementById("fText").value;
/*	document.getElementById("parag").innerText = document.getElementById("fText").value;*/
	/*alert(document.getElementById("fText").value);*/
} 
              
function funOnChange1() {   
	document.getElementById("parag").innerHTML = document.getElementById("fText").value;
}
     
function onClickMe2() {    
	var CheckCond2 = document.getElementById("Chk2"); 
	if (CheckCond2.checked) { 
		document.getElementById("fText2").style.display = "inline"; 
	} else document.getElementById("fText2").style.display = "none"; 
}    
                     
// radiobutton            
// нам необх. перебрать все эл-ты радиобаттон и определить какой из них выбран
        
function radioFun() {      
	var radioArr = document.getElementsByName("r1");
	for (var i=0; i<radioArr.length; i++) {
		if (radioArr[i].checked) {
			document.getElementById("fText").value = radioArr[i].value;
		}
	}
}

function onClickMe3() {
	var radArray2 = document.getElementsByName("r2");
	for (var i=0; i<radArray2.length; i++) {
		if (radArray2[i].checked) {
			document.getElementById("fText2").value = radArray2[i].value;
		}
	}
}
  
//проверить такой вариант
function CheckedRadio(obj){
	var val;
	for(var i=0; i<obj.length; i++){
		if
