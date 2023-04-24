let comparaComthis = function (param) {
    console.log(this === param);
}

comparaComthis(global)

const obj = {} 
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global)
comparaComthis(obj)

let comparaComthisArrow = para => console.log(this === param)
comparaComthisArrow(global)
comparaComthisArrow(module.exports)

comparaComthisArrow = comparaComthisArrow.bild(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)
