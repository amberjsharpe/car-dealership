var carListings = [
    {make: "Chevy", model: "G10", price: "$10,000", img: "images/Mystery_machine.jpg", manufacturer: "Chevrolet", color: "aqua", mileage: "200,000", engine: "V8"}
];

for (var i = 0; i < carListings.length; i++) {
    const listingDiv = `
        <div class="listing">
        <h2 class="listing__make">Make: ${carListings[i].make}</h3>
        <h2 class="listing__model">Model: ${carListings[i].model}</h3>
        <h3 class="listing__price">Price: ${carListings[i].price}</h3>
        <img class="listing__img" ${carListings[i].img}>
        <h4 class="listing__spec listing__manufacturer">Manufacturer: ${carListings[i].manufacturer}</h4> 
        <h4 class="listing__spec listing__color">Color: ${carListings[i].color}</h4> 
        <h4 class="listing__spec listing__mileage">Mileage: ${carListings[i].mileage}</h4> 
        <h4 class="listing__spec listing__engine-size">Engine size: ${carListings[i].engine}</h4>    
        </div>
    `;
    document.getElementsByClassName("listing__display-area").innerHTML += listingDiv;
}
