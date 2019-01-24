/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject(time, obj){
//     this.createdAt = time
//     this.dimensions = obj
//   }
  
//   GameObject.prototype.destroy = function (){
    
//   }

class GameObject{
    constructor(time, obj){
        this.createdAt = time
        this.dimensions = obj
    }
    destroy(){
        return `${this.name} was removed from the game`
    }
}
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(hp, name, dimensions, createdAt) {
//     GameObject.call(this, createdAt, dimensions)
//     this.healthPoints = hp
//     this.name = name
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype)
//   CharacterStats.prototype.takeDamage = function (damage) {
//     this.healthPoints -= damage
//     return `${this.name} took ${damage} damage health decreased to ${this.healthPoints}`
//   };
  
class CharacterStats extends GameObject{
    constructor(hp, name, dimensions, createdAt){
        super(createdAt, dimensions)
        this.healthPoints = hp
        this.name = name
    }
    takeDamage(damage) {
        this.healthPoints -= damage
        return `${this.name} took ${damage} damage health decreased to ${this.healthPoints}`
    }
}

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
//   function Humanoid(charData) {
//     CharacterStats.call(this, charData.healthPoints, charData.name, charData.dimensions, charData.createdAt)
//     this.team = charData.team
//     this.weapons = charData.weapons
//     this.language = charData.language
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype)
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`
//   }
   
class Humanoid extends CharacterStats{
    constructor(charData){
        super(charData.healthPoints, charData.name, charData.dimensions, charData.createdAt)
        this.team = charData.team
        this.weapons = charData.weapons
        this.language = charData.language
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}

  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test your work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage(5)); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.