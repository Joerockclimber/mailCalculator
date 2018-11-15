var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getRate', function(request, response){
    getRate(request,response);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

function getRate(request, response){
    var requestUrl = url.parse(request.url, true)

    console.log("Query parameters: " + JSON.stringify(requestUrl.query))

    var wieght = Number(requestUrl.query.weight);
    var type = requestUrl.query.type;

    //if((type == "Letters (Stamped)") && (weight > 3.5)){
      //  response.write("<p> cannot weigh more than 3.5oz!</p>")
    //} 
    compute(response,wieght,type);
}


function compute(response, weight, type){
    var cost = 0;
    if(type == "Letters (Stamped)"){
        if(weight <= 1){cost = .5;}
        else if(weight <= 2){cost = .71;}
        else if(weight <= 3){cost = .92;}
        else if(weight <= 3.5){cost = 1.13;}
        else if(weight <= 4){cost = 1 + (.21 * 3);}
        else if(weight <= 5){cost = 1 + (.21 * 4);}
        else if(weight <= 6){cost = 1 + (.21 * 5);}
        else if(weight <= 7){cost = 1 + (.21 * 6);}
        else if(weight <= 8){cost = 1 + (.21 * 7);}
        else if(weight <= 9){cost = 1 + (.21 * 8);}
        else if(weight <= 10){cost = 1 + (.21 * 9);}
        else if(weight <= 11){cost = 1 + (.21 * 10);}
        else if(weight <= 12){cost = 1 + (.21 * 11);}
        else if(weight <= 9){cost = 1 + (.21 * 12);}
        else if(weight <= 9){cost = 1 + (.21 * 13);} 

    }
    if(type == "Letters (Metered)"){
        if(type == "Letters (Stamped)"){
            if(weight <= 1){cost = .47;}
            else if(weight <= 2){cost = .68;}
            else if(weight <= 3){cost = .89;}
            else if(weight <= 3.5){cost = 1.10;}
            else if(weight <= 4){cost = 1 + (.21 * 3);}
            else if(weight <= 5){cost = 1 + (.21 * 4);}
            else if(weight <= 6){cost = 1 + (.21 * 5);}
            else if(weight <= 7){cost = 1 + (.21 * 6);}
            else if(weight <= 8){cost = 1 + (.21 * 7);}
            else if(weight <= 9){cost = 1 + (.21 * 8);}
            else if(weight <= 10){cost = 1 + (.21 * 9);}
            else if(weight <= 11){cost = 1 + (.21 * 10);}
            else if(weight <= 12){cost = 1 + (.21 * 11);}
            else if(weight <= 9){cost = 1 + (.21 * 12);}
            else if(weight <= 9){cost = 1 + (.21 * 13);}
        }

        }
        if(type == "Large Envelopes (Flats)"){
            if(weight <= 1){cost = 1;}
            else if(weight <= 2){cost = 1 + .21;}
            else if(weight <= 3) {cost = 1 + (.21 * 2);}
            else if(weight <= 4){cost = 1 + (.21 * 3);}
            else if(weight <= 5){cost = 1 + (.21 * 4);}
            else if(weight <= 6){cost = 1 + (.21 * 5);}
            else if(weight <= 7){cost = 1 + (.21 * 6);}
            else if(weight <= 8){cost = 1 + (.21 * 7);}
            else if(weight <= 9){cost = 1 + (.21 * 8);}
            else if(weight <= 10){cost = 1 + (.21 * 9);}
            else if(weight <= 11){cost = 1 + (.21 * 10);}
            else if(weight <= 12){cost = 1 + (.21 * 11);}
            else if(weight <= 9){cost = 1 + (.21 * 12);}
            else if(weight <= 9){cost = 1 + (.21 * 13);}       
        }

        if(type == "First-Class Package Service—Retail"){

            if(weight <= 4){cost = 3.50;}
            else if(weight <= 8){cost = 3.75}
            else if(weight <= 9){cost = 4.10}
            else if(weight <= 10){cost = 4.45}
            else if(weight <= 11){cost = 4.80}
            else if(weight <= 12){cost = 5.15}
            else if(weight <= 13){cost = 5.50}


        }
        var realCost = cost.toFixed(2);

        var params = {weight: weight, cost: realCost, type: type};
        response.render('pages/result', params);
    }
