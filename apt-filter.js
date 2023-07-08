//Only start playing with this file if you're done with all the basics



const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )

    const must = (radio) => radio.filter(rb => rb.checked).length
    let checked = must([immediate[0], parking[0]])

    immediate = !immediate[0].checked
    parking = !parking[0].checked

    if (checked == 2) {
        return relevantApts.filter(a => a.immediate && a.parking);
      } else if (checked == 1) {
        return immediate ? relevantApts.filter(a => (a.parking)) : relevantApts.filter(a => (a.immediate)) ;
      } else if (checked == 0) {
        return relevantApts;
      }
      
    //return immediate ? relevantApts : relevantApts.filter(a => (a.immediate)) 
}