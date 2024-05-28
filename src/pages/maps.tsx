import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Maps() {
    return (
        <>
            <Nav />

            <main className="px-44 py-12 bg-[#111723]">
                <ul className="flex justify-center items-center -space-x-28">
                    <li className="relative w-fit bg-red group hover:z-40 hover:scale-110 transition-all">
                        <img src="/imgs/bind.png" alt="bind map" className="w-[90%] group-hover:w-full" />
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">Split</p>
                    </li>
                    <li className="relative w-fit bg-red z-20 group hover:z-40 hover:scale-110 transition-all">
                        <img src="/imgs/bind.png" alt="bind map" className="w-[95%] group-hover:w-full" />
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">Split</p>
                    </li>
                    <li className="relative w-fit bg-red z-30 group hover:scale-110 transition-all">
                        <img src="/imgs/bind.png" alt="bind map" />
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">Split</p>
                    </li>
                    <li className="relative w-fit bg-red z-20 group hover:z-40 hover:scale-110 transition-all">
                        <img src="/imgs/bind.png" alt="bind map" className="w-[95%] group-hover:w-full" />
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">Split</p>
                    </li>
                    <li className="relative w-fit bg-red group hover:z-40 hover:scale-110 transition-all">
                        <img src="/imgs/bind.png" alt="bind map" className="w-[90%] group-hover:w-full" />
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl uppercase font-bold text-[#D5224E] mb-10">Split</p>
                    </li>
                </ul>
            </main>

            <Footer />
        </>
    )
}