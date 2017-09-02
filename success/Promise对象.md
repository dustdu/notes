---
title: Promise对象
date: 2017-08-23 22:23:53
categories: ES6
tags: 
    - js异步
    - ES6
---
## Promise：承诺

	new Promise(
	    /* executor */
	    function(resolve, reject) {...}
	);
- 解决js中异步编程的问题
- Promise对象（executor）代表一个异步操作，会维护一个状态。有三种状态：Pending（进行中）、Fulfilled（已成功）和Rejected（已失败）。此状态不受外界影响。
- Promise对象的状态改变，只有两种可能：从Pending变为Fulfiled和从Pending变为Rejected。这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
- 新建之后就会立即执行，无法取消Promise，无法中途取消。如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。当处于Pending状态时，无法得知目前进展到哪一个阶段。

## 使用Promise
- Promise对象是一个构造函数，如下使用：

		var pro = new Promise(function(resolve, reject) {
		  	// ... 
			// ...
		  	if (/* 异步操作成功 */){
		    	resolve(value);
		  	} else {
		    	reject(error);
		  	}
		});

- 构造函数的参数是一个带有resolve和reject两个参数的函数。
	- 此参数在生成Promise实例时同步执行（此参数在Promise构造函数返回新建对象前被调用，所以实例对象状态在对象返回时就确定了），被传递resolve和reject函数作为参数。
	- 异步操作成功时调用resolve 函数，将promise的状态改为fulfilled(完成)，将异步操作的结果，作为参数传递出去。异步操作失败时调用reject 函数，将promise的状态改为rejected（失败），将异步操作报出的错误，作为参数传递出去。。
	- 如果此参数抛出一个错误，那么该promise 状态为rejected。参数的返回值被忽略。
	- 一个异步操作的结果是返回另一个异步操作，状态就会传递给传递者

### Promise.prototype.then() 
- Promise对象有一个then方法，当前置任务（Promise对象）完成的时候，会调用该方法，then方法接收两个参数，都是函数。第一个参数是当状态为Fulfilled时候执行；第二个参数是当状态为rejected时候执行。
	- then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。
	- then方法返回的是一个新的Promise实例（不是原来那个Promise实例）。因此可以采用链式写法
	- 后续的then方法中如果有多个不同的函数，并且也有异步操作，这时可以返回一个Promise对象，保证同步
	
	Demo
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Title</title>
		</head>
		
		<body>
		    <script>
		
		        var b = 10;
		        new Promise((resolve, reject) => {
		
		            setTimeout(() => {
		                b += 10;
		                resolve();
		//                reject();
		            }, 1000);
		
		        }).then(function() {
		            console.log(b);
		            return new Promise((resolve, reject) => {
		                setTimeout(() => {
		                    b *= 2;
		                    resolve();
		                }, 1000);
		            });
		        }).then(function() {
		            console.log(b);
		            return new Promise((resolve, reject) => {
		                setTimeout(() => {
		                    b *= b;
		                    resolve();
		                }, 1000);
		            });
		        }).then(function() {
		            console.log(b);
		        },function() {
		            console.log('失败了');
		        });
		    </script>
		</body>
		</html>
	- 在调用resolve，reject两个函数的时候，把需要传递给后续的then方法的数据作为其参数就可以

### Promise.prototype.catch（）
- 与Promise.prototype.then(null, rejection)作用一样，只处理拒绝的情况。
- 只要有一个Promise的状态变成了rejected，那么就会被catch方法捕获，执行catch，返回失败结果，否则，它将显示为成功。
- 一般，不在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
- 在调用resolve，reject两个函数的时候，把需要传递给后续的catch方法的数据作为其参数就可以

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	</head>
	
	<body>
	    <script>
	        var b = 10;
	        new Promise((resolve, reject) => {
	
	            setTimeout(() => {
	                b += 10;
	                resolve();
	//                reject();
	            }, 1000);
	
	        }).then(function() {
	            console.log(b);
	            return new Promise((resolve, reject) => {
	                setTimeout(() => {
	                    b *= 2;
	                    resolve();
	                }, 1000);
	            });
	        }).then(function() {
	            console.log(b);
	            return new Promise((resolve, reject) => {
	                setTimeout(() => {
	                    b *= b;
	//                    resolve();
	                    reject();
	                }, 1000);
	            });
	        }).then(function() {
	            console.log(b);
	        }).catch(function() {
	            console.log(1);
	        });
	    </script>
	</body>
	</html>
### Promise.all(iterable)
- 在一个Promise任务中需要处理多个异步任务，但是执行时间有是不确定的。后续的任务需要这几个异步任务全部完成以后再执行，那么就需要用到Promise中提供的all方法来实现
- 把两个不同的异步任务分别包装在一个Promise对象中，如果不是，会调用Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。然后调用Promise对象静态方法all，把上面多个不同异步Promise作为数组传递给all方法的参数。 这个时候Promise.all方法中会维护一个状态，这个状态是根据传入的多个异步任务的状态共同决定的。当多个异步任务的状态都变成了fulfilled，那么all的状态才是fulfilled，但是只要有一个异步任务的状态变成了rejected，那么all的状态就会变成rejected
- Promise.all方法的参数可以不是数组，是一个可迭代对象。

Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	</head>
	
	<body>
	    <script>
	        var p1 = new Promise((resolve, reject) => {
	            let a = 1;
	            setTimeout(() => {
	                a++;
	//                reject('one');
	                resolve(a);
	            }, Math.random() * 1000);
	        });
	
	        var p2 = new Promise((resolve, reject) => {
	            let b = 2;
	            setTimeout(() => {
	                b++;
	                resolve(b);
	            }, Math.random() * 1000);
	        });
	        Promise.all([p1, p2]).then(([a, b]) => {
	            console.log(a, b);
	        }).catch((err) => {
	            console.log(err);
	        })
	
	    </script>
	</body>
	</html>

### Promise.race()
- 参数和Promise.all(iterable)一样，一个可迭代对象。
- 把几个不同的异步任务分别包装在一个Promise对象中，如果不是，会调用Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。然后调用Promise对象静态方法race，把上面多个不同异步Promise作为数组传递给all方法的参数。Promise.race方法中会维护一个状态，有一个实例率先改变状态，p的状态就跟着改变。

### Promise.resolve()
- 将现有对象转为Promise对象
- 参数
	- 如果参数是Promise实例，Promise.resolve将、原封不动地返回这个实例。
	- 参数是一个thenable对象（具有then方法的对象），Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
	- 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
	- Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象。

### Promise.reject()
- 返回一个新的 Promise 实例，状态为rejected。
