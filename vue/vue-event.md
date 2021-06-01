# event

- 事件调用函数时加括号

      if (!handler.modifiers) {
          return simplePathRE.test(handler.value)
            ? handler.value
            : `function($event){${handler.value}}`
      }
上面这段代码就是VUE用来处理event的带括号的话 生成的代码是  on: {
       "click": function($event) {
             doXX()
          }
    }
不带括号是on: { "click": doXX }
