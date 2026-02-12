import BorderTile from "./BorderTile";
import Tile from "./Tile"

const Board = () => {
    const items = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
        <div className="grid grid-cols-10 rounded-4xl overflow-hidden">
            {items.map((id) => (
                <>
                    {!(id % 10 == 0 || id % 10 == 1 || id < 10 || id > 90) ? (
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
