//Function: Query String Reader
//Similar to PHP's $_GET[] variable.
window.qs=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)";var c=new RegExp(b);var d=c.exec(window.location.href);if(d==null)return"";else return d[1]}
//Usage. If you want to echo out http://domain/?path=name&Src=source

var correct_num = qs('correct');
var wrong_num = qs('wrong');
var question_count = qs('questionCount');
/* Sanity Check Query String Values */
if(correct_num){if(wrong_num){if(question_count){
	/**** Begin writing Results Page ****/
	document.write('<div class="question-pack">');
	document.write('<h1>Congratulations!</h1>');
	document.write('<p>You made it to the end of the quiz and your results were tallied up.</p>');
	document.write('<p>You have answered <span id="your_winning_tally" class="tallyCount">'+correct_num+'</span> question(s) correct.<br />');
	document.write('(<span id="your_losing_tally" class="tallyCount">'+wrong_num+'</span> incorrectly answered.)</p>');
	document.write('<p><a href="index.html">Take the Quiz Again?</a></p>');
	document.write('</div>');		
	/**** End writing Results Page ****/
}else{document.write('Cannot determine results. *missing required parameter: questionCount*');}}else{document.write('Cannot determine results. *missing required parameter: wrong*');}}else{document.write('Cannot determine results. *missing required parameter: correct*');}