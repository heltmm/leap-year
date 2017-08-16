// back end
function isLeapYear(year){
  if ((year % 4 === 0) && (year %100 !== 0)|| (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
};

//front end
$(document).ready(function(){
  $("#leapForm").submit(function(event){
    event.preventDefault();
    var year = $("#yearInput").val();
    var result = isLeapYear(year);
    $("#result").show();
    $("#year").text(year);
    if (!result){
        $("#not").text("not");
    }else {
      $("#not").text("");
    }

  });
});
