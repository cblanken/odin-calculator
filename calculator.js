// Calculator functions
function Add (a, b, precision = 2) {
    const res = Number(a) + Number(b);
    return res.toPrecision(precision);
}

function Sub(a, b, precision = 2) {
    const res = Number(a) - Number(b);
    return res.toPrecision(precision);
}

function Mul(a, b, precision = 2) {
    const res = Number(a) * Number(b);
    return res.toPrecision(precision);
}

function Div(a, b, precision = 2) {
    const res = Number(a) / Number(b);
    return res.toPrecision(precision);
}

