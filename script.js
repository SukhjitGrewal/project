//Event Listener
document.getElementById("rectangle").addEventListener("click", rectangleButton);

function rectangleButton() {
  document.getElementById("div").innerHTML = `
  <h3 class="h3">Surface area:</h3>
  <img
    id="rect-prism"
    src="images/rectangular-prism-surface-area-image-a.png"
    alt="prism"
  />
  <p class="input" class="border">
    The Height: <input id="height" type="number" />
  </p>
  <p class="input" class="border">
    The Length: <input id="length" type="number" />
  </p>
  <p class="input" id="border">
    The Width: <input id="width" type="number" />
  </p>
  <p><button id="calculator">Calculate</button></p>
  <h3 class="h3">The surface area = <span id="surface"></span></h3>

  <h3 class="h3">Volume:</h3>
  <img
    id="rect-prism"
    src="images/rectangular-prism-volume-image-a.png"
    alt="Volume"
  />
  <p id="length" class="input">
    The Length (l): <input id="length2" type="number" />
  </p>
  <p id="width" class="input">
    The Width (w): <input id="width2" type="number" />
  </p>
  <p id="height" class="input">
    The Height (h): <input id="height2" type="number" />
  </p>
  <p><button id="calc-2">Calculate</button></p>
  <h3 class="h3">The Volume =<span id="volume"></span></h3>
 
 
  `;

  document
    .getElementById("calculator")
    .addEventListener("click", calculatorButton);

  function calculatorButton() {
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;
    var height = +document.getElementById("height").value;
    var surfaceArea =
      2 * (length * width) + 2 * (length * height) + 2 * (width * height);
    document.getElementById("surface").innerHTML = `${surfaceArea}`;
  }

  document.getElementById("calc-2").addEventListener("click", calcButton);

  function calcButton() {
    var length = +document.getElementById("length2").value;
    var width = +document.getElementById("width2").value;
    var height = +document.getElementById("height2").value;
    var volume = length * width * height;
    document.getElementById("volume").innerHTML = `${volume}`;

    document.getElementById("clear").addEventListener("click", clearButton);
    function clearButton() {
      document.getElementById("length").value = 0;
      document.getElementById("width").value = 0;
      document.getElementById("height").value = 0;
      document.getElementById("length2").value = 0;
      document.getElementById("width2").value = 0;
      document.getElementById("height2").value = 0;
      document.getElementById("volume").innerHTML = `0`;
      document.getElementById("surface").innerHTML = `0`;
    }
  }
}

//Event Listener
document.getElementById("triangle").addEventListener("click", traingleButton);

function traingleButton() {
  document.getElementById("div").innerHTML = `
  <h3 class="h3">The Surface area</h3>
  <img id="rect-prism" src="images/download (1).png" alt="cone" />
  <p  class="input">Radius: <input id="radius" type="number" /></p>
  <p class="input"> Slant Height: <input id="slant-height" type="number" /></p>
  <p><button id="calc-3">Calculate</button></p>
  <h3 class="h3">The surface area = <span id="surface"></span></h3>
 <h3 class="h3">The Volume:</h3>
  <img id="volumecone" src="images/volumecone.png" alt="volumecone" />
  <p class="input">Radius: <input id="radius2" type="number" /></p>
  <p class="input">Height: <input id="slant-height2" type="number" /></p>
  <p><button id="calc-4">Calculate</button></p>
  <h3 class="h3">The Volume =<span id="volume"></span></h3>
  `;
  document.getElementById("calc-3").addEventListener("click", surfaceCone);
  function surfaceCone() {
    var radius = +document.getElementById("radius").value;
    var slantHeight = +document.getElementById("slant-height").value;

    console.log(radius);
    console.log(slantHeight);

    var surfaceArea = Math.PI * radius ** 2 + Math.PI * radius * slantHeight;
    console.log(surfaceArea);
    document.getElementById("surface").innerHTML = `${surfaceArea.toFixed(3)}`;
  }
  document.getElementById("calc-4").addEventListener("click", volumeCone);
  function volumeCone() {
    var radius = +document.getElementById("radius2").value;
    var slantHeight = +document.getElementById("slant-height2").value;
    var volume = (1 / 3) * (Math.PI * radius ** 2) * slantHeight;
    document.getElementById("volume").innerHTML = `${volume.toFixed(3)}`;

    document.getElementById("clear").addEventListener("click", clearButton);

    function clearButton() {
      document.getElementById("slant-height2").value = 0;
      document.getElementById("radius2").value = 0;
      document.getElementById("slant-height").value = 0;
      document.getElementById("radius").value = 0;
      document.getElementById("volume").innerHTML = `0`;
      document.getElementById("surface").innerHTML = `0`;
    }
  }
}

//Event Listener
document.getElementById("cylinder").addEventListener("click", cylinderButton);

function cylinderButton() {
  document.getElementById("div").innerHTML = `
  <h2 class="h3">Surface area:</h2>
    <img id="rect-prism" src="images/cone.png" alt="cone" />
    <p class="input">Radius: <input id="radius3" type="number" /></p>
    <p class="input">Height: <input id="slant-height3" type="number" /></p>
    <p><button id="calc-5">Calculate</button></p>
    <h3 class="h3">The surface area = <span id="surface"></span></h3>


    <h2 class="h3">Volume:</h2>
    <img id="rect-prism" src="images/volex.png" alt="conevol" />
    <p class="input">Raduis: <input id="radius4" type="number" /></p>
    <p class="input">Height: <input id="height4" type="number" /></p>
    <p><button id="calc-6">Calculate</button></p>
    <h3 class="h3">The Volume =<span id="volume"></span></h3>
    `;

  document.getElementById("calc-5").addEventListener("click", cylinderArea);
  function cylinderArea() {
    var radius = +document.getElementById("radius3").value;
    var height = +document.getElementById("slant-height3").value;
    var surfaceArea =
      2 * Math.PI * radius * height + 2 * Math.PI * (radius * 2);
    document.getElementById("surface").innerHTML = `${surfaceArea.toFixed(3)}`;
  }

  document.getElementById("calc-6").addEventListener("click", cylinderVolume);
  function cylinderVolume() {
    var radius = +document.getElementById("radius4").value;
    var height = +document.getElementById("height4").value;
    var volume = Math.PI * radius ** 2 * height;
    document.getElementById("volume").innerHTML = `${volume.toFixed(3)}`;
  }
  document.getElementById("clear").addEventListener("click", clearButton);

  function clearButton() {
    document.getElementById("radius4").value = 0;
    document.getElementById("height4").value = 0;
    document.getElementById("slant-height3").value = 0;
    document.getElementById("radius3").value = 0;
    document.getElementById("volume").innerHTML = `0`;
    document.getElementById("surface").innerHTML = `0`;
  }
}
