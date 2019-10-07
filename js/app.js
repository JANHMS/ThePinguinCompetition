//set a model
//Javascript try to implement small project Jan
var model = {
    currentpinguin: null,
    pinguins: [
        {
            clickCount : 0,
            name : 'Cutie1',
            imgSrc : 'img/pinguin1.jpg',
            imgAttribution:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.welt.de%2Fimg%2Fwissenschaft%2Fumwelt%2Fmobile135349998%2F5092502047-ci102l-w1024%2FKaiserpinguin-Kaiser-Pinguin-Aptenodytes-forsteri-Emperor-penguin-2.jpg&imgrefurl=https%3A%2F%2Fwww.welt.de%2Fwissenschaft%2Fumwelt%2Farticle135350001%2FWarum-Pinguine-in-der-Antarktis-nicht-frieren.html&tbnid=JJdmSnwCPoEBXM&vet=12ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygiegUIARDVAQ..i&docid=7FeUyY37BfDxlM&w=1024&h=1001&q=pinguin&client=safari&ved=2ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygiegUIARDVAQ'
        },
        {
            clickCount : 0,
            name : 'Cutie2',
            imgSrc : 'img/pinguin2.jpg',
            imgAttribution:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia1.faz.net%2Fppmedia%2Faktuell%2Fgesellschaft%2F3149992713%2F1.661297%2Fformat_top1_breit%2Fpinguin-luckyfeed-liegt.jpg&imgrefurl=https%3A%2F%2Fwww.faz.net%2Faktuell%2Fgesellschaft%2Fneuseeland-gestrandeter-pinguin-liegt-im-kuenstlichen-koma-13313.html&tbnid=I3ph2RJrzACdyM&vet=12ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygGegUIARCZAQ..i&docid=CDAF41v64xq0MM&w=960&h=430&q=pinguin&client=safari&ved=2ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygGegUIARCZAQ'
        },
        {
            clickCount : 0,
            name : 'Cutie3',
            imgSrc : 'img/pinguin3.jpg',
            imgAttribution:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.welt.de%2Fimg%2Fvermischtes%2Fmobile159305564%2F2202503347-ci102l-w1024%2FEselpinguin-Esel-Pinguin-Eselspinguin-Esels-Pinguin-Pygosceli.jpg&imgrefurl=https%3A%2F%2Fwww.welt.de%2Fvermischtes%2Farticle159301391%2FAls-ein-Pinguin-sein-Weibchen-mit-einem-anderen-findet.html&tbnid=UpgSTKabXYm6xM&vet=12ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygJegUIARCfAQ..i&docid=LxFGuomJ2U04bM&w=1024&h=1001&q=pinguin&client=safari&ved=2ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygJegUIARCfAQ'
        },
        {
            clickCount : 0,
            name : 'Cutie4',
            imgSrc : 'img/pinguin4.jpg',
            imgAttribution:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fglobalmagazin.com%2Ftypo3temp%2Fpics%2FPinguin_antartica-3427135_640_Pixabay_CC_51383eee93.jpg&imgrefurl=https%3A%2F%2Fglobalmagazin.com%2Fthemen%2Fklima%2Fpinguin-kot-als-gradmesser-des-klimawandels%2F&tbnid=bSDlkbMGWPxiSM&vet=12ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygHegUIARCbAQ..i&docid=viIHn223cRakHM&w=600&h=400&q=pinguin&client=safari&ved=2ahUKEwjkjY_lpIjlAhUH7xoKHaoGCCEQMygHegUIARCbAQ'
        },

    ]
};
// the octopus is a dictionary of functions, whoch we use to handle our DOM
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

//gets all pinguins from the pincuins dictionary
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
    // on click, increment the current pinguin's counter Eveentlisterner ! when we click on the Inmage
    this.pinguinImageElem.addEventListener('click', function(){
        octopus.incrementCounter();//refers to the line 59
    });

    //render the views
    this.render();

  },

  render: function() {
      // update the DOM elements with values from the current pinguin
      var currentpinguin = octopus.getCurrentpinguin();//octopus gets the current pinguin
      this.countElem.textContent = currentpinguin.clickCount;
      this.pinguinNameElem.textContent = currentpinguin.name;//text is the name
      this.pinguinImageElem.src = currentpinguin.imgSrc;//src is the Imgsrc
  }
};

var pinguinListView = {

  init: function() {
      // store the DOM element for easy access later dynamic JS with static html
      this.pinguinListElem = document.getElementById('pinguin-list');

      // render this view (update the DOM elements with the right values)
      this.render();
  },

  render: function() {
      var pinguin, elem, i;
      // get the pinguins we'll be rendering from the octopus
      var pinguins = octopus.getpinguins();

      // empty the pinguin
      this.pinguinListElem.innerHTML = '';// set '' which is empty the list

      // loop over the pinguins
      for (i = 0; i < pinguins.length; i++) {//liek in JAVA 0,1,2,3 because we have 4 pincuins
          // this is the pinguin we're currently looping over
          pinguin = pinguins[i];

          // make a new pinguin list item and set its text
          elem = document.createElement('li');//created elem object
          elem.textContent = pinguin.name;//set the text to the name

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
          this.pinguinListElem.appendChild(elem);//append to add, refered to the elem we created in 123
      }
  }
};

// make it go!
octopus.init();
