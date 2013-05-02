// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: IDInISGame.map_grid.tile.width,
      h: IDInISGame.map_grid.tile.height
    })
  },

  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/IDInISGame.map_grid.tile.width, y: this.y/IDInISGame.map_grid.tile.height }
    } else {
      this.attr({ x: x * IDInISGame.map_grid.tile.width, y: y * IDInISGame.map_grid.tile.height });
      return this;
    }
  }
});

Crafty.c('GreenSpot', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color');
    this.attr({
      w: IDInISGame.map_grid.tile.width * 9,
      h: IDInISGame.map_grid.tile.height * 6,
    });

    this.color('rgb(20, 125, 40)');
  },
});

Crafty.c('StatueExternalBase', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color')
      .attr({
        w: IDInISGame.map_grid.tile.width * 5,
        h: IDInISGame.map_grid.tile.height * 5,
      })
    .color('grey');
  },
});

Crafty.c('StatueInternalBase', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color')
    .attr({
      w: IDInISGame.map_grid.tile.width * 3,
      h: IDInISGame.map_grid.tile.height * 3,
    })
    .color('rgb(69 ,69 ,69)');
  },
});

Crafty.c('Statue', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color')
      .attr({
        w: IDInISGame.map_grid.tile.width * 2,
        h: IDInISGame.map_grid.tile.height * 1,
      })
    .color('rgb(92, 64, 51)');
  },
});

Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});

Crafty.c('IDCharacter', {
  init: function() {
    this.requires('Actor, Fourway, Color')
      .fourway(4)
      .color('orange');
  }
});
