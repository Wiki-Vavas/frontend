import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Map() {
  return (
    <>
      <Nav />

      <div className="relative bg-[#111723]">
        <header className="flex pt-28 pb-20">
          <div className="w-full py-6 bg-[#D9D9D9]">
            <h1 className="text-right font-bold uppercase text-8xl text-[#D5224E]">Bind</h1>
          </div>
          <div className="w-0 h-0 border-t-[150px] border-t-[#D9D9D9] border-r-[200px] border-r-transparent" />
        </header>

        <main className="flex items-center justify-between gap-14 mx-20">
          <img src="/imgs/bind-minimap.png" />

          <div className="p-7 bg-[#D9D9D9] rounded-tl-3xl rounded-br-3xl">
            <p>
              Two sites. No middle. Gotta pick left or right. What’s it going to be
              then? Both offer direct paths for attackers and a pair of one-way teleporters
              make it easier to flank.
            </p>
          </div>
        </main>

        <img src="/imgs/map-background-bind.png" />
      </div>

      <Footer />
    </>
  )
}