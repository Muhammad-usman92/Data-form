
function start(){
  
    var name=document.getElementById("name");
    var roll_no=document.getElementById("rollno");
    var suggestion =document.getElementById("Suggestion");
    var checked = false;
  if (document.getElementById('flexCheckIndeterminate').checked) {
     checked = "yes I'm";
  }
  
    var key= firebase.database().ref().push().getKey()
    console.log(key)

    var obj={
        Name:name.value,
        Roll_No:roll_no.value,
        suggestion:suggestion.value,
        you_are_responsible:checked

    }
    
console.log(obj)

firebase.database().ref("/USER DATA").push(obj)
// window.Location='response.html
// location.reload();
name.value='';
roll_no.value='';
suggestion.value='';
// name.value='';
checked=false; 
}
