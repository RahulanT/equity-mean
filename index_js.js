function subButtonfunc(clicked_id){

    document.getElementById(clicked_id).style.backgroundColor = 'black';
  
    window.alert('You Pressed' + clicked_id)
  
  }
  
  function registerUser(){
  
    window.alert(document.getElementById('letsmakeaform').elements.namedItem("firstName").value);
  
  }
  
  const el = document.getElementByName("male");
  