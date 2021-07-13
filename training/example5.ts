/**
 * 型には「any型」という型があります。
 * any型にはどんな型も入るため、TypeScriptの恩恵を受けられません。
 * なので、どうしても型を付けることが厳しい場合以外はany型は使わない様にしましょう。
 */
let anyA: any = 0;

anyA = "hoge";
anyA = false;
anyA = [1, "fuga", true];

console.log("anyA =>", anyA);
