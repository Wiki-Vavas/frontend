import astraTemp from "../assets/astra-temp.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Agents() {
  return (
    <>
      <Nav />

      <main className="py-28 bg-selectAgent">
        <h1 className="text-5xl font-bold text-[#E5D15E] uppercase text-center">Select Agent</h1>

        <ul className="flex flex-wrap gap-2 max-w-4xl justify-center mt-5 mx-auto">
          {Array.from({ length: 24 }).map((_, i) => (
            <a href="#" key={i}>
              <li className="relative border-2 border-white/20 hover:bg-white/10">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-[2px] -top-[2px]">
                  <rect width="2" height="2" fill="white" />
                  <rect x="78" width="2" height="2" fill="white" />
                  <rect x="78" y="78" width="2" height="2" fill="white" />
                  <rect y="78" width="2" height="2" fill="white" />
                </svg>

                <img src={astraTemp} />
              </li>
            </a>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  )
}