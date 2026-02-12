const Tile = ({id}: {id: number}) => {
// criamos uma função getColor: se o resto da divisão id/10 for zero, ou se o resto da divisão id/10 for 1, ou se o id for menor que 10, ou se id for maior que 90.
    const getColor = () => {
        if (id % 10 == 0 || id % 10 == 1 || id < 10 || id > 90) {
            // para entao ser colorido dessa cor "média"
            return "bg-amber-800"
        // pq se nao for isso, vai ser: se o resto da divisão id/2 for 0 (ou seja, par), 
        // E se a divisão inteira (id/10) vai ter um resultado e o resto da divisão desse resultado/2 for 0
        // OU se o id for ímpar, e dividir ele por 10, pegar esse resultado e dividir por 2, e o resto for 1,
    } else if ((id % 2 == 0 && Math.trunc(id / 10) % 2 == 0) || (id % 2 == 1 && Math.trunc(id / 10) % 2 == 1)) {
        return "bg-amber-100"
        // então pinta ele da cor clara
        } else {
        // caso contrário, 
        return "bg-orange-950"
        // pinta da cor escura
        }
    }

    return (
        // então FINALMENTE renderiza o quadradinho com sua respectiva cor com base na função getColor 
        <div className={`${getColor()} min-w-4 w-12 aspect-square flex items-center justify-center`}></div>
    )
}

export default Tile
