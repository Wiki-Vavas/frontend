import { useEffect, useState } from "react";
import { IMap, getMaps } from "../api/maps";
import { baseURL } from "../api";
import { cn } from "../utils/cn";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Maps() {
  const [maps, setMaps] = useState<IMap[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getMaps().then(maps => {
      if (maps === null) return;

      setMaps(maps);
    });
  }, []);

  const next = () => {
    setPage(prev => prev + 1);
  }
  const prev = () => {
    setPage(prev => prev - 1);
  }

  return (
    <>
      <Nav />

      <main className="flex items-center gap-4 px-44 py-12 bg-[#111723]">
        <button onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="36"
            fill="none"
            viewBox="0 0 21 36"
          >
            <path
              stroke="#A8A7A7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M17.89 3L3 17.89l14.89 14.89"
            ></path>
          </svg>
        </button>

        <ul className="flex justify-center items-center -space-x-20">
          {maps.slice(page, page + 5).map((map, i) => (
            <MapCard map={map} idx={i} />
          ))}
        </ul>

        <button onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="36"
            fill="none"
            viewBox="0 0 21 36"
          >
            <path
              stroke="#A8A7A7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M2.54 32.775l15.156-14.619L3.078 3"
            ></path>
          </svg>
        </button>
      </main>

      <Footer />
    </>
  )
}

function MapCard(props: { map: IMap, idx: number }) {
  const imageUrl = new URL(`${baseURL}/jsonReaderMaps.php/${props.map.foto.splash}`);

  return (
    <a href={`/maps/${props.map.id}`}>
      <li
        key={props.map.id}
        className={cn(
          "relative w-fit bg-red group hover:z-40 hover:scale-110 transition-all",
          (props.idx === 1 || props.idx === 3) && "z-20",
          props.idx === 2 && "z-30"
        )}
      >
        <img
          src={imageUrl.href}
          alt="bind map"
          className={cn(
            "w-60 h-[472px] scale-110 object-cover group-hover:scale-125",
            (props.idx === 0 || props.idx === 4) && "scale-100",
            (props.idx === 1 || props.idx === 3) && "scale-105"
          )}
        />
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">
          {props.map.nome}
        </p>
      </li>
    </a>
  )
}