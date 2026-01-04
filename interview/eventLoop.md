# 事件循环 (Event Loop)

JavaScript 是单线程的，事件循环是其处理异步操作的核心机制。

## 1. 任务队列分类

### 微任务 (Microtask)
- Promise.then/catch/finally
- MutationObserver
- process.nextTick (Node.js)

### 宏任务 (Macrotask)
- script (整体代码)
- setTimeout / setInterval
- setImmediate (Node.js)
- I/O 操作
- UI 渲染

## 2. 执行顺序
1. 执行一个宏任务（首次是整体代码 script）。
2. 执行过程中如果遇到微任务，将其放入微任务队列。
3. 当前宏任务执行完后，**立即依次执行微任务队列中的所有任务**。
4. 渲染 UI（如果需要）。
5. 开始下一个宏任务。

## 3. 经典面试题
```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 输出顺序：1, 4, 3, 2