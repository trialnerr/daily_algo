// function Dog(name: string, breed: string) {
//   this.name = name;
//   this.breed = breed;
//   this.tricks = [];
// }

// Dog.prototype.learnTrick = function (trick: string):void {
//   this.tricks.push(trick);
// };

// Dog.prototype.performTrick = function (trick: string): void {
//   if (this.tricks.indexOf(trick) !== -1) {
//     console.log(`${this.name} performed ${trick}!`);
//   } else {
//     console.log(`${this.name} doesn't know that trick`);
//   }
// };
// rewriting using class notation
class Dog {
  name: string;
  breed: string;
  tricks: string[];

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
    this.tricks = [];
  }

  learnTrick(trick: string): void {
    this.tricks.push(trick);
  }

  performTrick(trick: string): void{
      if (this.tricks.indexOf(trick) !== -1) {
        console.log(`${this.name} performed ${trick}!`);
      } else {
        console.log(`${this.name} doesn't know that trick`);
      }
  }
}
