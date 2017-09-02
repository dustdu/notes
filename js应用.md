## 在n个数中随机出现m个数
Demo

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Title</title>
	</head>
	
	<body>
	<script>
	    var result = [];
	//    for (var i=0; i<500000;) {
	//        var v = Math.ceil(Math.random() * 999999 + 1);
	//        if ( result.indexOf( v ) == -1 ) {
	//            result.push(v);
	//            i++;
	//        }
	//    }
	    for (var i=1; i<=1000000; i++) {
	        result.push(i);
	    }
	    result.sort(function() {
	        return Math.random() - 0.5;
	    });
	    result.length = 500000;
	</script>
	</body>
	</html>

## 生成Table
Demo

	function getTable(el,col,row) {
	        var tableArr = '';
	        tableArr = '<thead><tr>';
	        for (var i = 0; i < col*row; i++) {
	            if (i<row) {
	                tableArr += '<th>'+ i +'</th>';
	            }else{
	                 tableArr += '<td>'+ i +'</td>';
	            }
	            if (i == row-1) {
	                tableArr += '</tr></thead><tbody><tr>';
	            }else if (i == col*row-1) {
	                tableArr += '</tr></tbody>';
	            }else if ((i+1)%row == 0) {
	                tableArr += '</tr><tr>';
	            }
	        }
	        el.innerHTML = tableArr;
	    }

## 只生成Tbody内容
Demo

    function getTbody(el,col,row) {
        var tbodyArr = '';
        tbodyArr = '<tr>';
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < row; j++) {
                tbodyArr += '<td></td>';
                if (j == row-1) {
                    tbodyArr += '</tr><tr>';
                }
            }
        }
         tbodyArr = '</tr>';
         el.innerHTML = tbodyArr;
    }

## 获取一个月天数
Demo

    function allDay(year,month) {
        toDate = new Date(year,month+1,1,-1);
        toDate.getDate();
        return toDate.getDate();
    }

## 获取天数和周几
Demo

    function WeekDay(year,month) {
        toDate = new Date(year,month+1,1,-1);  
        toDate.setDate(1);
        toDate.getDay();
        return toDate.getDay();
    }