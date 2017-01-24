var newTicket;

function Ticket(name, age, time) {
  this.name = name;
  this.age = age;
  this.time = time;
  this.price = 10;
  console.log(this.age);
}

Ticket.prototype.checkDate = function(){
  if (name.releaseDate < x) {
    this.price --;
  }
}

Ticket.prototype.checkAge = function(){
  if(this.age < 15 || this.age > 50){
    console.log(this.age);
    console.log(this.price);
    this.price --;
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
    // console.log(name);
    // console.log(age);
    newTicket = new Ticket(name, age, time);
    // console.log(newTicket);
  })
})
