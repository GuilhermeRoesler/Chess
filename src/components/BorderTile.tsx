const BorderTile = ({id}: {id: number}) => {
    const getContent = () => {
        let content = "teste"
        if (id == 1 || id == 10 || id == 91 || id == 100) {
            content = ""
        } else if (id < 10) {
            content = String.fromCharCode(id+63)
        } else if (id > 90) {
            content = String.fromCharCode(id-27)
        } else if (id % 10 == 1) {
            content = Math.trunc(id / 10).toString()
        } else if (id % 10 == 0) {
            content = Math.trunc((id-1) / 10).toString()
        }
        return content
    }

    return (
        <div className={`bg-amber-800 min-w-4 w-12 aspect-square flex items-center justify-center font-bold text-amber-50 text-2xl`}>{getContent()}</div>
    )
}

export default BorderTile
