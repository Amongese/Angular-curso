export class Person {
    constructor(public name: string, public age: number) {}
  }
  
  const chanchito = new Person("chanchito", 30);
  console.log(chanchito);
  

  export class Hero extends Person {
    constructor(age: number, public alterEgo: string, public realName: string) {
      super(realName, age);
    }
  }
  
  
  const person = new Person("chanchito", 30);
  
  export class Hero2 {

    constructor(
      public age: number,
      public alterEgo: string,
      public realName: string,
      public person: Person
    ) {
    
    }
  }
  
  const hero2 = new Hero2(30, "Spiderman", "Peter Parker", person);
  console.log(hero2);