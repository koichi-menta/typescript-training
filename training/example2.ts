/**
 * オブジェクトにも型を付けることができます。
 * 型の指定方法は2つあります。
 * interfaceを使う方法と、typeを使う方法です。
 */
interface ObjPropsA {
  name: string;
  age: number;
}

type ObjPropsB = {
  name: string;
  age: number;
};

const objA: ObjPropsA = {
  name: "hoge",
  age: 30,
};

const objB: ObjPropsB = objA;

/**
 * typeはオブジェクト以外の型も指定する事ができます。
 * この書き方は「0」と「'hoge'」と「false」のみを代入できます。
 */
type TypeA = 0 | "hoge" | false;

const tA: TypeA = 0;
const tB: TypeA = "hoge";
const tC: TypeA = false;

// 下記コメントを解除するとエラーを確認できます。
// const tD: TypeA = 100;

console.log("objA =>", objA);
