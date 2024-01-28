const calc = require("../../models/calc");

test("somar 2 + 2 deveria retornar 4", ()=>{
  const resultado = calc.somar(2, 2);
  expect(resultado).toBe(4);
})

test("somar 5 + 100 deveria retornar 105", ()=>{
  const resultado = calc.somar(5, 100);
  expect(resultado).toBe(105);
})


test("string 'banana' + 100 deveria retornar 'Erro'" , ()=>{
  const resultado = calc.somar("banana", 100);
  expect(resultado).toBe("Erro");
})

test("100 + string 'banana'deveria retornar 'Erro ", ()=> {
  const resultado = calc.somar(100, "banana");
  expect(resultado).toBe("Erro");
})