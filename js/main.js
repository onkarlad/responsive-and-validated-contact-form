// nav hide after clicked on nav-items upto 992px size
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// website url dependency on radio button
function text(x) {
  if (x == 0) {
    document.getElementById("website_input").style.display = "block";
  } else if (x == 1) {
    document.getElementById("website_input").style.display = "none";
  }
}

// 1)first name validation
function myFunc() {
  var nameRegExp = /^[a-zA-Z]+$/;
  var fn = document.getElementById("first_name");
  var a = document.getElementById("first_name").value;
  var namemsg = document.getElementById("nameMessage");
  if (a == "") {
    document.getElementById("nameMessage").innerHTML = "*please fill your name";
    namemsg.style.cssText = "color:red";
    fn.style.border = " 2px solid red";
    return false;
  }

  if (a.length < 3) {
    namemsg.innerHTML = "*name should be greater than 2 characters";
    namemsg.style.cssText = "color:red";
    fn.style.border = " 2px solid red";
    return false;
  }

  if (a.length > 20) {
    namemsg.innerHTML = "*name should be less than 20 characters";
    namemsg.style.cssText = "color:red";
    fn.style.border = " 2px solid red";
    return false;
  }

  if (a.match(nameRegExp)) {
    namemsg.innerHTML = "";
    fn.style.border = " 2px solid green";
  } else {
    namemsg.innerHTML = "*Numbers not allowed";
    namemsg.style.cssText = "color:red";
    fn.style.border = " 2px solid red";
    return false;
  }

  // last name validation
  var ln = document.getElementById("last_name");
  var b = document.getElementById("last_name").value;
  var lastnamemessage = document.getElementById("lastnamemsg");

  if (b == "") {
    lastnamemessage.innerHTML = "*please fill your name";
    lastnamemessage.style.cssText = "color:red";
    ln.style.border = "2px solid red";
    return false;
  }

  if (b.length < 3) {
    lastnamemessage.innerHTML = "*name should be greater than 2 characters";
    lastnamemessage.style.cssText = "color:red";
    ln.style.border = "2px solid red";
    return false;
  }

  if (b.length > 20) {
    lastnamemessage.innerHTML = "*name should be less than 20 characters";
    lastnamemessage.style.cssText = "color:red";
    ln.style.border = "2px solid red";
    return false;
  }

  if (b.match(nameRegExp)) {
    ln.style.border = "2px solid green";
    lastnamemessage.innerHTML = "";
  } else {
    lastnamemessage.innerHTML = "*Numbers not allowed";
    lastnamemessage.style.cssText = "color:red";
    ln.style.border = "2px solid red";
    return false;
  }

  // email validation
  var fe = document.getElementById("email");
  var emailinput = document.getElementById("email").value;
  var emailmessage = document.getElementById("emailmsg");

  if (emailinput == "") {
    emailmessage.innerHTML = "*please fill email";
    emailmessage.style.cssText = "color:red";
    fe.style.border = "2px solid red";
    return false;
  }

  if (emailinput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    fe.style.border = "2px solid green";
    emailmessage.innerHTML = "";
  } else {
    emailmessage.innerHTML = "*enter valid email";
    emailmessage.style.cssText = "color:red";
    fe.style.border = "2px solid red";
    return false;
  }

  // phone number validation
  var fph = document.getElementById("phone");
  var phoneinput = document.getElementById("phone").value;
  var phonemessage = document.getElementById("phonemsg");
  if (phoneinput == "") {
    phonemessage.innerHTML = "*please fill phone no";
    phonemessage.style.cssText = "color:red";
    fph.style.border = "2px solid red";
    return false;
  }

  if (phoneinput.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)) {
    fph.style.border = "2px solid green";
    phonemessage.innerHTML = "";
  } else {
    phonemessage.innerHTML = "*enter valid phone number";
    phonemessage.style.cssText = "color:red";
    fph.style.border = "2px solid red";
    return false;
  }

  // radio button validation
  var rdb = document.forms["myForm"]["inlineRadioOptions"];
  if (rdb[0].checked == false && rdb[1].checked == false) {
    var rdbmessagse = document.getElementById("radiomsg");
    rdbmessagse.innerHTML = "*choose one option";
    rdbmessagse.style.color = "red";
    return false;
  } else if (rdb[0].checked == true) {
    //   website url validation
    var fweb = document.getElementById("website");
    var websiteinput = document.getElementById("website").value;
    var urlmessage = document.getElementById("urlmsg");

    if (websiteinput == "") {
      urlmessage.innerHTML = "*please fill your website url";
      urlmessage.style.color = "red";
      fweb.style.border = "2px solid red";
      return false;
    }

    if (
      websiteinput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      )
    ) {
      fweb.style.border = "2px solid green";
      urlmessage.innerHTML = "";
    } else {
      urlmessage.innerHTML = "*enter valid website url";
      urlmessage.style.color = "red";
      fweb.style.border = "2px solid red";
      return false;
    }
  } else if (rdb[1].checked == true) {
    true;
  } else {
    true;
  }

  return alert("Form Submitted Successfully");
}
