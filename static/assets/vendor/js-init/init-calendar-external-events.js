$(document).ready(function() {
  /* initialize the external events
     -----------------------------------------------------------------*/

  $("#external-events .fc-event").each(function() {
    // store data so the calendar knows to render an event upon drop
    $(this).data("event", {
      title: $.trim($(this).text()), // use the element's text as the event title
      stick: true, // maintain when user navigates (see docs on the renderEvent method)
      className: $(this).data("color"),
      description: "make the event draggable using jQuery UI"
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
    });
  });

  /* initialize the calendar
     -----------------------------------------------------------------*/
  function initFullScreenCalendar() {
    $("#calendar-external-events").fullCalendar({
      header: {
        left: "prev",
        center: "title",
        right: "next"
      },
      defaultDate: "2018-03-12",
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: "Day Long Event",
          start: "2018-03-01",
          className:"eventModal"
        },
        {
          title: "Tech Event",
          start: "2018-03-07",
          end: "2018-03-10",
          className: "d-fc-event-primary eventModal",
        },
        {
          title: "Conference",
          start: "2018-03-17",
          end: "2018-03-13",
          className: "d-fc-event-warning eventModal"
        },
        {
          title: "Meeting",
          start: "2018-03-12T10:30:00",
          end: "2018-03-12T12:30:00",
          className:"eventModal"
        },
        {
          title: "Lunch",
          start: "2018-03-12T12:00:00",
          className: "eventModal"
        },
        {
          title: "Meeting",
          start: "2018-03-12T14:30:00",
          className: "eventModal"
        },
        {
          title: "Happy Hour",
          start: "2018-03-12T17:30:00",
          className: "eventModal"
        },
        {
          title: "Dinner",
          start: "2018-03-12T20:00:00",
          className: "eventModal"
        },
        {
          title: "Birthday Party",
          start: "2018-03-13T07:00:00",
          className: "d-fc-event-info eventModal"
        },
        {
          title: "Google Event",
          start: "2018-03-28",
          className: "d-fc-event-success eventModal"
        }
      ],
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($("#drop-remove").is(":checked")) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      }
    });
  }

  //initFullScreenCalendar();


  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var activatedTab = e.target.hash;

    if(activatedTab == '#tab-p-i_3') {
      setTimeout(() => {
        initFullScreenCalendar();
      }, 50);
    }
    if(activatedTab == '#tab-p-i_2') {
        $('.inbox__filters').addClass('active')
    }
    else {
        $('.inbox__filters').removeClass('active')
    }

  })
});
