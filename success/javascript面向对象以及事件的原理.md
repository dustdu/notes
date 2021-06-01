---
title: javascript面向对象以及事件的原理
date: 2017-08-02 20:10:21
tags:
    - javascript
    - js面向对象
    - 事件原理
categories: javascript
thumbnail: 
---
## 面向对象
关注的是特征（具有的特性）。面向对象不是没有过程，而是不关注过程。

### 创建对象
在js中，创建一个空的对象有两种方式  

- `new Object()`  
- `{}`  
在开发中，可能会创建很多相同特征（类型）的对象，那么我们会把创建相同特征的对象的过程进行封装

### new
- 运算符
- new只能和函数配合使用,用来创建对象
- 当我们通过new的方式去调用执行一个函数的时候：  
*如果该函数不需要传入任何参数，可以省略()*
	1. 在函数内部自动创建一个空的对象
	2. 把该函数的this指向该对象  
		*创建对象并赋值给this是js内部实现的，我们不能给this赋值，会报错*
	3. 函数执行完成自动返回该对象
- 当我们通过new的方式去调用执行一个函数的时候，返回：  
无论是否有return，当我们通过new的方式去调用一个函数的的时候，该函数一定会返回对象
	1. 如果没有return，返回内部创建的空对象
	2. 如果有return
		1. return的是非对象，返回内部创建的空对象
		2. return的是对象，返回的就是return的对象
- 所以为创建相同特征的对象的过程进行封装，并用new进行实例化对象时，不需要在函数中进行创建函数和返回结果

### 构造函数
- 把new执行的函数称为构造函数
- 构造函数与普通函数的区别就是是否使用new来执行
- 为了和普通函数做个区分，通常情况下，我们会把即将作为构造函数的函数使用大驼峰式命名

### 类、构造函数、对象（实例）
- 构造函数 <-> 类 （在ES6和ES7中已经有class类）
- 类：类型，对具有相同特征的对象的抽象描述
- 对象：由类创建出来的具体对象（实例），也称为实例化对象
- 构造函数：类中用来创建对象的具体函数，类创建对象的时候调用的初始化函数
- 同一类的实例化对象都拥有相同的特征，不同的对象相同的特征也会有不同的值，每一个对象都拥有属于自己的特征值，但是有时候，对象的一些特征所拥有的值其实也是一样，那么如果每个对象对这样的相同值的特征也是独立保存一份的话，就会照成资源浪费（内存占用），所以需要去优化这个问题

### 原型（prototype）、原型链  
1. 当一个函数被创建的时候，该函数下自动会有一些属性（函数也是对象），其中有一个属性，名称：prototype，他的值是一个object对象，通常就把构造函数创建的对象所拥有的共同特征保存在这些对象的构造函数的prototype属性下
2. 当一个实例化对象被创建的时候，对象自动会创建一个属性，名称：__proto__，该属性也是一个对象，该属性对应该对象的构造函数的prototype
3. 调用一个对象下的属性或方法的时候，对象首先会在自身上查找是否该属性或方法，如果有则调用，如果没有，则会查找自己的__proto__属性上是否有给属性或方法即该对象的构造函数的prototype
4. 为了使对象共有的特征方法维护和管理，所以
	- 通常把对象私有属性或方法放置在每个对象自身上
	- 通常把对象公有（共有）的属性或方法放置在这些对象的构造函数的原型下
5. prototype下的属性和方法
	- toString();  
		- Object对象prototype下的一个方法,所有对象都继承该方法
	- el.hasOwnProperty('x');  
		- 判断x属性（方法）是否是某个对象自有的，即非原型链上的
		- 返回布尔值
	- a.constructor  
		- 可写
		- 返回a对象的构造函数
	- a instanceof b  
		- 运算符  
		- 判断a对象是否是b构造函数的实例化对象
		- 返回布尔值
6. 只有函数对象有 prototype 属性（一般自己为对象加的不算），prototype都是Object的实例。  
	1. 当创建一个函数时，在js内部这样创建

			var Foo = new Function('v', 'this.y = v');  
			第一个参数是该函数参数，第二个为函数内容。  
	2. Foo是Function函数的一个实例，所以Foo的__proto__指向Function的prototype，他的实例Foo也是一个函数，所以他们都有prototype。（Object、Array、RegExp、Date等也是函数，Math就仅仅是一个new Object(),不是函数），
	3. 构造函数的prototype，默认情况下就是一个new Object()，所以prototype的__proto__属性指向Object的prototype，还添加了一个constructor属性，指向构造函数自己。除了Object.prototype这个对象__proto__为Null，其他所有的对象都会有__proto__属性指向其构造函数的prototype。

### 内置对象  
js内部提供了已经定义好的对象（Array,Date,RegExp,String,Number,Boolean等），
同时js定义好了对应的一些构造函数。  
运行以下代码：

   	var str = 'abcd';
	str.a = 100;
	str.length = 10000;
	console.log(str.a);
	console.log(str.length);
