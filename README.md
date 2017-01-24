Intake movie name, age, time into constructor called Ticket


Ticket.price = 10$
Ticket.newMovieCheck = {
  if Movie.releaseDate > 1 week {
    TicketPrice - 1$
  }
}

Ticket.youngOrOld = {
  if (age < 15 || age > 50){
    Ticket.price - 1$
  }
}

Ticket.matine = {
  if Ticket.time < 1400 {
    Ticket.price - 1$
  }
}
