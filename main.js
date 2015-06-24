function verifyEmail() {
  var status = document.getElementById('emailStatus');

  var emailPattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  if (emailPattern.test(subscribeField.value)) {
    status.classList.remove("notApproved");
    status.classList.add("approved");
  } else {
    status.classList.remove("approved");
    status.classList.add("notApproved");
  }
}
var elEmail = document.getElementById('subscribeField')
elEmail.addEventListener('keyup', verifyEmail, false);

function submitMessage (e) {
  e.preventDefault();
  var submitMsg = document.getElementById('message');
  submitMsg.textContent = 'Thank you. We will now sell your email to spammers.';
}
function changeColor () {
  form.classList.add("completed")
}
var submitButton = document.getElementById('submit')
var form = document.getElementById('formsection')
submitButton.addEventListener('click', submitMessage, false);
form.addEventListener('click', changeColor, false)

