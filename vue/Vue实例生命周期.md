## 在vue中生命周期大的分为4个阶段：
- create 创建 创建vue实例并初始化
- mount 挂载 把vue实例和视图进行关联
- update 更新（循环）监听处理数据与视图的变化
- destroy 销毁 销毁vue实例

## 钩子函数
vue为4个大的阶段提供了可编程的接口，可以在4个的某个时段内写入一些自己的逻辑，vue是通过配置中一个叫   生命周期 - 钩子函数  的选项来实现的：

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed