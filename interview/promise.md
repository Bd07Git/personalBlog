# Promise 异步编程

## 1. 三种状态
- **Pending** (进行中)
- **Fulfilled** (已成功)
- **Rejected** (已失败)
状态一旦改变（Pending -> Fulfilled 或 Pending -> Rejected），就不可逆。

## 2. 常用方法
- `Promise.all([p1, p2])`: 全部成功才成功，一个失败即失败。
- `Promise.race([p1, p2])`: 谁快谁赢。
- `Promise.allSettled()`: 等待所有 Promise 结束，无论成功失败。
- `Promise.any()`: 只要有一个成功就成功。

## 3. 链式调用
`then` 方法返回的是一个新的 Promise 实例，因此可以链式调用。

## 4. 手写 Promise 核心逻辑
```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
      }
    };
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}