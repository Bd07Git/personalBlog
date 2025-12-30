# 计算属性

计算属性（Computed Properties）用于处理复杂的逻辑。

## 基础示例

```javascript
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})