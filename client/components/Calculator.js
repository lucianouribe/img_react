import React from 'react';

class Calculator extends React.Component {

  componentDidMount() {
    var i = document.getElementById("calculator");

    // go full-screen
    if (i.requestFullscreen) {
    	i.requestFullscreen();
    } else if (i.webkitRequestFullscreen) {
    	i.webkitRequestFullscreen();
    } else if (i.mozRequestFullScreen) {
    	i.mozRequestFullScreen();
    } else if (i.msRequestFullscreen) {
    	i.msRequestFullscreen();
    }

    var numbers = ""
    var memory = ""

    var calcuButtons = document.getElementsByClassName('calcu-button')
    for(var i = 0; i < calcuButtons.length; i++) {
      var calcuButton = calcuButtons[i];
      calcuButton.addEventListener('click', function(){
            numbers += this.innerText;
          putNumber(numbers);
          addEggAdderMath(numbers);
      });
    }

    // printing on the screen
    var screen = document.getElementById('screen');
    function putNumber(number) {
      screen.innerHTML = number;
    }

    // getting result
    var equalButton = document.getElementById('equal-button');

    equalButton.addEventListener('click', function(){
      numbers = eval(numbers);
      putNumber(numbers);
      if(screen.innerHTML === 'Infinity' || screen.innerHTML === 'NaN') {
        putNumber('error');
        numbers = ""
      }
    });

    // specific buttons
    var acButton = document.getElementById('ac-button');

    acButton.addEventListener('click', function(){
      numbers = ""
      putNumber(0);
    });

    var percentageButton = document.getElementById('percentage-button');
    percentageButton.addEventListener('click', function(){
      putNumber(numbers / 100);
      numbers = numbers / 100;
    });

    var rootButton = document.getElementById('root-button');
    rootButton.addEventListener('click', function(){
      putNumber(Math.sqrt(numbers));
      numbers = Math.sqrt(numbers);
    });

    var powerButton = document.getElementById('power-button');
    powerButton.addEventListener('click', function(){
      putNumber(numbers * numbers);
      numbers = numbers * numbers;
    });

    var sineButton = document.getElementById('sine-button');
    sineButton.addEventListener('click', function(){
      putNumber(Math.sin(numbers));
      numbers = Math.sin(numbers);
    });

    var cosineButton = document.getElementById('cosine-button');
    cosineButton.addEventListener('click', function(){
      putNumber(Math.cos(numbers));
      numbers = Math.cos(numbers)
    });

    var tangentButton = document.getElementById('tangent-button');
    tangentButton.addEventListener('click', function(){
      putNumber(Math.tan(numbers));
      numbers = Math.tan(numbers)
    });

    var piButton = document.getElementById('pi-button');
    piButton.addEventListener('click', function(){
      putNumber(Math.PI);
      numbers += Math.PI;
    });


    // memory
    var plusminusButton = document.getElementById('plusminus-button');
    plusminusButton.addEventListener('click', function(){
      putNumber(-numbers);
      numbers = -numbers
    });

    var mPlusButton = document.getElementById('m-plus-button');
    mPlusButton.addEventListener('click', function(){
      memory = eval(memory + screen.innerHTML);
    });

    var mMinusButton = document.getElementById('m-minus-button');
    mMinusButton.addEventListener('click', function(){
      memory = eval(memory - screen.innerHTML);
    });

    var mRecButton = document.getElementById('m-rec-button');
    mRecButton.addEventListener('click', function(){
      numbers += memory;
      putNumber(memory);
    });
    var mClearButton = document.getElementById('m-clear-button');
    mClearButton.addEventListener('click', function(){
      memory = "";
    });

    // history


    function addEggAdderMath() {
      var input = screen.innerHTML;
      var historyList = document.getElementById('history-list');
      var li = document.createElement('LI');
      var text = document.createTextNode(input);
      li.appendChild(text);
      historyList.appendChild(li);
    }


    var historyButton = document.getElementById('history-button')

    historyButton.onclick = function() {
      var div = document.getElementById('show-history');
      if (div.style.display !== 'none') {
          div.style.display = 'none';
      }
      else {
          div.style.display = 'block';
      }
    };
  }

  render() {
    return (
      <div className="card calculator">
        <div className="row">
          <div className="col m12 screen right-align">
            <h4 className="" id="screen"></h4>
          </div>
          <div className="col s12 m12">
            <div id="ac-button" className="col s2 m2 btn red">AC</div>
            <div className="col s2 m2 calcu-button btn ope">(</div>
            <div className="col s2 m2 calcu-button btn ope">)</div>
            <div id="plusminus-button" className="col s2 m2 btn ope">+/-</div>
            <div id="percentage-button" className="col s2 m2 btn ope">%</div>
            <div id="sine-button" className="col s2 m2 btn esp">sin</div>
            <div id="m-clear-button" className="col s2 m2 btn esp">Mc</div>
            <div className="col s2 m2 calcu-button btn num">1</div>
            <div className="col s2 m2 calcu-button btn num">2</div>
            <div className="col s2 m2 calcu-button btn num">3</div>
            <div className="col s2 m2 calcu-button btn ope">/</div>
            <div id="cosine-button" className="col s2 m2 btn esp">cos</div>
            <div id="m-plus-button" className="col s2 m2 btn esp">M +</div>
            <div className="col s2 m2 calcu-button btn num">4</div>
            <div className="col s2 m2 calcu-button btn num">5</div>
            <div className="col s2 m2 calcu-button btn num">6</div>
            <div className="col s2 m2 calcu-button btn ope">*</div>
            <div id="tangent-button" className="col s2 m2 btn esp">tan</div>
            <div id="m-minus-button" className="col s2 m2 btn esp">M -</div>
            <div className="col s2 m2 calcu-button btn num">7</div>
            <div className="col s2 m2 calcu-button btn num">8</div>
            <div className="col s2 m2 calcu-button btn num">9</div>
            <div className="col s2 m2 calcu-button btn ope">-</div>
            <div id="pi-button" className="col s2 m2 btn esp">&#928;</div>
            <div id="m-rec-button" className="col s2 m2 btn esp">Mr</div>
            <div id="cero" className="col s4 m4 calcu-button btn num">0</div>
            <div className="col s2 m2 calcu-button btn num">.</div>
            <div className="col s2 m2 calcu-button btn ope">+</div>
            <div id="root-button" className="col s2 m2 btn esp center-align">&#8730;</div>
            <div id="equal-button" className="col s10 m10 btn esp">=</div>
            <div id="power-button" className="col s2 m2 btn esp">x<sup>2</sup></div>
            <div id="history-button" className="col s12 m12 btn red hide">history</div>
          </div>
          </div>
          <section id="show-history" class="card center">
          <div class="card-container">
            <h5>History</h5>
            <ul id="history-list">
            </ul>
          </div>
          </section>
      </div>
    )
  }
}

export default Calculator;
