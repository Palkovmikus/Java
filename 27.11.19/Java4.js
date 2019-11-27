function toStr(el=new Array()){
    var ret='';
    el.forEach(function(e) { //не совсем понял как сработало.
        ret+=e;
        //console.log(e);
    });
    return ret;
}
//
var t=document.getElementById('target');
var a = new Array('*');
//var b = new Array();
t.innerHTML+=a[0]+'<br>';
while(a.length<33){
    //b = b.concat(' ');
    a = a.concat('*' , '*');
    t.innerHTML+=(toStr(a)/*+toStr(b)*/+'<br>');
}; // стилизировать по центру програмно не получилось,
// только через text-align

// Попытка 2 не удалась, ошибка в коде
// не смог понять где, а вроде всё правильно

/*var t2=document.getElementById('target2');
function printEl(c, h=31){
    var tree=new Array();
    tree.fill(' ', h-1/c%2, c);
    tree.fill('*', c);
    console.log(tree);
    document.write(toStr(tree)+'<br>');
}
var c = 1;
do{
    printEl(c);
    c++
}while(c<11);*/
for (let i = 1; i <=32; i+=2){ //  делаем цикл основание в 30 ел
    for (let n = 1; n < i; n+=2) 
    //  делаем вложенный цикл который с каждой итерацией уменьшает i на 2
    document.write('*' + n); 
    document.write('</br>');
}