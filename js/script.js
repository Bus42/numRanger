var output = document.querySelector('#output');

function numRange(start, end, step) {
    for (var index = 0; index < arguments.length; index++) {// Make sure all parameters passed are numbers
        console.log(arguments[index]);
        var place = index === 0 ? "starting" : index === 1 ? "ending" : "step";
        if (isNaN(arguments[index]) === true) arguments[index] = numError(arguments[index], place);// If not, get a number
    }

    var numArray = [], counter = 0;//Store numbers to return and total of iterated numbers

    for (var a = start; a <= end; a += step || 1) {// If no nth value is provided, default to 1
        numArray.push(a);
        counter += a;
    }

    return [numArray, counter];
}

function displayResults(arr, sum) {// Print results to screen with nice colors
    output.innerHTML = '<p>[<span class="blue">' + arr + '</span>] = <span class="red">' + sum + '</span></p>';
}

function addCommas(x) {// Insert a comma before every third digit from the end for nice formatting
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function numError(missingArg, place) {// If parameters provided are not numbers, request a number
    missingArg = Number(prompt("Please enter a valid " + place + " number"));
    return missingArg;
}

var submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    output.innerHTML = "";
    var x = Number(document.getElementById('start').value);
    var y = Number(document.getElementById('end').value);
    var z = Number(document.getElementById('step').value);
    var values = numRange(x, y, z);
    displayResults(values[0].join(', '), addCommas(values[1]));
    document.getElementById('rangeForm').reset();
});
