"use client";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Macaco } from "./components/macaco";
import { useState } from "react";

type Macaco = {
  id: number
  name: string
  imageSrc: string
}
export default function Home() {

  const [macacos, setMacacos] = useState<Macaco[]>([
    {
      id: 1,
      name: "macaquinho",
      imageSrc:
        "https://monkeyworlds.com/wp-content/uploads/human-monkey.webp",
    },
    {
      id: 2,
      name: "macaco feio",
      imageSrc:
        "https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg",
    },
    {
      id: 3,
      name: "macaco dos 20 reais",
      imageSrc:
        "data:image/jpeg;base64,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",
    },

    {
      id: 4,
      name: "macaco narigudo",
      imageSrc:
        "data:image/jpeg;base64,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",
    },

    {
      id: 5,
      name: "par de macacos",
      imageSrc:
        "https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2021/08/capa-macacos.png",
    },

    {
      id: 6,
      name: "macaco boca aberta",
      imageSrc:
        "https://nerdizmo.ig.com.br/wp-content/uploads/2024/05/Macaco-Bugio.jpg",
    },

    {
      id: 7,
      name: "cesar",
      imageSrc:
        "https://veja.abril.com.br/wp-content/uploads/2016/05/macaco-original1.jpeg?quality=70&strip=info&resize=1080,565&crop=1",
    },


    {
      id: 8,
      name: "cesar antigo",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoWcpzwsHTg4V5LwjFRufyEqaPlH8LZd35w&s",
    },


    {
      id: 9,
      name: "twelves, que Deus o tenha",
      imageSrc:
        "https://odia.ig.com.br/_midias/jpg/2018/03/21/21_twelves2-6180365.jpg",
    },

    {
      id: 10,
      name: "macaco maromba",
      imageSrc:
        "https://i.redd.it/v54fb17rhmv51.png",
    },

    {
      id: 11,
      name: "macaco tião",
      imageSrc:
        "https://br.web.img2.acsta.net/pictures/17/10/11/22/05/3299255.jpg",
    },

    {
      id: 12,
      name: "macaco xico",
      imageSrc:
        "https://s02.video.glbimg.com/x216/1150133.jpg",
    },

    {
      id: 13,
      name: "chimchar",
      imageSrc:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/390.png",
    },

    {
      id: 14,
      name: "macaco bate prato",
      imageSrc:
        "https://http2.mlstatic.com/D_NQ_NP_820025-MLB50154625019_062022-O.webp",
    },

    {
      id: 15,
      name: "jota quest",
      imageSrc:
        "https://akamai.sscdn.co/uploadfile/letras/albuns/e/2/a/8/9218.jpg",
    },

    {
      id: 16,
      name: "macaco louco",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrxD4v9QPtHSw2yRjebeSS8G54QLGJDPp_s-WD-ZklOXvQQeltS2wszkfgrTdAAMyEyVOHwMEGr9HYuYI8gXPmlR26MUTdhZy-4RMag&s=10",
    },


    {
      id: 17,
      name: "macaco jackie chan",
      imageSrc:
        "https://m.media-amazon.com/images/S/pv-target-images/327a3b3c103acfc425300649de6b2ec6399bb573d9713578db003f706ed680c5.jpg",
    },

    {
      id: 18,
      name: "abu",
      imageSrc:
        "https://recreio.com.br/wp-content/uploads/disney/abu_aladdin_capa_ffwSI5c.jpg",
    },
    {
      id: 19,
      name: "macacos critica social",
      imageSrc:
        "https://m.media-amazon.com/images/I/71zS44s2l4S._AC_UF894,1000_QL80_.jpg",
    },

    {
      id: 20,
      name: "macaco ney",
      imageSrc:
        "https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?fit=1280%2C720&quality=50&strip=all",
    },

    {
      id: 21,
      name: "botas",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR2Hbfv5Yn0uW-NqfUhzkdZM9RGDvok4dUg&s",
    },


    {
      id: 22,
      name: "george",
      imageSrc:
        "https://i.ytimg.com/vi/xPumd5QBhpM/maxresdefault.jpg",
    },

    {
      id: 23,
      name: "zubumafu",
      imageSrc:
        "https://i.ytimg.com/vi/_2xDJphtn0w/maxresdefault.jpg",
    },

    {
      id: 24,
      name: "macaco madagascar",
      imageSrc:
        "https://i.ytimg.com/vi/m6xkp4lbz_o/maxresdefault.jpg",
    },

    {
      id: 25,
      name: "king kong",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhCKx8qg_F_SWPIJHJ6AuLFuBpOpzvCnGEw&s",
    },

    {
      id: 26,
      name: "macaco kung fu",
      imageSrc:
        "https://e7.pngegg.com/pngimages/706/965/png-clipart-monkey-po-tigress-crane-mantis-monkey-animals-kung-fu-thumbnail.png",
    },
    {
      id: 27,
      name: "macaco fumante",
      imageSrc:
        "https://www.bbc.com/staticarchive/d3cbd6b14d59be022f4b9c1ece222130d34b1af5.jpg",
    },

    {
      id: 28,
      name: "macaco do rei leao",
      imageSrc:
        "https://i.pinimg.com/originals/02/b3/73/02b3730bc709bd9c90a5a8d96bd1110d.jpg",
    },

    {
      id: 29,
      name: "macaco amigo de escola",
      imageSrc:
        "https://m.media-amazon.com/images/M/MV5BMjBiNTM1YzYtZWMxZi00MjExLTk3MzItY2E0MzJhODVhNjJhXkEyXkFqcGc@._V1_.jpg",
    },

    {
      id: 30,
      name: "macaco ak-47",
      imageSrc:
        "https://i.ytimg.com/vi/GhxqIITtTtU/mqdefault.jpg",
    },

    {
      id: 31,
      name: "Oozaru",
      imageSrc:
        "https://i.redd.it/mj4uwtf70f351.jpg",
    },


    {
      id: 32,
      name: "diddy kong",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbdlwOb494SOsMO7GggKnQksKCVR0AdToZz65GaDd5dyZl_OsgNLm_WOJj10RTJGXV7wsWvErLgz-CZKRWZEMeL6vYm2vCfHAgPWcHw&s=10",
    },

    {
      id: 33,
      name: "wukong",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
    },

    {
      id: 34,
      name: "donkey kong",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChN8t_bKjg6BhdOfi-7sMMxsU8M8GRwwmWw&s",
    },

    {
      id: 35,
      name: "ragavan",
      imageSrc: "https://cards.scryfall.io/large/front/a/9/a9738cda-adb1-47fb-9f4c-ecd930228c4d.jpg?1681963138",
    }
  ])

  function ondragend(result: any) {
    if (!result.destination) {
      return;
    }
    setMacacos(reorder(macacos, result.source.index, result.destination.index))
  }

  function reorder(list: Macaco[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed)

    return result;
  }


  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900 p-10">
      <h1 className="font-bold text-white text-[5rem]">
        Tierlist muito barba de macacos maneiros
      </h1>
      <DragDropContext onDragEnd={ondragend}>
        <Droppable droppableId="macacos" direction="horizontal" type="list">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`
                flex flex-wrap items-center justify-start gap-3
                w-full h-[(85%)] p-4 rounded-xl
                border-2 border-dashed transition-colors duration-300
                ${snapshot.isDraggingOver
                  ? "bg-emerald-800/30 border-emerald-400"
                  : "bg-gray-800/40 border-gray-600"
                }
              `}
            >
              {macacos.map((macaco, index) => (
                <Macaco
                  key={macaco.id}
                  imageSrc={macaco.imageSrc}
                  name={macaco.name}
                  id={macaco.id}
                  index={index}
                />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
