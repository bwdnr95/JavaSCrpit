function order(arrParam){
    for(var i = 0; i<arrParam.length-1; i++){
        for(var j=0; j<(arrParam.length-1)-i;j++){
            if(arrParam[j] > arrParam[j+1]){
                temp = arrParam[j];
                arrParam[j] = arrParam[j+1];
                arrParam[j+1] = temp;
            }
        }
    }
}

function setOrdering(arr){	
    for(var i =0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= temp;
            i=-1;
           
        }
    }
}
function showArray(arrParam){		
    for(var i=0 ; i<arrParam.length ; i++){
        document.write(arrParam[i]+"&nbsp;");
    }
    document.write("<br/>");
}