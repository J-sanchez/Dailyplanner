//load styling and HTML before script
$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));  //Assign saveBtn click listener for user input and time stamp
    
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".text-descript").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    $("#9nth-hour .text-descript").val(localStorage.getItem("9nth-hour"));
    $("#10nth-hour .text-descript").val(localStorage.getItem("10nth-hour"));
    $("#11nth-hour .text-descript").val(localStorage.getItem("11nth-hour"));
    $("#12nth-hour .text-descript").val(localStorage.getItem("12nth-hour"));
    $("#13nth-hour .text-descript").val(localStorage.getItem("13nth-hour"));
    $("#14nth-hour .text-descript").val(localStorage.getItem("14nth-hour"));
    $("#15nth-hour .text-descript").val(localStorage.getItem("15nth-hour"));
    $("#16nth-hour .text-descript").val(localStorage.getItem("16nth-hour"));
    $("#17nth-hour .text-descript").val(localStorage.getItem("17nth-hour"));
    function hoursTracker() {
        //get current hour
        var currentHour = moment().hour();

        // loop over time block
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[0]);
            console.log(blockHour, currentHour)

            //check if moved past time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hoursTracker();
})