import { cn } from "../utils/cn";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const maps = [
  { label: "Split", image: "/imgs/maps/split.png" },
  { label: "Heaven", image: "/imgs/maps/heaven.png" },
  { label: "Bind", image: "/imgs/maps/bind.png"  },
  { label: "Icebox", image: "/imgs/maps/icebox.png"  },
  { label: "Pearl", image: "/imgs/maps/pearl.png"  },
]

export default function Maps() {
    return (
        <>
            <Nav />

            <main className="px-44 py-12 bg-[#111723]">
                <ul className="flex justify-center items-center -space-x-20">
                    {maps.map((map, i) => (
                        <li
                            key={map.label}
                            className={cn("relative w-fit bg-red group hover:z-40 hover:scale-110 transition-all", (i === 1 || i === 3) && "z-20", i === 2 && "z-30")}
                        >
                            <img src={map.image} alt="bind map" />
                            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">
                              {map.label}
                            </p>
                        </li>
                    ))}
                </ul>
            </main>

            <Footer />
        </>
    )
}