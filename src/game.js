IDInISGame = {
  // Init of the game

  map_grid: {
    width:  31,
    height: 23,
    tile: {
      width:  16,
      height: 16
    }
  },

  // width of game screen
  // based on tile size
  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },
 
  // height of game screen
  // based on tile size
  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },

  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(IDInISGame.width(), IDInISGame.height());
    Crafty.background('rgb(143, 143, 143)');

    //basic layout of the chess design of the square
    for (var x = 0; x < IDInISGame.map_grid.width; x++) {
      
      var even_x = (x%2 == 0) ? true : false;

      for (var y = 0; y < IDInISGame.map_grid.height; y++) {

        var at_edge = x == 0 || y == 0 || x == IDInISGame.map_grid.width-1 || y == IDInISGame.map_grid.height-1;
        var even_y = (y%2 == 0) ? true : false;


        if (at_edge) {
          Crafty.e('2D, Canvas, Color')
            .attr({
              x: x * IDInISGame.map_grid.tile.width,
              y: y * IDInISGame.map_grid.tile.height,
              w: IDInISGame.map_grid.tile.width,
              h: IDInISGame.map_grid.tile.height
            })
            .color('grey');
        }
        else {
          if (even_x || even_y) {

            Crafty.e('2D, Canvas, Color')
              .attr({
                x: x * IDInISGame.map_grid.tile.width,
                y: y * IDInISGame.map_grid.tile.height,
                w: IDInISGame.map_grid.tile.width,
                h: IDInISGame.map_grid.tile.height
              })
              .color('rgb(176,176,176)');

          }
        }
      }
    }

    //green spots (on fixed positions)
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 2 * IDInISGame.map_grid.tile.width,
        y: 2 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 9,
        h: IDInISGame.map_grid.tile.height * 6,
      })
    .color('rgb(20, 125, 40)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 20 * IDInISGame.map_grid.tile.width,
        y: 2 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 9,
        h: IDInISGame.map_grid.tile.height * 6,
      })
    .color('rgb(20, 125, 40)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 2 * IDInISGame.map_grid.tile.width,
        y: 15 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 9,
        h: IDInISGame.map_grid.tile.height * 6,
      })
    .color('rgb(20, 125, 40)');

    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 20 * IDInISGame.map_grid.tile.width,
        y: 15 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 9,
        h: IDInISGame.map_grid.tile.height * 6,
      })
    .color('rgb(20, 125, 40)');

    //statue section (on fixed positions) 

    //external base
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 13 * IDInISGame.map_grid.tile.width,
        y: 9 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 5,
        h: IDInISGame.map_grid.tile.height * 5,
      })
    .color('grey');

    //internal base
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 14 * IDInISGame.map_grid.tile.width,
        y: 10 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 3,
        h: IDInISGame.map_grid.tile.height * 3,
      })
    .color('rgb(69 ,69 ,69)');

    //statue
    Crafty.e('2D, Canvas, Color')
      .attr({
        x: 15 * IDInISGame.map_grid.tile.width,
        y: 11 * IDInISGame.map_grid.tile.height,
        w: IDInISGame.map_grid.tile.width * 2,
        h: IDInISGame.map_grid.tile.height * 1,
      })
    .color('rgb(92, 64, 51)');

  }
}