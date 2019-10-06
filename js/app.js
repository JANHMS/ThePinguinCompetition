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
