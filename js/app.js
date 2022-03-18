var app = {
  init: function() {
    // console.log('init');

    // TODO
    app.drawBoard();

    // Event listeners - TODO
  },

  drawBoard: function() {
    divElement = document.getElementById('board');

    // création des lignes
    for (let i = 1; i <= 4; i++) {
      newRowElement = document.createElement('div');
      newRowElement.classList.add('cellRow');
      newRowElement.setAttribute('id', 'row' + i);
      divElement.append(newRowElement);

      // création des colonnes dans chaque ligne
      for (let i = 1; i <=6; i++) {
        newCellElement = document.createElement('div');
        newCellElement.classList.add('cell');
        newRowElement.append(newCellElement);
      };
    };
  },

  handleLaunchScriptButton: function() {
    // TODO
    
    // TODO : get all lines as an array

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },

  codeLineLoop: function(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);


    // Increment
    index++;

    // if still a line to interpret
    if (index < codeLines.length) {
      // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 1000);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },

  checkSuccess: function() {
    // TODO display if the game is won or not
  },
};

document.addEventListener('DOMContentLoaded', app.init);
