'use strict';

var startupApplication = startupApplication || {};

startupApplication.numbersModule = (function(){

	var numberIterations = function(start,end,replace){

		var output = function(result){
			document.write('<h1>Results</h1><ul>' + result + '</ul>');
		}

		var iterationResult = '',
			replacements = replace || [],
			displayValue,
			checkCondition = function(number){

				// set the output as number by default
				var displayValue = number;
				// check the number against each replacement
				for(var condition = 0; condition < replacements.length; condition++){
					if(number % replacements[condition].numberModule === 0){
						displayValue = replacements[condition].textReplace + ' ('+number+')';
						break;
					}
				}
				return displayValue;
			};


		for(var i=start; i<= end; i++){
			// check the value and add to the Results
			iterationResult += '<li>' + checkCondition(i) + '</li>';
		
		};

		return output(iterationResult);

	}

	return {
		
		createIteration: function(start,end,replace){
			return numberIterations(start,end,replace);
		}
	}

})();


// TO DO: Check if accomplish more than one condition
