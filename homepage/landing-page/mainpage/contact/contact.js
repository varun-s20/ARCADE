setTimeout(function() {
    var items = document.querySelectorAll('.fade');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add('fade-in');
    }
  }, 1500);

  function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sender@mail.com",
        Password : "password",
        To : document.getElementById("email").value,
        From : 'sender@mail.com',
        Subject : "Feedback",
        Body : "Thank you for your valuable feedback. We deeply appreciate your support as it plays a vital role in our continuous improvement efforts. Rest assured, we are unwavering in our commitment to providing you with the utmost excellence and ensuring that your experience is nothing short of exceptional."
    }).then(
      message => alert(message)
    );
  }

  let arr=[];
    document.getElementById("submit").addEventListener('click',(e)=>{
    e.preventDefault();
    let Name= document.getElementById("name").value;
    let Email= document.getElementById("email").value;
    let Phone= document.getElementById("phoneno").value;
    let Feedback = document.getElementById("message").value;
    let data={
        name: Name,
        email: Email,
        phoneno: Phone,
        feedback: Feedback
    }
    fetch("http://localhost:5000/devjams.feedbackform",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
});

document.getElementById("submit").addEventListener('click',()=>{
    document.getElementById("myForm").reset();
});
