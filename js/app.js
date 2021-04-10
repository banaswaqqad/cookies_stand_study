"use strict";

let table = document.getElementById("myTable");
let locationArray = ["Seattle", "tokyo", "Dubai", "Paris", "Lima", "Total"];

function header(array) {
  let workinHours = array;
  let th = document.createElement("tr");
  table.appendChild(th);
  for (let i = 0; i < workinHours.length; i++) {
    th.innerHTML += "<th>" + workinHours[i] + "   " + "</th>";
  }
}

header([
  "      ",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "daily location total",
]);

function Location(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.result = [];
  this.sum = 0;
  this.hourlyTotal=[];
}

Location.prototype.numCustomer = function (params) {
  let customers = Math.floor(Math.random() * (this.max - this.min) + this.min);
  return customers;
};

Location.prototype.numCookies = function name(params) {
  return Math.floor(this.avg * this.numCustomer());
};

Location.prototype.render = function (params) {
  let cityR = document.createElement("tr");
  cityR.innerHTML = `<td>` + this.name + `</td>`;
  table.appendChild(cityR);
  for (let x = 0; x < 14; x++) {
    this.result.push(this.numCookies());
    this.sum = this.sum + this.result[x];
    cityR.innerHTML += "<td>" + this.result[x] + "</td>";
  }
  cityR.innerHTML += "<td>" + this.sum + "</td>";
};



Location.prototype.footer=function () {
    let tr=document.createElement('tr');
 for (let i = 0; i < 14; i++) {
  this.hourlyTotal.push(this.numCookies )
     
 }


}

let location1 = new Location("Dubai", 23, 65, 6.3);

let location2 = new Location("seattle", 23, 65, 6.3);
let location3 = new Location("lima", 12, 55, 4);
let location4 = new Location("tokyo", 20, 80, 1);
let location5 = new Location("egy", 50,60, 2);
let location6 = new Location("amman", 60, 65, 5);

location1.render();
location2.render();
location3.render();
location4.render();
location5.render();
location6.render();
