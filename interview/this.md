# this 指向

在 JavaScript 中，`this` 的指向是在**函数执行时**确定的，而不是在定义时确定的（箭头函数除外）。

## 1. 绑定规则

### 默认绑定
在非严格模式下，指向全局对象（window/global）；严格模式下指向 `undefined`。
```javascript
function foo() { console.log(this); }
foo(); // window
```

### 隐式绑定
函数作为对象的方法调用时，`this` 指向该对象。
```javascript
const obj = {
  name: 'Alice',
  sayName() { console.log(this.name); }
};
obj.sayName(); // Alice
```

### 显式绑定
通过 `call`、`apply`、`bind` 强制指定 `this`。
- `call(obj, arg1, arg2)`
- `apply(obj, [args])`
- `bind(obj)` (返回新函数)

### new 绑定
构造函数中的 `this` 指向新创建的实例对象。

## 2. 箭头函数
箭头函数**没有自己的 this**。它会捕获其**定义时**所在上下文的 `this` 值作为自己的 `this`。
- 不可以作为构造函数（不能 new）。
- 没有 `arguments` 对象。
- `call/apply/bind` 无法改变其 `this` 指向。

## 3. 优先级
**new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定**