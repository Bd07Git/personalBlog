# async/await

`async/await` 是 Generator 的语法糖，它让异步代码看起来像同步代码。

## 1. 特点
- `async` 函数返回一个 Promise 对象。
- `await` 后面可以跟 Promise 对象或其他类型的值。
- 如果 Promise 状态变为 `rejected`，`await` 后的代码不会执行，需要用 `try...catch` 捕获。

## 2. 原理
`async/await` 的本质是 **Generator + 自动执行器**。

```javascript
async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}