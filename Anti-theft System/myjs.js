m = 0;
n = 0;
g = 0;
h = 0;
f = 0;
var y;
var z;
class Car {
  constructor(name, id, stolen) {
    this.name = name;
    this.id = id;
    this.stolen = stolen;
  }
}
const carad = [];
const Cars = [];
Cars.push(new Car("Mohit", "xxx", "NO"));
Cars.push(new Car("Abhilash", "yyy", "NO"));
Cars.push(new Car("Rahul", "zzz", "NO"));
Cars.push(new Car("Shubham", "kkk", "YES"));
carad.push("car1.png");
carad.push("car2.png");
carad.push("car3.png");
carad.push("bike4.png");
carad.push("car4.png");
// console.log(Cars[2]);

function reg() {
  let j = document.getElementById("name").value;
  let k = document.getElementById("U").value;
  let l = document.getElementById("s").value;

  Cars.push(new Car(j, k, l));
  console.log(Cars.length);
  document.getElementById("head").innerText="Complaint Recorded";
  setTimeout(closeForm,2000);
  
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function chase() {
  document.getElementById("pol").style.visibility = "visible";
  z = setInterval(ch, 25);
  function ch() {
    if (n >= 1150) {
      n = 0;
      clearInterval(z);
      setTimeout(invisible, 4000);
    } else {
      n += 10;
      var x = document.getElementById("pol");
      x.style.marginLeft = n + "px";
    }
  }
}
function invisible() {
  document.getElementById("pol").style.visibility = "hidden";
}
function invisible2() {
  document.getElementById("img").style.visibility = "hidden";
  var z = document.getElementById("det");
  z.innerText = "";
  start();
}

function start() {
  if (g < Cars.length) {
    document.getElementById("img").src = carad[f % 5];
    f++;

    document.getElementById("img").style.visibility = "visible";
    y = setInterval(run, 100);

    function run() {
      if (m == 1250) {
        clearInterval(y);
        m = 0;
        if (Cars[g].stolen == "YES" || Cars[g].stolen == "yes") {
          Cars[g].stolen="NO";
          console.log(Cars[g].stolen);
          g++;
          setTimeout(invisible2, 5000);
        } else {
          g++;
          start();
        }
      } else {
        m += 10;
        var x = document.getElementById("img");
        x.style.marginLeft = m + "px";
        if (m == 1050) {
          if (Cars[g].stolen == "YES" || Cars[g].stolen == "yes") {
            var z = document.getElementById("det");
            z.innerText =
              "Stolen Car ! Please catch\n " +
              Cars[g].name +
              " sir your car Found";
            chase();
          } else {
            var z = document.getElementById("det");
            z.innerText = "";
          }
        }
      }
    }
  }
}
function stop() {
  clearInterval(y);
}
