const date= new Date();
document.getElementById('currentDay').innerHTML=date;


let hours= ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
function scheduleTemplate(hour,color){
  let template= ` <div id="hour-9" class="row time-block ${color}">
  <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`
  return template
}





const pastTime= document.querySelector('row time-block past');
const presentTime= document.querySelector('row time-block present');
const futureTime= document.querySelector('row time-block future');


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function chooseColor(hour){
    let color='past'
    let currentHour= dayjs().format('HH')
    let splitedHour = hour.split(' ')
    let convertHour= (dayjs(`1/1/1 ${splitedHour[0]}:00 ${splitedHour[1]}`).format('HH'))
    if(convertHour> currentHour) {
      color='future'
    }
    
    if(convertHour==currentHour){
      color='present'
    }
    return color 
  }
  function printHours(){
    for (let hour of hours){
      $('.container-fluid').append(scheduleTemplate(hour,chooseColor(hour)))
    }
  }
  printHours()
  // console.log(dayjs('4 PM').isSame(dayjs().format('h A'),'hour'))
  // console.log(dayjs('4 PM'))
});
let storage= document.querySelector('.saveBtn');// let's revisit
console.log(storage);



storage.on('click', function() {
  console.log('Iamhit')
  eventText = $(this).siblings(".input").val();
  // console.log(eventText);
  eventTime = $(this).siblings(".hour").text();
  // console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorChange ();
  renderText ();
  
});

