let pit = 0;

function addPit() {
  if (pit<=4) {
    pit++;
  let list_pit = document.getElementById("list_pit");
  let liPit = document.createElement("li");
  liPit.setAttribute("class", "animate__animated animate__fadeInDown");

  let textDivPit = document.createTextNode(pit + " Яма");
  let optionTextPlaceholdePit = document.createTextNode("Количество мест");
  let optionTextOnePit = document.createTextNode("Одна строна");
  let optionTextTwoPit = document.createTextNode("Две строны");

  let textPit = document.createElement("div");
  textPit.setAttribute("class", "li_text_seat");
  textPit.appendChild(textDivPit);

  let selectPit = document.createElement("select");
  selectPit.setAttribute("id", "option_pit" + pit);
  selectPit.setAttribute("onchange", "selectDataPit(this)");
  let optionPlaceholderPit = document.createElement("option");
  optionPlaceholderPit.setAttribute("disabled", "");
  optionPlaceholderPit.setAttribute("selected", "");
  optionPlaceholderPit.setAttribute("hidden", "");
  optionPlaceholderPit.appendChild(optionTextPlaceholdePit);
  let optionOneSidePit = document.createElement("option");
  optionOneSidePit.appendChild(optionTextOnePit);
  let optionTwoSidePit = document.createElement("option");
  optionTwoSidePit.appendChild(optionTextTwoPit);
  selectPit.append(optionPlaceholderPit,optionOneSidePit,optionTwoSidePit);

  let inputPit = document.createElement("input");
  inputPit.setAttribute("type", "number");
  inputPit.setAttribute("min", "1");
  inputPit.setAttribute("max", "60");
  inputPit.setAttribute("placeholder", "Кол-во мест");
  inputPit.setAttribute("id", "input_pit" + pit);
  inputPit.setAttribute("onchange", "inputDataPit(this)");

  liPit.append(textPit,selectPit,inputPit);
  list_pit.appendChild(liPit);
  }
  else{
    alert("Больше 5-и ям нельзя");
  }
}

function deletePit() {
  var lu = document.getElementById('list_pit');
  lu.removeChild(lu.lastChild);
  pit--;
  if (pit <= 0) {
    pit = 0;
  }
}

function selectDataPit(item) {
  var id = item.id
  let value = document.getElementById(id).value;
}

function inputDataPit(item) {
  var id = item.id
  if (document.getElementById(id).value <= 0) {
    document.getElementById(id).value = 1;
  } else {
    if (document.getElementById(id).value >= 60) {
      document.getElementById(id).value = 60;
    }
  }
  let value = document.getElementById(id).value;
}

let pump = 0;

