var num = 0;

function countUp(){
    num++;
    var p = document.getElementbyId('countUp');
    p.innerHTML = '<img src="https://i.ytimg.com/vi/tnt0CGkgt98/maxresdefault.jpg">';
}

var person = {
  name: "Sheena",
  age: 33,
  runAlert: function(){
    alert("Hi my name is Sheena");
  },
  car: {
    model: "don't have one",
    color: "none",
    engine: {
      model: "don't have one",
      weight: 200,
      weightType: 'metric'
    }
  }
}

alert(person["car"]["engine"]["weight"])
alert(person.car.engine.weight)
