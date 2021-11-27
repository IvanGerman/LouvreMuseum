// inputs, spans, h5  for number of tickets
const bs18Input = document.getElementById('bs18-input');
const sen65Input = document.getElementById('sen65-input');
const bs18Input2 = document.getElementById('bs18-input2');
const sen65Input2 = document.getElementById('sen65-input2');
const bs18Span = document.getElementById('bs18-span');
const sen65Span = document.getElementById('sen65-span');
const bs18H5 = document.getElementById('bs18-h5');
const sen65H5 = document.getElementById('sen65-h5');
const bs18AmountSpan = document.getElementById('bs18-amount-span');
const sen65AmountSpan = document.getElementById('sen65-amount-span');
const totalAmountSpan = document.getElementById('total-span');
const bs18H5left = document.getElementById('bs18-h5-left');
const sen65H5left = document.getElementById('sen65-h5-left');


const radioButtons = document.querySelectorAll('.radio-btn'); 
const ticketFormSelect = document.querySelector('.ticket-form-select'); 
const totalSumParagraph = document.getElementById('total-sum-p');

const selectedTicketTypeDiv = document.getElementById('selected-type-div');



function get_bs18Input_value() {
  let data = +bs18Input.value;
  
  localStorage.setItem('bs18Input_value', data);

  bs18Input2.value = data;
  bs18Span.innerHTML = data; 
  bs18H5.childNodes[2].nodeValue = `Basic (${get_radioButton_value()} €)`;
  bs18AmountSpan.innerHTML = get_radioButton_value() * data;
  totalAmountSpan.innerHTML = get_radioButton_value() * data + get_radioButton_value() / 2 * +sen65Input.value;
  
  return data;
};

function get_sen65Input_value() {
  let data = +sen65Input.value;
  
  localStorage.setItem('sen65Input_value', data);

  sen65Input2.value = data;
  sen65Span.innerHTML = data;
  sen65H5.childNodes[2].nodeValue = `Senior (${get_radioButton_value() / 2} €)`;
  sen65AmountSpan.innerHTML = get_radioButton_value() / 2 * data;
  totalAmountSpan.innerHTML = get_radioButton_value() / 2 * data + get_radioButton_value() * +bs18Input.value;

  return data;
};


function get_radioButton_value() {
  let data;
  let data2;
  for (let i = 0; i < radioButtons.length; i++) {
    
    if (radioButtons[i].checked) {
      data = radioButtons[i].value;
      localStorage.setItem('idOfCheckedRadioBtn', radioButtons[i].id);

      data2 = radioButtons[i].nextElementSibling.innerHTML;
      selectedTicketTypeDiv.innerHTML = data2;
      break;
    };
    
  };
  
  bs18H5left.innerHTML = `Basic 18+ (${data} €)`;
  sen65H5left.innerHTML = `Basic 18+ (${data / 2} €)`
  return data;
};

function get_ticketFormSelect_value() {
  let data = ticketFormSelect.value;
  console.log('ticketFormSelect = ', data);
  return data;
};


function calcSumForTickets() {
  let sum = get_radioButton_value() * get_bs18Input_value() + ( get_radioButton_value() / 2 ) * get_sen65Input_value();
  if ( Number.isNaN(sum) ) { alert('Please, choose your Ticket Type!'); sum = 0 };
  
  localStorage.setItem('totalSum_value', sum);
  totalSumParagraph.innerHTML=`Total €${sum}`;
};


// date, time selection--------------------------------------------

const dateInputBlock = document.getElementById('input-date');
const selectedDateDiv = document.getElementById('selected-date-div');

const nowDate = new Date();
 
dateInputBlock.setAttribute("min", nowDate.toISOString().split('T')[0]);

function get_dateInput_value() {
  let data = dateInputBlock.value;
  console.log('dateInput = ', data);

  let splittedData = data.split('-'); 
  let day = +splittedData[2]; 
  let month = +splittedData[1]; 
  let year = +splittedData[0]; 

  if (month < 3) {
    month+=12;
    year-=1;
  };
  let result = Math.ceil((day + 13*(month-2)/5+year+year/4-year/100-year/400)%7);
  let weekdayName = new Array ('Wednesday' ,'Thursday' ,'Friday' ,'Saturday','Sunday', 'Monday' ,'Tuesday');
  let weekDay = weekdayName[result - 1];
  
  let monthsArray = new Array ('January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August','September' ,'October' ,'November' ,'December');
  let monthName = monthsArray[month - 1];
  selectedDateDiv.innerHTML = `${weekDay}, ${monthName} ${day}`;
  return data;
};


const timeInputBlock = document.getElementById('time-date');
const selectedTimeDiv = document.getElementById('selected-time-div');

function get_timeInput_value() {
  let data = timeInputBlock.value;
  

  let splittedData = data.split(':');
   
  let hour;
  if ( splittedData[0][0] == 0 ) {
    hour = +splittedData[0][1];
  } else {
    hour = splittedData[0]
  }; 
  if ( hour < 9 | hour > 18 ) {return};

  let minutes = splittedData[1]; console.log('minutes =', minutes);

  if ( !(minutes == '00' | minutes == '30') ) {return};

  selectedTimeDiv.innerHTML = data;
  return data;
};



