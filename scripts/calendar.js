document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: '2022-05-01',
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Football match',
          start: '2022-05-12',
        },
        {
          title: 'Trip to France',
          start: '2022-05-07',
          end: '2022-05-10'
        },
        {
          title: 'Group meeting',
          start: '2022-05-13T10:30:00',
          end: '2022-05-13T12:30:00'
        },
        {
          title: 'Repair Bike',
          start: '2022-05-20T12:00:00'
        }
      ],  eventClick: function(info) {
    info.jsEvent.preventDefault(); // don't let the browser navigate

    if (info.event.url) {
       alert(info.event.url);
      //window.open(info.event.url);
    }
  }
    });

    calendar.render();
  });






function clickAlert() {
    const taskdesc = document.getElementById("taskdesc")
    const startdate = document.getElementById("startdate")
    const enddate = document.getElementById("enddate")
    let messages = []
  
    if(taskdesc.value ==="" || taskdesc.value == null) {
      messages.push("Please enter a description")
    }

    if(!startdate.value) {
      messages.push("Please click on the start date box to enter a start date")
    }

    if(!enddate.value) {
      messages.push("Please click on the Due date box to enter a due date")
    }
    
    if(messages.length > 0) {
        for(let i=0; i<messages.length; i++) {
            alert(messages[i])
        }
        e.preventDefault()
    }
  
  
  
    else {
        alert("Your task has been added")
    }
    form.reset();
}

function swapStyleSheet(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
}