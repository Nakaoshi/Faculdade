var v1 = 6
var v2 = 6
var v3 = 1
   if((v1 + v2 > v3) && (v2 + v3 > v1) && (v1 + v3 > v2) ){
    if((v1 === v2) && (v2 === v3) &&  (v1 === v3)){
        console.log("equilatero")
    }else if(v1 == v2 || v2 == v3 || v3 == v1 ){
        console.log("isóceles")
    }else{
        console.log("escaleno")
    }
   }else{
       console.log("sim")
   }



