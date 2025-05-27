document.addEventListener ('submit', function(event){
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password)
  {
    alert("Login successful!");

    window.location.href = "My Team.html";
  }
  else
  {
    alert("Please fill in both fields.");
  }
}
);
