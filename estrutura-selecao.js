const listaMarcas = ["ford", "ferrari", "lambo", "volks"];
const marca = process.argv[2];

if (marca ==="ford"){
    console.log("if Marca atendida!");
}else if(marca === "ferrari"){
    console.log("if Marca atendida!");
}else{
    console.log("if Marca não atendida!")
}

switch (marca){
    case "ford":
        console.log("switch - Marca atendida!");
        break;
    case "ferrari":
        console.log("switch - Marca atendida!");
        break;
    case "lambo":
        console.log("switch - Marca atendida!");
        break;
    case "volks":
        console.log("switch - Marca atendida!");
        break;
    default:
        console.log("switch - Marca não atendida!");
}