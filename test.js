// function tempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(77);
//       reject('City not found!');
//     },1000);
//
//   });
// }
//
// tempPromise('Toronto').then(function(temp){
//   console.log('Promise success: ' + temp);
// },function(err){
//   console.log('Promise Not success: ' + err);
// });

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a ==='number'&&typeof b === 'number'){
      resolve(a+b)
    }else{
      reject('Both has to be numbers!');
    }
  });
}


addPromise(1,23).then(function(result){
  console.log('The Result is :' + result);
},function(err){
  console.log('The Error is :' + err);
});
