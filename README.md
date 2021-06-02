# JS中的 async / await 异步编程模型


`async`和`await`这两个关键词是ES2017中引入的，提供基于`Promise`的异步编程模型，可以把异步的代码写成类似同步的方式，提高代码的可阅读性。


如果对于Promise不熟悉的话，可以看看下面的资料

- [优雅的异步处理 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
- [Promise - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)


我之前有看过 [C#异步编程模型](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/async/) 。
觉得这里面的做早餐的例子比较有意思。这里我用JS重写(抄)了这个准备早餐的异步模型的部分代码。



