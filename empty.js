function sum() {
    let sum = 0; 

    for (let i = 0; i < arguments.length; i++) {
        let num = arguments[i];
        sum += num; 
    }

    return sum; 
}

function sum2(...args) {
    let sum = 0; 
    let arg2 = [...args];

    for (let i = 0; i < arg2.length; i++) {
        let num = arg2[i];
        sum += num; 
    }

    return sum; 
}


Function.prototype.myBind = function(context, ...bindArgs) {
    let that = this

    return function (...callArgs) {
        return that.call(context, ...bindArgs, ...callArgs)
    }
}

