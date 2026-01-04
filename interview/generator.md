# Generator 生成器

Generator 是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

## 1. 基本语法
- 函数名前带 `*`。
- 内部使用 `yield` 表达式。
- 调用函数返回一个**迭代器对象**，不会立即执行函数体。

```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

const hw = helloWorldGenerator();
console.log(hw.next()); // { value: 'hello', done: false }
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
```

## 2. 异步应用
通过 `yield` 暂停执行，配合 `next(value)` 传入结果，可以实现异步流程控制。