var display_number = "";
var operate_with = 0;
var curr_number = 0;
var curr_oprations = "";
var operation = false;
var answer = 0;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	
var math_it_up = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
	'*': function (x, y) { return x * y; },
    '/': function (x, y) { return x / y; }
};

//console.log(math_it_up['/'](1, 2));

$(".numbers").click(function(){
	var id = $(this).attr('id'); 
	if(display_number.length <= 15){
		display_number += Number(id[id.length - 1]);
	}
	if(operation){
		operate_with = Number(display_number);//Number(id[id.length - 1]);
	} else {
	  curr_number = Number(display_number);//Number(id[id.length - 1]);	
	}
	console.log(display_number);
	$(".calculator_input").val(numberWithCommas(display_number));
});

var old_id = "";
$(".oprations").click(function(){
    operation = true;
	display_number = "";
	var id = $(this).attr('id');
	//if(old_id == id){
		$(this).toggleClass("clicked");
		$(old_id).toggleClass("clicked");
	//}
	old_id = this;
    curr_oprations = id[id.length - 1];
});

$(".commands").click(function(){
	var id = $(this).attr('id');
	if(id == "symbol_="){
		operation = true;
	    compute(curr_oprations);
		curr_number = answer;
	    display_number = "";
	} else {
		//Clear everything//
		display_number = "";
        origonal_number = 0;
        curr_number = 0;
        operation = false;
        answer = 0;
		$(".calculator_input").val("");
		$(old_id).toggleClass("clicked");
		old_id = "";
	}
});

function compute(symbol){
	if(symbol == "+"){
		answer = curr_number + operate_with;
		$(".calculator_input").val(numberWithCommas(answer));
	} else if(symbol == "-"){
		answer = curr_number - operate_with;
		$(".calculator_input").val(numberWithCommas(answer));
	} else if(symbol == "*"){
		answer = curr_number * operate_with;
		$(".calculator_input").val(numberWithCommas(answer));
	} else if(symbol == "/"){
		answer = curr_number / operate_with;
		$(".calculator_input").val(numberWithCommas(answer));
	} else {
		return false;
	}
}


window.setInterval(function(){
	console.log("Curr:" + curr_number);
	console.log("last: " + origonal_number);
}, 1000);