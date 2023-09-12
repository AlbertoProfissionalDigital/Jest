

Calculadora = require("../src/calculadora");



describe('Verificar classe Calculadora', ()=>{

    let calculadora;

    beforeEach (()=>{
       calculadora = new Calculadora ();
     })
})

test('CN - Testar Calculadora com valores Positivos', ()=> {
    expect(calculadora.soma(2,2)).toBe(4);
    expect(calculadora.subtracao(4,2)).toBe(2);
    expect(calculadora.multiplicacao(4,2)).toBe(8);
    expect(calculadora.divisao(4,2)).toBe(2);
})

test('CN - Testar Calculadora com valores Negativos', ()=> {
    expect(calculadora.soma(-2,2)).toBe(0);
    expect(calculadora.subtracao(-4,2)).toBe(-6);
    expect(calculadora.multiplicacao(-4,2)).toBe(-8);
    expect(calculadora.divisao(-4,2)).toBe(-2);
})

test('CN - Testar Calculadora com entradas invalidas', ()=> {
    expect(calculadora.divisao(4,0)).toBe('Não é permitido divisão por zero');
    expect(calculadora.soma($,8)).toBe('Não foi possível realizar essa operação');
    expect(calculadora.subtracao($,8)).toBe('Não foi possível realizar essa operação');
    expect(calculadora.multiplicacao($,8)).toBe('Não foi possível realizar essa operação');
})