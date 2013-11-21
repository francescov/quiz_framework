for (x=0; x<questions.length; x++){
	document.write('<div class="question-pack" id="question_pack_'+(x)+'">');
	document.write('<div class="question"><strong>'+questions[x][0]+'</strong></div>');
	document.write('<div class="response-box"></div>');
	document.write('<div class="answers">');
	// cycle through answers
	myselection = '';
	for (y=1; y<questions[x].length; y++){
		document.write('<div class="answer-line">');
		document.write('<table border="0" cellpadding="5" cellspacing="0"><tr>');
		if (questions[x][y][1]) {
			/* if array says answer is correct */
			document.write('<td valign="top" align="right"><input id="q'+(x+1)+'a'+y+'" type="radio" class="answer-button" name="q'+(x+1)+'" onclick="$(\'.move-to-next-button\').hide();$(\'.move-to-next-correct-button\').show();$(\'.move-to-next-wrong-button\').hide();" /></td>');
			document.write('<td valign="top" align="left"><label class="answer-label" for="q'+(x+1)+'a'+y+'">'+questions[x][y][0]+'</label></td>');
		} else {
			/* if array says answer is wrong */
			document.write('<td valign="top" align="right"><input id="q'+(x+1)+'a'+y+'"  type="radio" class="answer-button" name="q'+(x+1)+'" onclick="$(\'.move-to-next-button\').hide();$(\'.move-to-next-correct-button\').hide();$(\'.move-to-next-wrong-button\').show();" /></td>');
			document.write('<td valign="top" align="left"><label class="answer-label" for="q'+(x+1)+'a'+y+'">'+questions[x][y][0]+'</label></td>');
		}
		document.write('</tr></table>');
		document.write('</div>');
	}
	
	/* Lets prep the move next buttons in each of their states */
	document.write('<input class="move-to-next-button" type="button" value="Continue &raquo;" disabled="disabled" style="margin-bottom: 10px;" />');	
	document.write('<input class="move-to-next-correct-button" type="button" value="Continue &raquo;" onclick="moveNext('+(x+1)+','+questions.length+',\'correct\');" style="margin-bottom: 10px;" />');
	document.write('<input class="move-to-next-wrong-button" type="button" value="Continue &raquo;" onclick="moveNext('+(x+1)+','+questions.length+',\'wrong\');" style="margin-bottom: 10px;" />');
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');		
}

$(document).ready(function() {
	//Reset the questions to show the first question, hiding the rest on document ready.
	$('.question-pack').hide();
	$('#question_pack_0').show();
	$('.response-box').hide();

	//Initialize the global counters on document ready
	totalCorrect = 0;
	totalWrong = 0;
	myselection = '';
});

function moveNext(value,maxquestions,myselection){
	$('.response-box').show();
	
	$('.move-to-next-button,.move-to-next-correct-button,.move-to-next-wrong-button').hide();
	$('.answer-line').hide(); /* hide the answers while response is up */

	if (myselection == "correct") {
		/* increase the total correct counter */
		$('.move-to-next-button,.move-to-next-correct-button,.move-to-next-wrong-button').hide();
		$('.response-box').html(responses[value-1][1] + '<div class="button-continue"><a href="javascript:;" onclick="nextQuestion(\''+value+'\',\''+maxquestions+'\');">Next &raquo;</a></div>');
		totalCorrect++;	

	} else {
		/* otherwise increase the total wrong counter */
		$('.response-box').html(responses[value-1][2] + '<div class="button-continue"><a href="javascript:;" onclick="nextQuestion(\''+value+'\',\''+maxquestions+'\');">Next &raquo;</a></div>');
		$('.move-to-next-button,.move-to-next-correct-button,.move-to-next-wrong-button').hide();
		totalWrong++;	
	}
}

function nextQuestion(value,maxquestions,myselection) {
	$('.response-box').hide();
	$('.move-to-next-button').show();
	$('.answer-line').show();
	/*Move to next question until it reaches the maximum questions in array*/
	if(value<maxquestions){
		$('.question-pack').hide();		
		$('#question_pack_'+value).show();
	}else{
		$('.question-pack').hide();	
		if (totalCorrect || totalWrong) {
			window.location = 'results.html?correct='+totalCorrect+'&wrong='+totalWrong+'&questionCount='+questions.length;
		}
	}
}