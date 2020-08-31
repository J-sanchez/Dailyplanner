//load styling and HTML before script
$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));  //Assign saveBtn click listener for user input and time stamp
    
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#7nth-hour .description").val(localStorage.getItem("7nth-hour"));
    $("#8nth-hour .description").val(localStorage.getItem("8nth-hour"));
    $("#9nth-hour .description").val(localStorage.getItem("9nth-hour"));
    $("#10nth-hour .description").val(localStorage.getItem("10nth-hour"));
    $("#11nth-hour .description").val(localStorage.getItem("11nth-hour"));
    $("#12nth-hour .description").val(localStorage.getItem("12nth-hour"));
    $("#13nth-hour .description").val(localStorage.getItem("13nth-hour"));
    $("#14nth-hour .description").val(localStorage.getItem("14nth-hour"));
    $("#15nth-hour .description").val(localStorage.getItem("15nth-hour"));
    $("#16nth-hour .description").val(localStorage.getItem("16nth-hour"));
    $("#17nth-hour .description").val(localStorage.getItem("17nth-hour"));