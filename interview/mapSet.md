# Map 和 Set

## 1. Set
Set 是一种**成员唯一**的集合。
- `add(val)`, `delete(val)`, `has(val)`, `clear()`
- 应用：**数组去重** `[...new Set(array)]`。

## 2. Map
Map 类似于对象，但**键的范围不限于字符串**，各种类型的值（包括对象）都可以当作键。
- `set(key, val)`, `get(key)`, `has(key)`
- 遍历顺序：Map 按照插入顺序进行遍历。

## 3. WeakMap 和 WeakSet
- **弱引用**：键必须是对象，且不计入垃圾回收机制。
- 不可遍历。
- 场景：DOM 节点关联数据、防止内存泄漏。