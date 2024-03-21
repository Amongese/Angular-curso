export interface Travelling {
    name: string;
    children?: String[];
  }
  
  const Travelling1: Travelling = {
    name: "Antonio",
  };
  
  const Travelling2: Travelling= {
    name: "Javi",
    children: ["Vane", "carmen"],
  };
  
  function printChildren(passenger: Travelling): void {
    const children = passenger.children || [];
  
    const howManyChildren = children?.length ?? 0;
    console.log(howManyChildren);
    console.log(children);
  }
  
  printChildren(Travelling1);
  printChildren(Travelling2);