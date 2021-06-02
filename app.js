import {prepareBreakFast} from "./breakfast.js"

try {
  console.time('test')
  const food = await prepareBreakFast()  //在 ESM Module 里面，可以使用 top-level 的 await
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
  // The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code;
  // however it can be used on its own with JavaScript modules.
  //
  // 启用 ESM 只需要在 package.json 里面加上一行设置就可以了
  // https://webpack.js.org/guides/ecma-script-modules/
  // Setting "type": "module" in a package.json does force all files below this package.json to be ECMAScript Modules.
  console.log(food)
  console.timeEnd('test')
} catch (ex) {
  console.error(ex)
}