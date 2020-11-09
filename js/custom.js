//===================================
// custom.js 
//===================================
/** 
  *    The Login object captures the username and returns it to the DOM
 **/ 

let btnLogin = document.getElementById("do-login");
let idLogin = document.getElementById("login");
let username = document.getElementById("username");
btnLogin.onclick = function () {
  idLogin.innerHTML = "<h3>Hello, " + username.value + "</h3>";
};

/** 
  * Summary of the Add function: 
  * 
  *    The Add function builds a list for the createElement 
  * 
  * Return Value : Input takes the name and appends a child element to list. 
  * 
  * List Description: 
  * 
  *    This function utilizes the getElementId method to return element objects. 
  * 
 **/ 


// Create "close" button and append it to each list item
let ul = document.getElementsByTagName("li");
let i;
for (i = 0; i < ul.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  ul[i].appendChild(span);
}

// Click on a close button to hide from list
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

function newItem() {
  let li = document.createElement("li");
  let ul = document.getElementById("users");
  let name = document.getElementById("dName").value;
  let breed = document.getElementById("breed").value;
  let link = document.getElementById("link").value;

let n = document.createTextNode(name + " " + breed + " " + link);
  li.appendChild(n);

  if (name === ' ') {
    return false;
  } else {
    document.getElementById("users").appendChild(li);
  }
  document.getElementById("dName").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

