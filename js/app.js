//set a model
//Javascript try to implement small project Jan
var model = {
    currentpinguin: null,
    pinguins: [
        {
            clickCount : 0,
            name : 'Cutie1',
            imgSrc : 'img/pinguin1.jpg',

        },
        {
            clickCount : 0,
            name : 'Cutie2',
            imgSrc : 'img/Pinguin2.jpg',
        },
        {
            clickCount : 0,
            name : 'Cutie3',
            imgSrc : 'img/pinguin3.jpg',
        },
        {
            clickCount : 0,
            name : 'Cutie4',
            imgSrc : 'img/pinguin4.jpg',
        },

    ]
};

var octopus = {
  init: function() {
    // set our current pinguin to the first one in the list
    model.currectpinguin = model.pinguins[0];

    // tell our views to initialize
    pinguinListView.init();//simicolon after each funtion
    pinguinView.init();//PinguinView refers to the init funtion
  },

  getpinguins: function() {
    return model.pinguins;
  },

  getCurrentpinguin: function(){

    return model.currectpinguin;
  },

  // set the currently-selected pinguin to the object passed in -> fuction with pinguin as variable
  setCurrentfuntion: function(pinguin) {
    model.currentpinguin = pinguin;
  },

  // increments the counter for the currently-selected pinguin with ++ wie in Java
  incrementCounter: function() {
    model.currectpinguin.clickCount++;
    pinguinView.render();//render view again after octopus hadelt with the incremented count
  }

};

var pinguinView ={
  init : function () {
    // store pointers to our DOM elements
    //The DOM (Document Object Model) is the interface between HTML and dynamic JavaScript
    this.pinguinElem= document.getElementbyId('pinguin');
    this.pinguinNameElem= document.getElementbyId('pinguin-name');
    this.pinguinCountElem= document.getElementbyId('pinguin-count');
    this.pinguinImgElem= document.getElementbyId('pinguin-img');
    // on click, increment the current pinguin's counter Eveentlisterner !
    this.pinguinImageElem.addEventListener('click', function(){
        octopus.incrementCounter();
      });

      //render the views
      this.render();

  },

  render function() {
    // update the DOM elements with values from the current pinguin
    var currentpinguin = octopus.getCurrentpinguin();
    this.countElem.textContent = currectpinguin.clickCount;
    this.pinguinNameElem.textContent = currentpinguin.name;
    this.pinguinImageElem.src = currentpinguin.imgSrc;

  }
};

var pinguinListView = {
  init: function() {
    // store the DOM element
    this.pinguinListElem = document.getElementById('pinguin-list');

    // render this view
    this.render();
  },

  render: function() {
    var pinguin, elem, i;//variablen sind diese drei
    // get the pinguins we'll be rendering from the octopus
    var pinguins = octopus.getpinguins();

    // empty the pinguin list
    this.pinguinListElem.innerHTML = '';
    // loop over the pinguins like in JAVA
    for (i = 0; i < pinguins.length; i++) {
        // this is the pinguin we're currently looping over
        pinguin = pinguins[i];

        // make a new pinguin list item and set its text
        elem = document.createElement('li');
        elem.textContent = pinguin.name;

        // on click, setCurrentpinguin and render the pinguinView
        // (this uses a closure-in-a-loop trick to connect the value
        //  of the pinguin variable to the click event function)
        elem.addEventListener('click', (function(pinguinCopy) {
            return function() {
                octopus.setCurrentpinguin(pinguinCopy);
                pinguinView.render();
            };
        })(pinguin));

        // finally, add the element to the list
        this.pinguinListElem.appendChild(elem);//append
    }
}
};

//lets go
octopus.init();
