# ES6+ 新特性

## 1. 变量声明
- `let` / `const`: 块级作用域、无变量提升、暂时性死区。

## 2. 解构赋值
```javascript
const { name, age } = user;
const [first, ...rest] = list;
```

## 3. 模板字符串
使用反引号 `` ` ``，支持变量嵌入 `${var}`。

## 4. 扩展运算符 `...`
用于合并数组或对象。

## 5. 箭头函数
(见 [this 指向](./this))

## 6. 类 (Class)
ES6 引入了 Class 作为对象的模板，本质是原型的语法糖。

## 7. 模块化 (ESM)
`import` / `export`。

## 8. 其他
- `Optional Chaining` (`?.`)
- `Nullish Coalescing` (`??`)
- `Object.keys/values/entries`