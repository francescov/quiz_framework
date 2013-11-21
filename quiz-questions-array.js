/******
 *
 * 	Customize Question Sets and Responses Below 
 *	Enter the Questions on one line. Enter each response on a separate line below, also include 1 or 0 to set as correct or wrong
 *	
 *	NOTE: Be sure to set the corresponding responses in the array below the questions. If there are 5 questions, set up 5 response rows.
 *
 **/
var questions = [

	['First Question Text',
		['a. ',1],
		['b. ',0],
		['c. ',0],
	],
	['Second Question Text',
		['a. Correct!',1],
		['b. Wrong!',0],
		['c. Wrong!',0],
	],
	['Third Question Text',
		['a. Wrong!',0],
		['b. Correct!',1],
		['c. Wrong!',0],
	],
	['Fourth Question Text',
		['a. Wrong!',0],
		['b. Wrong!',0],
		['c. Correct!',1],
	],
	['Fifth Question Text',
		['a. Correct!',1],
		['b. Wrong!',0],
		['c. Wrong!',0],
	],
];

/*Customize the HTML responses in this array (format is question number (numeric), correct html, incorrect html)*/
var responses = [
	[1,
		'<b>Correct.</b>',
		'<b>Sorry, that is incorrect.</b>',
	],
	[2,
		'<b>Correct.</b>',
		'<b>Sorry, that is incorrect.</b>',
	],
	[3,
		'<b>Correct.</b>',
		'<b>Sorry, that is incorrect.</b>',
	],	
	[4,
		'<b>Correct.</b>',
		'<b>Sorry, that is incorrect.</b>',
	],
	[5,
		'<b>Correct.</b>',
		'<b>Sorry, that is incorrect.</b>',
	],	
];