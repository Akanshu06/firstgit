const form = document.getElementById('userForm');
console.log(form);
form.addEventListener('submit', function(event) {
  event.preventDefault();
console.log('shah');
  const usernameInput = document.getElementById('username').value;
  const emailInput = document.getElementById('emailId').value;
  const phoneInput = document.getElementById('phoneNbr').value;

  localStorage.setItem('username', usernameInput);
  localStorage.setItem('emailId', emailInput);
  localStorage.setItem('phoneNbr', phoneInput);

  // Logging the values just for verification (can be removed)
  console.log('Username:', usernameInput);
  console.log('Email:', emailInput);
  console.log('Phone:', phoneInput);
});
//module.exports=addEventListener();
