function multiply(input){
    return new Promise(function(resolve, reject){
        console.log('calculating ' + input + '*' + input + '...');
        setTimeout(resolve, 500, input*input);
    });
}

function add(input){
    return new Promise(function(resolve, reject){
        console.log('calculating ' + input + '+' + input + '...');
        setTimeout(resolve, 500, input+input);
    });
}

var p = new Promise(function(resolve, reject){
    console.log('start new Promise...');
    resolve(123);
});
p.then(multiply)
 .then(add)
 .then(function(result){
     console.log('Got result: ' + result);
 })