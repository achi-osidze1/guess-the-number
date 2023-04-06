    var enterbtn = document.querySelector('#enterbtn');
    var againbtn = document.querySelector('#againbtn');
    var output = document.querySelector('#outputText');
    var randomNumber = Math.floor(Math.random()*100);

    function checkNumber(){
      var input = document.querySelector('.form-control').value;
      if(input == randomNumber){
        output.innerHTML="Correct"+ ", "+ " It Was "+ randomNumber;
        output.style.color="#4cff8f";
      }
      else if(input>randomNumber && input<100){
        output.innerHTML="Too High";
        output.style.color = "#ffc107"
      }
      else if(input<randomNumber && input>1){
        output.innerHTML="Too Low";
        output.style.color = "#ffc107"
      }
      else if(input<=1){
        output.innerHTML="Higher, It Has To Be Between 1 And 100";
        output.style.color = "#dc3545"
      }
      else if(isNaN(input)){
        output.innerHTML="That's Not A Number!";
      }
      else{
        output.innerHTML="Lower, It Has To Be Between 1 And 100";
        output.style.color = "#dc3545"
      }
    }

    enterbtn.addEventListener('click', checkNumber);
    againbtn.addEventListener('click', function(){
      location.reload();
    })