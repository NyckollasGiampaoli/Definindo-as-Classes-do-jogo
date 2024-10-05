//Usei os valores como exemplo
let heroi = {
    nome: "Nyckollas",
    idade: 15,
    tipo: "ninja",
}

console.log(atacar());
function atacar(){
    let ataque;
    switch(heroi.tipo){
        case (heroi.tipo = "guerreiro"):
        ataque = "espada";
        break;
        case (heroi.tipo = "mago"):
        ataque = "magia";
        break;
        case (heroi.tipo = "monge"):
            ataque = "artes marciais";
            break;
        case (heroi.tipo = "ninja"):
            ataque = "shuriken";
            break;
        default:
            console.log("Não existe esse tipo");
    }
        console.log(`o ${heroi.tipo} atacou usando ${ataque}`);
}
