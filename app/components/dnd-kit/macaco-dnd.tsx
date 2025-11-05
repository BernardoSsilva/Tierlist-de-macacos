import { useDraggable } from "@dnd-kit/core"

interface MacacoProps {
    imageSrc: string
    name: string
    id: number
    index: number
}

export function DndKitMonkey({ imageSrc, name, id, index }: MacacoProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id.toString(),
    });

    const style = {
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        opacity: isDragging ? 0.5 : 1,
        transition: "transform 0.2s ease",
    };

    return (
        <div
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
            className="flex flex-col items-center justify-center 
        w-50 h-70 bg-white rounded-lg p-1 
        border border-gray-300 shadow-sm 
        hover:shadow-md transition-all duration-200"
        >
            <img
                src={imageSrc}
                className="w-full h-40 object-contain rounded-md"
                alt={name}
            />
            <h1 className="font-bold text-center text-gray-800 mt-1 truncate w-full px-1 text-2xl text-wrap">
                {name}
            </h1>
        </div>
    );
}
