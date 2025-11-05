import { Draggable } from "@hello-pangea/dnd"

interface MacacoProps {
    imageSrc: string,
    name: string,
    id: number,
    index: number
}

export function Macaco({ imageSrc, name, id, index }: MacacoProps) {
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (<div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="flex flex-col items-center justify-center 
                w-50 h-70 bg-white rounded-lg p-1 
                border border-gray-300 shadow-sm 
                hover:shadow-md transition-all duration-200"
            >
                <img
                    src={imageSrc}
                    className="w-full h-40 object-fill rounded-md"
                    alt={name}
                />
                <h1 className="font-bold text-center text-gray-800 mt-1 truncate w-full px-1 text-2xl text-wrap mt-2">
                    {name}
                </h1>
            </div>)
            }
        </Draggable>
    )
}