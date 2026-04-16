//Write your code here
// Task 2: Declare and Initialize Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Task 3: Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Task 4: Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Task 5: Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Task 6: Update Ticket Price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Task 7: Remove Event Property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Task 8: Add Checked-in Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// Export (VERY IMPORTANT for tests)
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};