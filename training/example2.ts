const func1 = (name: string, age: Number) => {
  return `${name} は ${age} 歳です。`;
};

type func2Props = {
  name: string;
  age: Number;
};
const func2 = (value: func2Props) => {
  return `${value.name} は ${value.age} 歳です。`;
};

// NOTE: このコメントを解除すると型エラーが起きます。
// console.log("func1 =>", func1(100, "10"));
console.log("func1 =>", func1("佐藤", 10));

const obj: func2Props = {
  name: "鈴木",
  age: 10,
  // NOTE: このコメントを解除すると型エラーが起きます。
  // comment: "型を定義していないのでエラーがでます。",
};

console.log("func2 =>", func2(obj));
