import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { IMap, getMapById } from "../api/maps";
import { baseURL } from "../api";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Map() {
  const [map, setMap] = useState<IMap | null>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getMapById(params.id!).then(map => {
      if (map === null) return redirect("/maps");

      setMap(map);
    })
  }, []);

  if (map === null) return null;

  const mapImageUrl = new URL(`${baseURL}/jsonReaderMaps.php/${map.foto.map}`);
  const splashImageUrl = new URL(`${baseURL}/jsonReaderMaps.php/${map.foto.splash}`);

  return (
    <>
      <Nav />

      <div className="relative bg-[#111723]">
        <header className="flex pt-28">
          <div className="w-full py-6 bg-[#D9D9D9]">
            <h1 className="text-right font-bold uppercase text-8xl text-[#D5224E]">
              {map.nome}
            </h1>
          </div>
          <div className="w-0 h-0 border-t-[150px] border-t-[#D9D9D9] border-r-[200px] border-r-transparent" />
        </header>

        <main className="flex items-center justify-between gap-14 mx-20 my-20">
          <div className="bg-[#D9D9D9] size-96 rounded-full p-9 shrink-0">
            <img src={mapImageUrl.href} />
          </div>

          <div className="p-7 bg-[#D9D9D9] rounded-tl-3xl rounded-br-3xl">
            <p>{map.historinha}</p>
          </div>
        </main>

        <img src={splashImageUrl.href} />
      </div>

      <Footer />
    </>
  )
}