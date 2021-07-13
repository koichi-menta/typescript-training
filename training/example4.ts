/**
 * 関数にも型を付けることができます。
 *
 */
const func1 = (name: string, age: number) => {
  return `${name} は ${age} 歳です。`;
};

console.log("func1 =>", func1("佐藤", 10));
// このコメントを解除すると型エラーが起きます。
// console.log("func1 =>", func1(100, "10"));

type func2Props = {
  name: string;
  age: number;
};
const func2 = (value: func2Props) => {
  return `${value.name} は ${value.age} 歳です。`;
};

const obj: func2Props = {
  name: "鈴木",
  age: 10,
  // このコメントを解除すると型エラーが起きます。
  // comment: "型を定義していないのでエラーがでます。",
};

console.log("func2 =>", func2(obj));
