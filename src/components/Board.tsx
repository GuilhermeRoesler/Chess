import BorderTile from "./BorderTile";
import Tile from "./Tile"

const Board = () => {
    // a lista items vai receber os valores de um array com 100 itens [0, 1, ..., 99], 
    // quando o items for usado, ele vai lançar o index daqueles itens+1 (pq o index começa no 0)
    const items = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
        // retorna uma div que dentro dela vai ser usado o items (q é um parametro?? conferir com gui) 
        <div className="grid grid-cols-10 rounded-4xl overflow-hidden">
            {/* o items vai ser iterado (.map é oq itera) (iterado é passado de linha em linha) com o id? com base no id?  */}
            {items.map((id) => (
                <>
                    {/* a exclamação no começo indica negação, tudo o que vem dps dela será "trocado" */}
                    {!(id % 10 == 0 || id % 10 == 1 || id < 10 || id > 90) ? (
                    // o que seria "para executar tem q dar check em todas essas coisas" agota é "se nao der check em nenuma dessas coisas, aí ele procede"
                        <Tile key={id} id={id} />
                    ) : (
                        <BorderTile key={id} id={id} />
                    )}
                </>
            )
            )}
        </div>
    )
}

export default Board