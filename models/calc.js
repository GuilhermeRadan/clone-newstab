function soma(x, y){
  if (typeof x  !== "number" || typeof y !== "number"){
    return "Erro";
  }
  return x + y;
}

exports.somar = soma;
