$("#subscribeField").keyup(function(){
  var emailPattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  if (emailPattern.test(subscribeField.value)) {
    $("#emailStatus").removeClass("notApproved");
    $("#emailStatus").addClass("approved");
  } else {
    $("#emailStatus").removeClass("approved");
    $("#emailStatus").addClass("notApproved");
  }
});

$("#submit").click(function(event){
  event.preventDefault();
  $("#message").text('Thank you. We will now sell your email to spammers.');
});

$("#formsection").click(function(){
  console.log("invoked");
  $("#formsection").addClass("completed");
});