> undefined  
> 4

字符串，数字等基础类型数据是没有属性和方法的。但如果创建了一个字符串（非字符串对象），却又可以调用他length，indexOf等属性或方法？？？如下：

### 包装对象
当我们去调用字符串，数字，布尔值这三种基础数据类型的属性和方法的时候，他们本身是不具备属性和方法的，但是在js内部，会自动的去调用（new）构造函数把他们的值作为参数进行传入，转换成对象，然后执行对应属性或方法，并把结果进行返回，一旦引用结束，这个对象就会销毁。  
一共有三个：
	
	String
	Number
	Boolean

### 继承(继承方式有很多)
#### 类式继承

	function Person() {
	        this.name = 'motao'
	    }
	    Person.prototype.eat = function() {
	        console.log('eat');
	    }
	    function Teacher() {
	        Person.call(this);
	    }
- 一个构造函数继承时要用call改变this指向（否则指向一般是window）  
- 继承属性时，不能用赋值，对象赋值会改变原始对象

#### 原型继承

	var obj = {
        x: 100
    }
    function Foo() {}
    Foo.prototype = obj;
    var obj2 = new Foo();
    console.log(obj2.x);



### 深度克隆（把一个对象完整地复制到另一个对象，并且这两个对象分别放在内存的不同地方。不会相互影响）和浅度克隆  
> 在继承中经常对原型进行复制，但原型存储的是对象的引用地址，所以需要处理

我们知道js中的数据类型按照标准划分分为：

- 基本类型: number/string/boolean/undefined/null
- 对象类型（复合类型）:object(包含Array、Function)

基本类型存储的是对象的实际数据，而对象类型存储的是对象的引用地址（对象的实际内容单独存放在内存中），由于他们存储方式的不同就需要不同的处理方式才能让复制出来的数据对原始数据不会产生影响。

- 浅度克隆：基本类型为值传递，复制出来的对象和原始对象不会相互影响，直接赋值即可。
- 深度克隆：对象类型在直接赋值时，复制出来的对象和原始对象相互影响，说以要将所有元素或属性均完全复制，与原对象完全脱离，使新对象和原对象不会相互影响。（函数的克隆会在内存单独开辟一块空间，互不影响，不需要进行深度克隆）  

Demo
	
	//深度克隆函数（参数传入原始对象）
	function extend(originObject) {
	    // 判断originObject的原始类型，对新对象进行对应的初始化
	    var newObject = Array.isArray(originObject) ? [] : {};
	    for (var property in originObject) {
	        // 如果当前数据是对象的话，那么就需要进行深度克隆
	        // 如果typeof来判断数据类型，是有问题的，null的typeof结果也是object，所以需要排除null值的深度克隆
	        if (typeof originObject[property] == 'object' && originObject[property] !== null) {
	            // 核心：递归克隆
	            newObject[property] = extend(originObject[property]);
	        } else {
	            newObject[property] = originObject[property];
	        }
	
	    }
	    return newObject;
	}

### 事件基本原理
- 对象提供一些特殊的属性，通常on开头的，这些属性接收函数类型值，当对象中某段代码执行（某个自定的事情发生的时候），对象就会去执行对应的这些特性的属性，那么我们在外部创建这个对象以后，就可以给对应的这些属性赋值一个函数，当指定的事件发生的时候执行该函数
- 自定义事件默认行为：  
某个事件发生的时候，默认会执行的代码
- 事件多函数绑定，可以定义不同数组，并为原型添加监听函数，在函数中判断事件，将事件函数添加到数组中去，在自定义事件发生时遍历数组执行函数
- 移除制定事件，操作同上，不过要在监听函数中filter事件。（在移除匿名函数时依然将被移除的事件filter，会出现问题）

