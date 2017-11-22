var carRental = {
    businessName: "Geromy's Rentals",
    // original and update v1 //
    // economyCars: 25,
    // economyRented: 0,
    // economyPrice: "35 per day",
    // midsizeCars: 20,
    // midsizeRented: 0,
    // midsizePrice: "50 per day",
    // update v2 //
    models: [{
            name: "Soul",
            type: "Economy",
            available: 12,
            price: "$30.00",
        },
        {
            name: "Civic",
            type: "Economy",
            available: 14,
            price: "$35.00",
        },
        {
            name: "Altima",
            type: "Mid-Sized",
            available: 10,
            price: "$50.00",
        },
        {
            name: "Accord",
            type: "Mid-Sized",
            available: 8,
            price: "$55.00",
        }
    ],
        // original and update v1 //
        // economyAvail: function(){
        //     return this.economyCars - this.economyRented;
        // },
        // midsizeAvail: function(){
        //     return this.midsizeCars - this.midsizeRented;
        // },
        // bookEcon: function (){
        //     ++this.economyRented;
        // },
        // bookMid: function (){
        //     ++this.midsizeRented;
        // }
};

var renter = {
    customer: [{
        }
    ]
};

document.getElementById("carChoice").onchange = function() {
    var n = document.getElementById("carChoice").selectedIndex;
    document.getElementById("carPrice").innerHTML = carRental.models[n].price;
    document.getElementById("carAvail").innerHTML = carRental.models[n].available;
}

for (var i = 0; i <carRental.models.length; i++) {
    var carDrp = document.createElement("OPTION");
    carDrp.setAttribute("name", "carType");
    carDrp.setAttribute("id", "car" + i);
    carDrp.innerHTML = carRental.models[i].name;
    document.getElementById("carChoice").appendChild(carDrp);
}

document.getElementById("rentCar").onclick = function() {
    var rental = document.getElementById("carChoice").selectedIndex;
    var custName = document.getElementById("fullName").value;
    if (document.getElementById("carChoice").selectedIndex != 0 && custName != "" && carRental.models[rental].available > 0) {
        renter.customer.push({
            name:document.getElementById("fullName").value, car:document.getElementById("carChoice").value});
        alert("Your car reservation has been booked!")
    } else {
        alert("Field Missing!");
        };
};

document.getElementById('businessName').innerHTML = carRental.businessName;

// from original assignment
// function update() {
//     document.getElementById("econAvail").innerHTML = carRental.economyAvail();
//     document.getElementById("midsizeAvail").innerHTML = carRental.midsizeAvail()
//     document.getElementById("midsizePrice").innerHTML = ""
//     document.getElementById("econPrice").innerHTML = "";
// };
// function economyClass() {
//   if (carRental.economyAvail()>0){
//         document.getElementById("econAvail").innerHTML = carRental.bookEcon();
//         document.getElementById("econAvail").innerHTML = carRental.economyAvail();
//   } else alert ("Sorry, we are out of this class of vehicle.");
// };
// function midsizeClass() {
//   if (carRental.midsizeAvail()>0){
//         document.getElementById("midsizeAvail").innerHTML = carRental.bookMid();
//         document.getElementById("midsizeAvail").innerHTML = carRental.midsizeAvail();
//   } else alert ("Sorry, we are out of this class of vehicle.");
// };
    
// from update v1 //    
// function updateEcon() {
//     var updateEcon = document.getElementById("carSelect").value;
//     document.getElementById("econAvail").innerHTML = carRental.economyCars;
//     document.getElementById("econPrice").innerHTML = carRental.economyPrice;
//     document.getElementById("midsizeAvail").innerHTML = "";
//     document.getElementById("midsizePrice").innerHTML = "";
// };
// function updateMid() {
//     var updateMidsize = document.getElementById("carSelect").value;
//     document.getElementById("midsizeAvail").innerHTML = carRental.midsizeCars;
//     document.getElementById("midsizePrice").innerHTML = carRental.midsizePrice;
//     document.getElementById("econAvail").innerHTML = "";
//     document.getElementById("econPrice").innerHTML = "";
// };
// function showNothing() {
//     document.getElementById("midsizeAvail").innerHTML = "";
//     document.getElementById("midsizePrice").innerHTML = "";
//     document.getElementById("econAvail").innerHTML = "";
//     document.getElementById("econPrice").innerHTML = ""; 
//     document.getElementById("carAvail").innerHTML = "";
//     document.getElementById("carPrice").innerHTML = "";
// };
// function update2() {
//     if (document.getElementById("carSelect").value === "economy") {
//         // updateEcon();
//     } else if (document.getElementById("carSelect").value === "midsize") {
//         // updateMid();
//     } else {
//         showNothing();
//     }
// };
// function carRent() {
//     if (document.getElementById("fullName").value && document.getElementById("carSelect").value === "economy") {
//         document.getElementById("carAvail").innerHTML = carRental.bookEcon();
//         document.getElementById("carAvail").innerHTML = carRental.economyAvail();
//         renter.customer.push({name:document.getElementById("fullName").value, car:document.getElementById("carSelect").value});
//         alert("Your car is booked! Have a great day!");
//     } else if (document.getElementById("fullName").value  && document.getElementById("carSelect").value === "midsize") {
//         document.getElementById("carAvail").innerHTML = carRental.bookMid();
//         document.getElementById("carAvail").innerHTML = carRental.midsizeAvail();
//         renter.customer.push({name:document.getElementById("fullName").value, car:document.getElementById("carSelect").value});
//         alert("Your car is booked! Have a great day!");
//     } else {
//         alert("Missing field!!!");
//     }
// };
// document.getElementById("rentCar").onclick = function() {
//     carRent();
// }