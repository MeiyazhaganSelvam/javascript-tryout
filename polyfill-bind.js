//call and apply works same but the input arguments for apply is ArrayList

let obj = {
 firstName : "M.S.",
 lastName : "Dhoni",
}

let printFunc = function (role, team) {
console.log(this.firstName + "----" + this.lastName + "----" + role + "----" + team);
}

let callPrintFunc = printFunc.bind(obj, "batsman");
callPrintFunc("CSK");

Function.prototype.customBind = function(...args) {
    let ref = this;
    let args1 = args.slice(1);
    return function (...args2) {
      ref.apply(args[0], [...args1,...args2]);
    }
}


let callPrintFuncByCustomBind = printFunc.bind(obj, "batsman");
callPrintFuncByCustomBind("CSK");


//console
//"M.S.----Dhoni----batsman----CSK"
//"M.S.----Dhoni----batsman----CSK"


