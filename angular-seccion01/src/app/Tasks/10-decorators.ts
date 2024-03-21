function classDecorator<A extends { new (...args: any[]): {} }>(
    constructor: A
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
  
  @classDecorator
  class HeroClass {
    public myProperty: string = "chanchito";
  
    print() {
      console.log("chanchito");
    }
  }
  
  console.log(HeroClass);
  const myClass = new HeroClass();
  console.log(myClass);