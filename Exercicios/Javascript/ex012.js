var hora = 7
console.log(`Agora são exatamente ${hora} horas`)

if(hora > 6 && hora < 11){
    console.log(`Bom dia`)
}else if(hora >=12 && hora < 18){
    console.log(`Boa Tarde`)
}else if(hora >= 19 && hora < 23){
    console.log(`Boa noite`)
}else{
    console.log(`Boa madrugada`)
}