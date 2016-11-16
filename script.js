'use strict';

var dynamicfizzApplication = dynamicfizzApplication || {};

dynamicfizzApplication.numbersModule = (function(){

	var numberIterations = function(start,end,replace){

		var output = function(result){
			var resultsContainer = document.getElementById('results');
			resultsContainer.innerHTML = '<div class="wrapper"><h1>Results</h1><ul>' + result + '</ul></div>';
		}

		var iterationResult = '',
			replacements = replace || [],
			displayValue,
			checkCondition = function(number){

				// set the output as number by default
				var displayValue = number;
				// check the number against each replacement
				for(var condition = 0; condition < replacements.length; condition++){
					// both conditions
					if(number % (replacements[condition].numberToReplace * replacements[condition++].numberToReplace) === 0){
						displayValue = replacements[0].textReplace + replacements[condition].textReplace + ' ('+number+')';
					// one condition
					} else if(number % replacements[condition].numberToReplace === 0){
						displayValue = replacements[condition].textReplace + ' ('+number+')';
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
		
		startIteration: function(start,end,replace){
			
			return numberIterations(start,end,replace);
			
		}
	}

})();