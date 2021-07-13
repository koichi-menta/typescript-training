/**
 * 配列にも型を付けることができます。
 * 配列の型宣言は最後に[]を付けます。
 */
const arrayA: number[] = [0, 1, 10];
const arrayB: string[] = ["hoge", "fuga", "piyo"];

arrayA.push(100);

/**
 * 指定した型以外の値は追加できません。
 * 下記コードのコメントを解除するとエラーが確認できます
 */
// arrayB.push(100);

console.log("arrayA =>", arrayA);
