var ter =10
  var a=0
  var b=1;
  var num = 0;

  if(ter<=2)
   num = ter-1;
  else
   for(var count=3 ; count<=ter ; count++){
    num = b + a;
    a = b;
    b = num;
    console.log(num)
   }

 
