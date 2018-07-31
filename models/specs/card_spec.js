const assert = require('assert');
const Card = require('../card.js');

describe("Card", function() {

  let card;

  beforeEach(function(){
    card = new Card("Superman", 4, 5, 6);
  });

  it("should have name", function(){
    const result = card.name;
    assert.deepStrictEqual(result, "Superman")
  });

  xit("should have strength", function(){
    const result = card.strength;
    assert.deepStrictEqual(result, 4)

  });

  xit("should have intelligence", function(){
    const result = card.intelligence;
    assert.deepStrictEqual(result, 5)

  });
  
  xit("should have agility", function(){
    const result = card.agility;
    assert.deepStrictEqual(result, 6)

  });

});
