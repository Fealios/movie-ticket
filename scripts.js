

function Ticket(name, age, time) {
  this.name = name;
  this.age = age;
  this.time = time;
  this.price = 10;
}

Ticket.prototype.checkDate = function(date){
  if (name.releaseDate < x) {
    this.price - 1;
  }
}

Ticket.prototype.checkAge = function(age){
  if(this.age < 15 || this.age > 50){
    this.price - 1;
  }
}

// Movie Selector =============================
function Movie(date) {
  this.releaseDate = date;
}

var rogueOne = new Movie();
var imitationGame = new Movie();
var civilWar = new Movie();
// end Movie Selector =========================

$(document).ready(function(){
  $('#enter').submit(function(event){
    event.preventDefault();
    var name = $('#movieName').val();
    var age = parseInt($('#userAge').val());
    var time = $('#userTime').val();
    console.log(name);
    console.log(age);
    var newTicket = new Ticket(name, age, time);
  })
})
