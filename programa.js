function fib(numbers){
    let serie = [0, 1];
    for (let i = 2; i <= numbers; i++){
        serie.push(serie[i - 1] + serie[ i - 2]);
    }
  return [serie, serie[numbers]];
}
console.log("Hola, Bienvenidos al Repositorio de project-javascript");

console.log("Serie completa: ",fib(15)[0]);
console.log("Resultado de fib: ",fib(15)[1]);



