# $.extend()和$.fn.extend()的对比  
jQuery为开发插件提拱的两个方法

## $.extend()  
$.extend( [deep ], target, object1 [, objectN ] );  

- deep类型: Boolean，其余参数为Object
- 只有一个参数target，将扩展jQuery本身的命名空间即为jQuery添加类方法，可以理解为添加静态方法，也就是全局方法。直接调用，前面不用任何对象，直接$.+方法名。所以jQuery实例对象是无法使用此方法添加的方法。

	Demo

		$.extend({
            deteQQ: function(str) {
                return /^[1-9]\d{4,11}$/.test(str);
            }
        });

		$.deteQQ('214586728'); //true
        $.deteQQ('a214586728'); //false
- 两个或两个以上的Object参数，其他对象来扩展和覆盖了第一个对象target。修改target的结构。

	Demo
		
		var person1 = {
            name: '小明',
            age: 30,
            height: 200,
            child: {
                name: '小亮',
                age: 6,
                height: 100
            }
        }
        var person2 = {
            name: '大明',
            age: 31,
            child: {
                name: '大亮',
                age: 5
            }
        }
        $.extend(person1,person2);
		//person2 = {
            name: '大明',
            age: 31,
            height: 200,
            child: {
                name: '大亮',
                age: 5
            }
        }
- 有第一个参数boolean，其余参数和前面两种情况一致，什么叫深层拷贝。在默认情况下，如果第一个对象的属性本身是一个对象或数组，那么它将完全用第二个对象相同的key重写一个属性，这些值不会被合并。如果将 true 作为该函数的第一个参数，那么会在对象上进行递归的合并。如果第一个对象的属性本身是一个对象或数组，也将进行扩展和覆盖。

	Demo
	
		var person1 = {
	            name: '小明',
	            age: 30,
	            height: 200,
	            child: {
	                name: '小亮',
	                age: 6,
	                height: 100
	            }
	        }
	        var person2 = {
	            name: '大明',
	            age: 31,
	            child: {
	                name: '大亮',
	                age: 5
	            }
	        }
	        $.extend(true,person1,person2);
	        //
	        person2 = {
	            name: '大明',
	            age: 31,
	            height: 200,
	            child: {
	                name: '大亮',
	                age: 5,
	                height: 100
	            }
	        }

## $.fn.extend()
$.fn.extend( object )  

- 参数是一个对象，用来合并到jQuery的原型。
- 文档的解释是jQuery.fn.extend()方法继承了jQuery原型($.fn)对象，以提供jQuery原型新的方法，可以链式调用jQuery()函数。其实已经很清楚了，在源代码中`jQuery.fn = jQuery.prototype`，所以此方法是对jQuery原型进行扩展。jQuery实例就可以调用添加的方法。

	Demo
	
		$.fn.extend({
	            tip: function(str) {
	                $(this).on('click',function(){
	                    console.log($(this)[0].tagName);
	                })
	            }
	        });
	        $('html').tip();//html