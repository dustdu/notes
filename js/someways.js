
//获取一个月第一天周几
function WeekDay(year,month) {
    toDate = new Date(year,month+1,1,-1);  
    toDate.setDate(1);
    toDate.getDay();
    return toDate.getDay();
}

//获取一个月天数
function allDay(year,month) {
    toDate = new Date(year,month+1,1,-1);
    toDate.getDate();
    return toDate.getDate();
}

//生成Tbody内容
function toTbody(el,col,row) {
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
    el.innerHTML = tbodyArr;
}

//生成Table内容
function toTable(el,col,row) {
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