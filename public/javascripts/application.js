window.tickets = [];

printAttendees =  function() {
  $.each(window.attendees, function(index, attendee) {
    $('<div/>').addClass('attendee').addClass('span2').html(attendee).appendTo('#attendes .row');
    window.tickets.push(attendee);
  });
};

printQuestions =  function() {
  $.each(window.questions, function(index, question) {
    $('<div/>').addClass('question').addClass('span2').html(question).appendTo('#questions .row');
    window.tickets.push(question);
  });
};

printBestQuestions =  function() {
  $.each(window.bestQuestions, function(index, question) {
    $('<div/>').addClass('best-question').addClass('span2').html(question).appendTo('#best-questions .row');
    window.tickets.push(question);
  });
};

randomTicket = function() {
  randomIndex = Math.floor(Math.random()*window.tickets.length);
  ticket = window.tickets[randomIndex];
  window.tickets.splice(randomIndex, 1)
  return ticket; 
}

removeTicket = function(event) {
  event.preventDefault();
  ticket = randomTicket();
  ticktObject = $('#questions .row > div:contains("'+ticket+'"), #attendes .row > div:contains("'+ticket+'")');
  if(ticktObject.length > 1)
    ticktObject = $(ticktObject[0]);
  ticktObject.appendTo('#removed');
  updateTicketsCounter();
}

winnerTicket = function(event) {
  event.preventDefault();
  ticket = randomTicket();
  ticktObject = $('#questions .row > div:contains("'+ticket+'"), #attendes .row > div:contains("'+ticket+'")');
  if(ticktObject.length > 1)
    ticktObject = $(ticktObject[0]);
  ticktObject.appendTo('#winners');
  updateTicketsCounter();
}

updateTicketsCounter = function() {
 $('.tickets-counter').html(window.tickets.length);
}


$(function() {
  printAttendees();
  printQuestions();
  printBestQuestions();
  updateTicketsCounter();
  $('#winner-ticket').on('click', winnerTicket);
  $('#remove-ticket').on('click', removeTicket);
});