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
    model.currentpinguin = model.pinguins[0];

    // tell our views to initialize
    pinguinListView.init();//simicolon after each funtion
    pinguinView.init();//PinguinView refers to the init funtion
  },

  getCurrentpinguin: function() {
      return model.currentpinguin;
  },


  getpinguins: function() {
      return model.pinguins;
  },

  // set the currently-selected pinguin to the object passed in -> fuction with pinguin as variable
  setCurrentpinguin: function(pinguin) {
      model.currentpinguin = pinguin;
  },

  // increments the counter for the currently-selected pinguin with ++ wie in Java
  incrementCounter: function() {
      model.currentpinguin.clickCount++;
      pinguinView.render();//render view again after octopus hadelt with the incremented count
  }

};

var pinguinView ={
  init : function () {
    // store pointers to our DOM elements
    //The DOM (Document Object Model) is the interface between HTML and dynamic JavaScript
    this.pinguinElem = document.getElementById('pinguin');
    this.pinguinNameElem = document.getElementById('pinguin-name');
    this.pinguinImageElem = document.getElementById('pinguin-img');
    this.countElem = document.getElementById('pinguin-count');
    // on click, increment the current pinguin's counter Eveentlisterner !
    this.pinguinImageElem.addEventListener('click', function(){
        octopus.incrementCounter();
    });

    //render the views
    this.render();

  },

  render: function() {
      // update the DOM elements with values from the current pinguin
      var currentpinguin = octopus.getCurrentpinguin();
      this.countElem.textContent = currentpinguin.clickCount;
      this.pinguinNameElem.textContent = currentpinguin.name;
      this.pinguinImageElem.src = currentpinguin.imgSrc;
  }
};

var pinguinListView = {

  init: function() {
      // store the DOM element for easy access later
      this.pinguinListElem = document.getElementById('pinguin-list');

      // render this view (update the DOM elements with the right values)
      this.render();
  },

  render: function() {
      var pinguin, elem, i;
      // get the pinguins we'll be rendering from the octopus
      var pinguins = octopus.getpinguins();

      // empty the pinguin list
      this.pinguinListElem.innerHTML = '';

      // loop over the pinguins
      for (i = 0; i < pinguins.length; i++) {
          // this is the pinguin we're currently looping over
          pinguin = pinguins[i];

          // make a new pinguin list item and set its text
          elem = document.createElement('li');
          elem.textContent = pinguin.name;

          // on click, setCurrentpinguin and render the pinguinView
          // (this uses our closure-in-a-loop trick to connect the value
          //  of the pinguin variable to the click event function)
          elem.addEventListener('click', (function(pinguinCopy) {
              return function() {
                  octopus.setCurrentpinguin(pinguinCopy);
                  pinguinView.render();
              };
          })(pinguin));

          // finally, add the element to the list
          this.pinguinListElem.appendChild(elem);
      }
  }
};

// make it go!
octopus.init();