自定义事件Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	    <style>
	        #div1 {
	            width: 100px;
	            height: 100px;
	            background: red;
	            position: absolute;
	            left: 0;
	            top: 0;
	        }
	    </style>
	</head>
	
	<body>
	    <div id="div1"></div>
	    <script>
	        function Drag(options) {
	            this.opt = {
	                ele: options.ele || null,
	                isLimit: options.isLimit || false
	            };
	
	            this.ondragstart = null;
	            this.ondrag = null;
	            this.ondragend = null;
	
	//            this.ele = opt.ele;
	            this.disX = 0;
	            this.disY = 0;
	
	            var _this = this;
	
	            this.opt.ele.onmousedown = function(e) {
	                _this.down(e);
	
	                document.onmousemove = function(e) {
	                    _this.move(e);
	                };
	
	                document.onmouseup = function() {
	                    _this.up();
	                };
	
	                return false;
	            }
	        }
	        Drag.prototype = {
	            constructor: Drag,  //如果使用一个新的对象覆盖原有的prototype，那么一定要把constructor属性手动的补全
	            down: function(e) {
	                this.disX = e.clientX - this.opt.ele.offsetLeft;
	                this.disY = e.clientY - this.opt.ele.offsetTop;
	
	                if (typeof this.ondragstart == 'function') {
	                    this.ondragstart();
	                }
	            },
	            move: function(e) {
	
	                var L = e.clientX - this.disX;
	                var T = e.clientY - this.disY;
	                if (this.opt.isLimit) {
	                    if (L < 0) {
	                        L = 0;
	                    } else if (L > document.documentElement.clientWidth - this.opt.ele.offsetWidth) {
	                        L = document.documentElement.clientWidth - this.opt.ele.offsetWidth;
	                    }
	                    if (T < 0) {
	                        T = 0;
	                    } else if (T > document.documentElement.clientHeight - this.opt.ele.offsetHeight) {
	                        T = document.documentElement.clientHeight - this.opt.ele.offsetHeight;
	                    }
	                }
	
	                this.opt.ele.style.left = L + 'px';
	                this.opt.ele.style.top = T + 'px';
	
	
	                var result;
	                var result2;
	
	                if (typeof this.ondrag == 'function') {
						//自定义的内置事件对象
	                    var event = {
	                        left: L,
	                        top: T,
							//自定义默认事件
	                        preventDefault: function() {
	                            result2 = false;
	                        }
	                    };
	
	                    result = this.ondrag(event);
	                }
	
	                // 下面这段代码是ondrag事件发生的时候默认执行的
	                if (result !== false && result2 !== false) {
	                    console.error(L, T);
	                }
	
	            },
	            up: function() {
	                document.onmousemove = document.onmouseup = null;
	                if (typeof this.ondragend == 'function') {
	                    this.ondragend();
	                }
	            }
	        };
	
	        var div1 = document.querySelector('#div1');
	
	        var d1 = new Drag({
	            ele: div1,
	            isLimit: false
	        });
			//自定义事件
	        d1.ondragstart = function() {
	            console.log(1);
	        }
	        d1.ondrag = function(e) {
	            console.log(e.left, e.top);
	//            e.preventDefault();
	//            return false;
	        }
	        d1.ondragend = function() {
	            console.log(2);
	        }
	
	    </script>
	</body>
	</html>

移除绑定事件Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	</head>
	
	<body>
	<script>
	    function Person(gender) {
	        this.age = 0;
	        this.name = '';
	        this.gender = gender;
	
	        this.timer = null;
	
	        this.growup();
	
	        this.eventHandles = {
	            growup: {
	                _cbs: []
	            }
	        };
	    }
	    Person.prototype.setName = function(name) {
	        this.name = name;
	    };
	    Person.prototype.growup = function() {
	        var _this = this;
	        this.timer = setInterval(function() {
	            _this.age++;
	
	            for (var ename in _this.eventHandles.growup) {
	                if (_this.eventHandles.growup.hasOwnProperty(ename)) {
	                    _this.eventHandles.growup[ename].forEach(function(callback) {
	                        callback.call(_this);
	                    })
	                }
	            }
	        }, 200);
	    };
	    Person.prototype.addEventListener = function(name, cb) {
	        if (typeof cb == 'function') {
	
	            // name 的值可以直接是事件名称，也可以是事件名称加.，然后跟上自定义的一些字符串 growup.a
	            var names = name.split('.');
	            // names = ['growup', 'a']
	            var ename = names[0];
	            var extname = names[1];
	
	            // 根据names的长度，去判断是一个名称，还是带了.的名称
	            if (!extname) {
	                this.eventHandles[ename]._cbs.push(cb);
	            } else {
	                if (!this.eventHandles[ename][extname]) {
	                    this.eventHandles[ename][extname] = [];
	                }
	                this.eventHandles[ename][extname].push(cb);
	            }
	
	        }
	    };
	    Person.prototype.removeEventListener = function(name) {
	        var names = name.split('.');
	        // names = ['growup', 'a']
	        var ename = names[0];
	        var extname = names[1];
	
	        if (!extname) {
	            this.eventHandles[ename] = {
	                _cbs: []
	            }
	        } else {
	            delete this.eventHandles[ename][extname];
	        }
	    };
	//    Person.prototype.on = Person.prototype.addEventListener;
	
	    var mt = new Person('男');
	    mt.setName('小明');
	
	    function fn() {
	        if (this.age == 5) {
	            console.log('该上学了');
	        }
	    }
	
	    mt.addEventListener('growup.c', function() {
	        console.log(1);
	    });
	    mt.addEventListener('growup.b', function() {
	        console.log(2);
	    });
	    mt.addEventListener('growup.a', function() {
	        console.log('a');
	    });
	
	//    mt.removeEventListener('growup');
	    mt.removeEventListener('growup.c');
	
	</script>
	</body>
	</html>