// Callback Function
let square = (a, b, h) => (a + b) * h / 2;

//console.log("Dien tich : " + square(2,3,2));

let add = (a, b, cb) =>{
    setTimeout(() => {
        if( typeof a != 'number' || typeof b != 'number') {
            return cb(new Error("Loi tham so"));
        }
        cb(undefined, a + b);
    }, 0);
}

let mul = (a, b, cb) =>{
    setTimeout(() => {
        if( typeof a != 'number' || typeof b != 'number') {
            return cb(new Error("Loi tham so"));
        }
        cb(undefined, a * b);
    }, 0);
}
let div = (a, b, cb) =>{
    setTimeout(() => {
        if( typeof a != 'number' || typeof b != 'number') {
            return cb(new Error("Loi tham so"));
        }
        if( b == 0) return cb(new Error("Loi b == 0"));
        cb(undefined, a / b);
    }, 0);
}
let tinhS = (a, b, h, cb) => {
    add(a, b, (err, tong) => {
        if(err) return cb(err);
        mul(tong, h, (err, tich) => {
            if(err) return cb(err);
            div(tich, 2, (err, kq) => {
                if(err) return cb(err);
                cb(undefined, kq);
            })
        })
    })
}
tinhS(2,3,'2',(err, result) => {
    if(err) return console.log(err + ' ');
    console.log(result);
})