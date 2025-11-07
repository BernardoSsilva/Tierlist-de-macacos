"use client";

import { DndKit } from "./components/dnd-kit/dnd-kit";
import { PangeaDragAndDrop } from "./components/pangea/pangea-drag-and-drop";


export default function Home() {




  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900 p-10">
      <h1 className="font-bold text-white text-[5rem]">
        Tierlist muito barba de macacos maneiros
      </h1>
      <DndKit />
    </div>
  );
}
