var carRental = {
    businessName: "Geromy's Rentals",
    economyCars: 25,
    economyRented: 0,
    economyPrice: "35 per day",
    midsizeCars: 20,
    midsizeRented: 0,
    midsizePrice: "50 per day",
    // models: [{
    //         name: "Soul",
    //         type: "Economy",
    //         quantity: 30,
    //         rented: 1,
    //         price: 35
    //     },
    //     {
    //         name: "Civic",
    //         type: "Economy",
    //         quantity: 30,
    //         rented: 2,
    //         price: 35
    //     },
    //     {
    //         name: "Altima",
    //         type: "Mid-Sized",
    //         quantity: 25,
    //         rented: 2,
    //         price: 50
    //     },
    //     {
    //         name: "Accord",
    //         type: "Mid-Sized",
    //         quantity: 20,
    //         rented: 4,
    //         price: 55
    //     }
    // ],
        economyAvail: function(){
            return this.economyCars - this.economyRented;
        },
        midsizeAvail: function(){
            return this.midsizeCars - this.midsizeRented;
        },
        bookEcon: function (){
            ++this.economyRented;
        },
        bookMid: function (){
            ++this.midsizeRented;
        }
};

var renter = {
    customer: [{
        }
    ]
};

    function update() {
        document.getElementById("econAvail").innerHTML = carRental.economyAvail();
        document.getElementById("midsizeAvail").innerHTML = carRental.midsizeAvail();
    };
    
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
    
    function updateEcon() {
        var updatedEcon = document.getElementById("carSelect").value;
        document.getElementById("econAvail").innerHTML = carRental.economyCars;
        document.getElementById("econPrice").innerHTML = carRental.economyPrice;
    };
    
    function updateMid() {
        var updatedMidsize = document.getElementById("carSelect").value;
        document.getElementById("midsizeAvail").innerHTML = carRental.midsizeCars;
        document.getElementById("midsizePrice").innerHTML = carRental.midsizePrice;
    };
    
    function showNothing() {
        document.getElementById("midsizeAvail").innerHTML = "";
        document.getElementById("midsizePrice").innerHTML = "";
        document.getElementById("econAvail").innerHTML = "";
        document.getElementById("econPrice").innerHTML = ""; 
    };
    
    function update2() {
        if (document.getElementById("carSelect").value === "economy") {
            updateEcon();
        } else if (document.getElementById("carSelect").value === "midsize") {
            updateMid();
        } else {showNothing();
        }
    };
    
    function carRent() {
        if (document.getElementById("fullName").value && document.getElementById("carSelect").value === "economy") {
            document.getElementById("econAvail").innerHTML = carRental.bookEcon();
            document.getElementById("econAvail").innerHTML = carRental.economyAvail();
            renter.customer.push({name:document.getElementById("fullName").value, car:document.getElementById("carSelect").value});
            alert("Your car is booked! Have a great day!");
        } else if (document.getElementById("fullName").value  && document.getElementById("carSelect").value === "midsize") {
            document.getElementById("midsizeAvail").innerHTML = carRental.bookMid();
            document.getElementById("midsizeAvail").innerHTML = carRental.midsizeAvail();
            renter.customer.push({name:document.getElementById("fullName").value, car:document.getElementById("carSelect").value});
            alert("Your car is booked! Have a great day!");
        } else {
            alert("Missing field!!!");
        }
};

document.getElementById('businessName').innerHTML = carRental.businessName;