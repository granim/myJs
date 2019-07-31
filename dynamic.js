
{
    function User() {
      this.active = false;
      sayHello: function f() {
          return this.name + " says hi";
      }
    }

    User.prototype.sayHello = function () {
      return this.name + " says Hi!"
    }

    function Student(name, major){
      this.name = name;
      this.major = major;
    }

    Student.prototype = new User();

    function Teacher(name, teaching){
      this.name = name;
      this.teaching = teaching;
    }

    Teacher.prototype = new User();
    //You can override the parent prototype method
    Teacher.prototype.sayHello = function(){
          return this.name + " Says I have been teaching for " + "Years";
    }

    let student = new Student("Joe", "English");
    let teacher = new Teacher("Sal", ["Math", "Science"]);
  //instance of operator checking to see if object is of type type
    console.log(teacher instanceof Teacher);
    console.log(teacher instanceof User);

    //static check
  function checkUserEquality(user) {
    if(user instanceof User) {
      return true;
    }
    return false;
  }
    //Generic check
    function checkObjectEquality(ob1, ob2){
      if (ob1 instanceof ob2) {
        return 5;
      }
      return -1;
    }
  console.log(checkObjectEquality(teacher,Teacher));



{
  let myButton = document.getElementById("button");
  myButton.style.backgroundColor = "#085FF7";
  myButton.style.color = "white";

//change the color of button depending on the existing color
  /* myButton.onclick = function () {
      if (myButton.style.backgroundColor === "rgb(19, 65, 52)") {
        myButton.style.backgroundColor = "#085FF7";
      } else {
        myButton.style.backgroundColor = "#134134";
      }
    };*/

  //randomly change the color of the button
    myButton.onclick = function () {
    if(myButton.style.backgroundColor ) {
      let number = [];
      for (let i = 0; i < 6; i++) {
        let num = Math.floor((Math.random() * 9) + 1);
        number.push(num);
      }
      let numberTohold = number.join("");
      myButton.style.backgroundColor = "#" + numberTohold;
    } else {
      myButton.style.backgroundColor = "#134134";
    }
  };
}

{
  let myButton1 = document.getElementById("button1");
  myButton1.style.backgroundColor = "#085FF7";
  myButton1.style.color = "white";

  let first_col = document.getElementById("first_col")
  myButton1.onclick = function () {

  }

}

{//get elements by tag name
let list = document.getElementsByTagName("li");
let ourlist = list[0];
  ourlist.onmouseenter = function () {
    document.getElementById("li1").innerText = "Mouse Over";
  };
  ourlist.onmouseleave = function () {
    document.getElementById("li1").innerText = "Home";
  };
}

{  //add node items to list
 let button = document.getElementById("clickME");

 button.onclick = function () {
   //create new node
   let newNode = document.createElement("li");
   let fistNode = document.getElementById("li1");
   newNode.appendChild(document.createTextNode("New"));
   let list = document.getElementById("menuItems");
   list.insertBefore(newNode, fistNode);
 }

 //remove the 1st child of the ul menu
   let button2 = document.getElementById("clickME2");
   button2.onclick = function () {
   let firstNode = document.getElementById("menuItems").childNodes[0];
   let list = document.getElementById("menuItems");
   list.removeChild(firstNode);
 }
}

{
  //attach a value to a function to remember all computaions of that function
  //create a key value pair
  pow.calculated = {};
  function pow(x,y) {
    let stringVersion = x + "^" + y;
    console.log("String version: " + stringVersion);
    //check for values
    if(stringVersion in pow.calculated) {
      console.log("Found")
      return pow.calculated[stringVersion];
    }
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    pow.calculated[stringVersion] = total;
   // pow.calculated.push(total);
  /*  if(pow.calculated.length >= 20){
      pow.pop();
    }*/
    console.log(pow.calculated);
    return total;
  }
  pow(3,3);
  pow(3,3);
}


{ //default and rest params
  //there is no real overloading of functions in JS
  // use default params for instance y = 2 best probably
  function pow2(x, y) {
    //or set the param if it comes in null
    // if(y === undefined) {y = 2}
     //or ternary
    y = typeof y === "undefined" ? 2 : y;
    let total = 1;
    for (let i = 0; i < y; i++){
      total *= x;
    }
    return total;
  }
    //Too many params passed in?
  function pow3(x, y, ...extra) {
    y = typeof y === "undefined" ? 2 : y;
    let total = 1;
    for (let i = 0; i < y; i++){
      total *= x;
    }
    return total;
  }

  //function that finds the largest number
 function largest(x, ...extra) {
    //implicit params
     console.log(this);
     console.log(arguments);
     console.log(extra);
     let largest = x;
     for(let i = 0; i < extra.length; i++) {
        if(extra[i] > largest) {
            largest = extra[i]
        }
     }
     return largest;
 }

 console.log(largest(1,2,3,4,5,6,7,8,9,3454,23234234));

}


