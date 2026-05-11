var a = 10;

// var is function scoped

console.log(a); //Global Scope

function printHello() {
  console.log("Hello TheTestingAcademy!");
  var a = 20; //Local Scope
  console.log(a);

  if (true) {
    var a = 30;
    console.log(a); //30
  }
}

printHello();
