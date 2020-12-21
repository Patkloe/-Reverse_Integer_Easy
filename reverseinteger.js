 var reverse = function(x) {
     var ret = '';
        var pos = true;
        if(x > 0 ){ pos = true;}else{ pos = false;}
           if(pos){
              var test = Number(x).toString();
               for(var i = test.length -1 ; i >=0 ; i--){
                 ret = ret + test[i];
                }
               if(Number(ret) > Math.pow(2,31)){
                   return 0;
               }
              else{
                return Number(ret);
              }
           }
           else{
                var conv = (-1)*(x);
                var test = Number(conv).toString();
               for(var i = test.length -1 ; i >=0 ; i--){
                 ret = ret + test[i];
                }
               if (Number(ret) > Math.pow(2, 31)){
                    return 0;
               }
               else{
                  return (-1) * Number(ret);
               }
           }
};
