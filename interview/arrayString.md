# 数组和字符串常用方法

## 1. 数组常用方法
- **改变原数组**：`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`。
- **不改变原数组**：`slice`, `concat`, `map`, `filter`, `reduce`, `every`, `some`, `forEach`。

### 核心方法：reduce
```javascript
// 累加
const sum = [1, 2, 3].reduce((prev, cur) => prev + cur, 0);
```

## 2. 字符串常用方法
- `split()`: 字符串转数组。
- `slice(start, end)`: 提取片段。
- `substring()` / `substr()`: 截取。
- `indexOf()` / `includes()`: 查找。
- `replace()` / `replaceAll()`: 替换。
- `trim()`: 去空格。