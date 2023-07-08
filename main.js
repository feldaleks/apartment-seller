
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

// Register the formatCurrency helper

Handlebars.registerHelper('formatCurrency', function(value, currencyCode) {
    currencyCode = "USD"
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode
    });
    return formatter.format(value);
    });
  
// Render 

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
    const sourceHTML = $("#results-template").html()
    const template = Handlebars.compile(sourceHTML)
    $("#results").append(template({apartments: apartments}))
}

renderApts(apartments) //renders apartments when page loads