const Tile = ({id}: {id: number}) => {
    const getColor = () => {
        if (id % 10 == 0 || id % 10 == 1 || id < 10 || id > 90) {
            return "bg-amber-800"
        } else if ((id % 2 == 0 && Math.trunc(id / 10) % 2 == 0) || (id % 2 == 1 && Math.trunc(id / 10) % 2 == 1)) {
            return "bg-amber-100"
        } else {
            return "bg-orange-950"
        }
    }

    return (
        <div className={`${getColor()} min-w-4 w-12 aspect-square flex items-center justify-center`}></div>
    )
}

export default Tile