function addPump() {
  if (pump<=4) {
    pump++;
  let list_pump = document.getElementById("list_pump");
  let liPump = document.createElement("li");
  liPump.setAttribute("class", "animate__animated animate__fadeInDown");

  let textDivPump = document.createTextNode(pump + " Насос");
  let optionTextPlaceholdePump = document.createTextNode("Выберите мощность насоса");
  let optionTextOnePump = document.createTextNode("800 л/мин - 2,2 кВт");
  let optionTextTwoPump = document.createTextNode("1600 л/мин - 4 кВт");
  let optionTextThreePump = document.createTextNode("2100 л/мин - 5,5 кВт");
  let optionTextFourPump = document.createTextNode("2800 л/мин - 7,5 кВт");
  let optionTextFivePump = document.createTextNode("3300 л/мин - 7,5 кВт");
  let optionTextSixPump = document.createTextNode("4200 л/мин - 11 кВт");
  let optionTextSevenPump = document.createTextNode("6600 л/мин - 15 кВт");

  let textPump = document.createElement("div");
  textPump.setAttribute("class", "li_text_pump");
  textPump.appendChild(textDivPump);
  let selectPump = document.createElement("select");
  selectPump.setAttribute("class", "select_pump");
  selectPump.setAttribute("id", "option_pump" + pump);
  selectPump.setAttribute("onchange", "selectDataPump(this)");
  let optionPlaceholderPump = document.createElement("option");
  optionPlaceholderPump.setAttribute("disabled", "");
  optionPlaceholderPump.setAttribute("selected", "");
  optionPlaceholderPump.setAttribute("hidden", "");
  optionPlaceholderPump.appendChild(optionTextPlaceholdePump);
  let optionOneSidePump = document.createElement("option");
  optionOneSidePump.appendChild(optionTextOnePump);
  let optionTwoSidePump = document.createElement("option");
  optionTwoSidePump.appendChild(optionTextTwoPump);
  let optionThreeSidePump = document.createElement("option");
  optionThreeSidePump.appendChild(optionTextThreePump);
  let optionFourSidePump = document.createElement("option");
  optionFourSidePump.appendChild(optionTextFourPump);
  let optionFiveSidePump = document.createElement("option");
  optionFiveSidePump.appendChild(optionTextFivePump);
  let optionSixSidePump = document.createElement("option");
  optionSixSidePump.appendChild(optionTextSixPump);
  let optionSevenSidePump = document.createElement("option");
  optionSevenSidePump.appendChild(optionTextSevenPump);
  selectPump.append(optionPlaceholderPump,optionOneSidePump,optionTwoSidePump,optionThreeSidePump,optionFourSidePump,optionFiveSidePump,optionSixSidePump,optionSevenSidePump);

  liPump.append(textPump,selectPump);
  list_pump.appendChild(liPump);
  }
  else{
    alert("Больше 5-и насосов нельзя");
  }
}

function deletePump() {
  var lu = document.getElementById('list_pump');
  lu.removeChild(lu.lastChild);
  pump--;
  if (pump <= 0) {
    pump = 0;
  }
}

function selectDataPump(item) {
  var id = item.id
  let value = document.getElementById(id).value;
}

function valuePump() {
  let value = document.getElementById("pump").value;
  if (value == 1) {
    document.getElementById("img_pump").setAttribute("style", "background-image: url(https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg);");
  } else if (value == 2) {
    document.getElementById("img_pump").setAttribute("style", "background-image: url(http://www.rosphoto.com/images/u/articles/1510/7_5.jpg);");
  } else if (value == 3){
    document.getElementById("img_pump").setAttribute("style", "background-image: url(https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg);");
  }
}

function valueWaterHeater() {
  let value = document.getElementById("water_heater").value;
  if (value == 1) {
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg);");
  } else if (value == 2) {
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(http://www.rosphoto.com/images/u/articles/1510/7_5.jpg);");
  } else if (value == 3){
    document.getElementById("img_water_heater").setAttribute("style", "background-image: url(https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg);");
  }
}

function valueCompressor() {
  let value = document.getElementById("compressor").value;
  if (value == 1) {
    document.getElementById("img_compressor").setAttribute("style", "background-image: url(https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg);");
  } else if (value == 2) {
    document.getElementById("img_compressor").setAttribute("style", "background-image: url(http://www.rosphoto.com/images/u/articles/1510/7_5.jpg);");
  }
}

function clearLocalStorage() {
  localStorage.clear();
}

let data = [];

function getData(item) {
  localStorage.setItem(item, item);
}

function inputDataSystem(item) {
  var id = item.id
  if (document.getElementById(id).value <= 0) {
    document.getElementById(id).value = 1;
  } else {
    if (document.getElementById(id).value >= 60) {
      document.getElementById(id).value = 60;
    }
  }
  let valueSystem = document.getElementById(id).value;
  return valueSystem;
}

function addData(){
  data.push(valueSystem);
}

function dataSee() {
  for (i = 0; i < data.length; i++) {
    alert(data[i]);
  }
}


function readData(){
  let list_form = document.getElementById("list_form");
  let liForm = document.createElement("li");
  let textDivForm = document.createTextNode("Доильный зал: "+ data[0]);
  let textForm = document.createElement("div");
  textForm.setAttribute("class", "li_text_form");
  textForm.appendChild(textDivForm);
  liForm.append(textForm);
  list_form.appendChild(liForm);
}