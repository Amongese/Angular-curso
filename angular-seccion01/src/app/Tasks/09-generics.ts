export function MyType<T>(argument: T): T {
    return argument;
  }
  
  let String = MyType("Chanchito feliz");
  let Number = MyType(1);
  let Boolean = MyType(true);
  let Arr = MyType([1, 2, 3]);
  
  console.log(String);
  console.log(Number);
  console.log(Boolean);
  console.log(Arr);