class cozinha {
    constructor(nomeDaCozinha, horaDeAbertura, horaDeFechamento, pratoPrincipal) 
    {
        this.nomeDaCozinha = nomeDaCozinha
        this.horaDeAbertura = horaDeAbertura
        this.horaDeFechamento = horaDeFechamento
        this.pratoPrincipal = pratoPrincipal
        this.Ingredientes = nomesIngrediente
    }
    printNomeCozinha() {console.log(this.nomeDaCozinha)}
    printHorarioDeAbertura() {console.log("Horário de abertura:" + this.horaDeAbertura + "h")}
    printHorarioDeFechamento() {console.log("Horário de fechamento:" + this.horaDeFechamento + "h")}
    printPratoPrincipal() {console.log("Prato Principal:" + this.pratoPrincipal)}
    printIngredientes() {console.log("Quantidade de ingredientes: " + this.Ingredientes.length + " itens")}
}
class ingrediente {
    constructor(nomeIngrediente, dataValidade) {
        this.nomeIngrediente = nomeIngrediente
        this.dataValidade = dataValidade
    }
    printIngrediente() {
       console.log(this.nomeIngrediente  +  " - Data de validade:" + this.dataValidade)
    }
}
{
    cozinha1 = new cozinha("Cozinha Mineira", 14, 20, "Feijoada", (nomesIngrediente = ["Feijão", "Farinha", "Arroz", "Carne de Porco", "Linguiça"]))
    cozinha1.printNomeCozinha()
    cozinha1.printHorarioDeAbertura()
    cozinha1.printHorarioDeFechamento()
    cozinha1.printPratoPrincipal()
    cozinha1.printIngredientes()
    console.log("\n\nLista de ingredientes Cozinha Mineira:\n")}
   
    {let dataFeijao = new Date(2023, 00, 23).toLocaleDateString("pt-BR")
    const ingredienteFeijao = new ingrediente("Feijão", dataFeijao)
    ingredienteFeijao.printIngrediente()
    let dataFarinha = new Date(2022, 06, 07).toLocaleDateString("pt-BR")
    const ingredienteFarinha = new ingrediente("Farinha", dataFarinha)
    ingredienteFarinha.printIngrediente()
    let dataArroz = new Date(2024, 03, 22).toLocaleDateString("pt-BR")
    const ingredienteArroz = new ingrediente("Arroz", dataArroz)
    ingredienteArroz.printIngrediente()
    let dataCarneDePorco = new Date(2022, 05, 12).toLocaleDateString("pt-BR")
    const ingredienteCarneDePorco = new ingrediente("Carne de Porco", dataCarneDePorco)
    ingredienteCarneDePorco.printIngrediente()
    let dataLinguica = new Date(2022, 02, 12).toLocaleDateString("pt-BR")
    const ingredienteLinguica = new ingrediente("Linguiça", dataLinguica)
    ingredienteLinguica.printIngrediente()

    console.log("\n---------------------------------------------\n")
}
{
    {const cozinha2 = new cozinha("Cozinha Chinesa", 10, 23, "Yakissoba", (nomesIngrediente = ["Champignon", "Brócolis", "Macarrão", "Carne"]))
    cozinha2.printNomeCozinha()
    cozinha2.printHorarioDeAbertura()
    cozinha2.printHorarioDeFechamento()
    cozinha2.printPratoPrincipal()
    cozinha2.printIngredientes()
    console.log("\n\nLista de ingredientes Cozinha Chinesa:\n")}
    
    {let dataChampignon = new Date(2022, 00, 30).toLocaleDateString("pt-BR")
    const ingredienteChampignon = new ingrediente("Champignon", dataChampignon)
    ingredienteChampignon.printIngrediente()
    let dataBrocolis = new Date(2022, 01, 07).toLocaleDateString("pt-BR")
    const ingredienteBrocolis = new ingrediente("Brócolis", dataBrocolis)
    ingredienteBrocolis.printIngrediente()
    let dataMacarrao = new Date(2023, 11, 04).toLocaleDateString("pt-BR")
    const ingredienteMacarrao = new ingrediente("Macarrão", dataMacarrao)
    ingredienteMacarrao.printIngrediente()
    let dataCarne = new Date(2022, 00, 29).toLocaleDateString("pt-BR")
    const ingredienteCarne = new ingrediente("Carne", dataCarne)
    ingredienteCarne.printIngrediente()}
} 