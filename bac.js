$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{
    //ask how many beers have been consumed
    //convert it to number type
    let totalBeers = parseFloat($("#beerConsumed").val())

    //ask how much wine has been consumed
    //convert that to number type
    let totalWine = parseFloat($("#wineConsumed").val())

    //how many shots
    //convert that to number type
    let totalShots = parseFloat($("#shotsConsumed").val())

    //human weight
    //convert that to number type
    let totalWeight = parseFloat($("#weightInPounds").val())

    //time since first drink
    //convert that to number type
    let totalHoursAfter = parseFloat($("#hoursSinceDrink").val())


    //maths

    //settings the values for the drinks * how many were consumed
    let beer = totalBeers * 0.54;

    let wine = totalWine * 0.6;

    let shots = totalShots * 0.6;

    //adding up all the alcohol
    let total = beer + wine + shots;

    //calculating absorption rate and amount in blood
    let absorptionRate = total * 7.5;

    let alcoholInBlood = absorptionRate / totalWeight;

    //determines dilution of alcohol in body
    let alcoholInBody = alcoholInBlood - (0.015 * totalHoursAfter);


    //output
    $("span#alcohol").text(alcoholInBody.toFixed(3));

    $(".output").show();
}