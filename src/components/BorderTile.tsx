const BorderTile = ({ id }: { id: number }) => {
    // tabuleiros de xadres possuem "coordenadas", compostas por letras e números
    // eixo x = letras, eixo y = numeros 
    // para indicar esses "eixos" na borda do tabuleiro, foi criada a função getContent, 
    // pois o board como um todo é feito de 100 tiles, 100 quadradinhos, onde os 64 do meio são de fato o tabuleiro de xadrez, 
    // enquanto os 36 restantes (que estão ao redor do  tabuleiro), são utilizados para indicar as "coordenadas"
    const getContent = () => {
        let content = "teste"
        // nessa primeira parte, verifica-se o id de quatro tiles específicos, que correspondem às "pontas"
        if (id == 1 || id == 10 || id == 91 || id == 100) {
            content = ""
            // os quatro tiles não vão receber nenhum "conteúdo" (letra ou número)
        } else if (id < 10) {
            content = String.fromCharCode(id + 63)
            // string.fromcharcode diz respeito a um comando que converte números em caracteres ascii, 
            // cada caractere tem um número que o representa, como no "sistema" A1-Z26, onde A é o número 1, e o Z, aúltima letra do alfabeto, recebe o número 26
            // a principal diferença é justamente este sistema ser muito maior, pois engloba todos os caracteres em ascii
            // o alfabeto maiúsculo começa no 65, ou seja, A=65, B=66, e assim por diante
            // nesta função, verificamos se o id dos tiles é menor que 10, lógicamente isso diz respeito sobre a primeira linha
            // pegamos o id do primeiro quadradinho que aparece é 2, então somamos o restante para chegar em 65 (+63), pois 65 = A
        } else if (id > 90) {
            // nessa parte da função, verificamos se o id dos quadradinhos é maior que 90, o que diz respeito sobre a última linha de tiles do board
            content = String.fromCharCode(id - 27)
            // novamente o string.fromcharcode é usado com o mesmo propósito
            // a diferença é que nesse caso o id do tile é 92, e foi necessario subtrair(-27) para chegarmos em 65 mais uma vez
        } else if (id % 10 == 1) {
            // nesse bloco da função, estamos lidando com as colunas, que vão receber os números
            // primeiro é verificado se o resto da divisão id/10 é 1
            content = Math.trunc(id / 10).toString()
            // assim, o id passa por mais uma divisão, dessa vez inteira, id/10, que o resultado vai retornar em string
        } else if (id % 10 == 0) {
            // na última verificação, ele busca por ids que quando dividisos por 10, o resto é igual a 0
            content = Math.trunc((id - 1) / 10).toString()
            // por exemplo, o primeiro tile que vai passar na sua verificação vai ser o 20, 
            // ou seja, ele vai passar por algumas operações: 20-1 = 19, trunc(19/10)=1, que é o conteúdo que a gente busca
        }
        return content
    }

    return (
        <div className={`bg-amber-800 aspect-square flex items-center justify-center font-bold text-amber-50`}>{getContent()}</div>
    )
}

export default BorderTile
