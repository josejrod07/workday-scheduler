$(document).ready(function (){

    // saveBtn clicks
    $('.saveBtn').click(function(){

        // nearby values
        var description = $(this).siblings('textarea').val();
        var key = $(this).parent().attr('id');

        // Save text in localStorage
        localStorage.setItem(key, description);
        
        // Notifies that description variable was saved to localStorage by adding class 'show'
        $('.notification').addClass('show');
        
        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    })

    function hourTime(){

    // Current Hour
        var hour = dayjs().hour();

    // For loop over each time block to add 'past' 'present' or 'future' class
    for (var i = 9; i < 18; i++){
        if (i < hour){
            $('#hour-' + i).addClass('past');
            }
        else if (i == hour){
            $('#hour-' + i).addClass('present');
            }
        else {
            $('#hour-' + i).addClass('future');
            }
        }
    }

    // Call to function
    hourTime();

    // Interval to check if time needs to update
    setInterval(hourTime, 10000);

    // For loop over each time block to obtain data in localStorage
    for (var i = 9; i < 18; i++){
        $('#hour-' + i + ' textarea').val(localStorage.getItem('hour-' + i));
    }

    // Displays the current day
   $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });