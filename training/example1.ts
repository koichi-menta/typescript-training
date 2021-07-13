/**
 * 型の基本はプリミティブ型です。
 * string、number、boolean、symbol、bigint、null、undefined
 * があります。
 */
const a: string = "hoge";
const b: number = 0;
const c: boolean = false;
const d: Symbol = Symbol();
const e: bigint = 10n;
const f: null = null;
const g: undefined = undefined;

/**
 * :stringなどの型注釈は省略する事ができます。
 * ですが、constを使用した場合、方はリテラル型になります
 * リテラル型とは、プリミティブ型の詳細版です。
 * リテラル型は「任意の文字」、「任意の数値」「true/false」があります。
 */
const h = "hoge";
const i = 100;
const j = false;

/**
 * varやletで宣言している場合は型推論をしてくれるのですが、
 * リテラル型にならず、プリミティブ型になります。
 * 下の例だと「123型」ではなく、「number型」になります。
 */
let hoge = 123;

/**
 * 一度指定した型の変数に他の型の値を代入する事はできません。
 * 下のコードはnumber型にstringを入れようとしているので、
 * コメントを解除すると型エラーが起きます。
 */
// hoge = "hoge";

console.log("hoge =>", hoge);
