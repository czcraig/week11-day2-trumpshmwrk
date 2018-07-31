const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe("Game", function() {

  let card1;
  let card2;
  let player_1;
  let player_2;
  let game;

  beforeEach(function(){
    card1 = new Card("Superman", 4, 5, 6);
    card2 = new Card("The Flash", 7, 4, 10);
    player_1 = new Player("Chris");
    player_2 = new Player("Shaun");
    game = new Game()
  });



  it("should have an empty deck", function(){
    const result = game.deck;
    assert.deepStrictEqual(result, [])
  });

  it("should have an no players", function(){
    const result = game.players;
    assert.deepStrictEqual(result, [])
  });








});
