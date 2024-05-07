import logo from "../assets/logo.png";
import banner1 from "../assets/banner1.png";
import ea from "../assets/ea_logo.png";
import epic from "../assets/epic_logo.png";
import riot from "../assets/riot-games-logo.png";
import logo2 from "../assets/logo-vava-2.png";

export default function Home(){
    return(
        <>
        <nav className="flex justify-center items-center font-bold text-[#BFC6CC] bg-black">
            <ul className="flex space-x-2 justify-center">
                <li><a className="hover:text-[#FF4546]" href="#">Home</a></li>
                <li><a className="hover:text-[#FF4546]" href="/about">About</a></li>
                <li><a className="hover:text-[#FF4546]" href="/news">News</a></li>
            </ul>
            <img className="mx-20" src={logo} alt="" />
            <ul className="flex space-x-2">
                <li><a className="hover:text-[#FF4546]" href="/agents">Agents</a></li>
                <li><a className="hover:text-[#FF4546]" href="/maps">Maps</a></li>
                <li><a className="hover:text-[#FF4546]" href="/guns">Guns</a></li>
                <li><a className="hover:text-[#FF4546]" href="/crosshairs">Crosshairs</a></li>
            </ul>
        </nav>

        <section>
            <img src={banner1} alt="" />
        </section>

        <section className="py-24 px-24 bg-gradient-to-r from-[#FF4656] to-black text-white" >
            <h2 className="text-7xl text-center pb-16" >NEWS</h2>
            <ul className="space-y-9">
                <li className="flex justify-center items-center">
                    <img className="w-80 h-56"  src="" alt="" />
                    <div className="flex flex-col ml-14">
                        <time>30/04/2024</time>
                        <h3 className="mt-4 text-xl">YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT</h3>
                        <p className="mb-2">Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference.</p>
                        <button className="w-fit font-bold hover:underline "><a href="#" target="_blank">SEE ARTICLE</a></button>
                        
                    </div>
                </li>

                <li className="flex justify-center items-center">
                    <img className="w-80 h-56"  src="" alt="" />
                    <div className="flex flex-col ml-14">
                        <time>30/04/2024</time>
                        <h3 className="mt-4 text-xl">YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT</h3>
                        <p className="mb-2">Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference.</p>
                        <button className="w-fit font-bold hover:underline "><a href="#" target="_blank">SEE ARTICLE</a></button>
                        
                    </div>
                </li>

                <li className="flex justify-center items-center">
                    <img className="w-80 h-56"  src="" alt="" />
                    <div className="flex flex-col ml-14">
                        <time>30/04/2024</time>
                        <h3 className="mt-4 text-xl">YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT</h3>
                        <p className="mb-2">Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference.</p>
                        <button className="w-fit font-bold hover:underline "><a href="#" target="_blank">SEE ARTICLE</a></button>
                        
                    </div>
                </li>


            </ul>
        </section>

        <footer className="flex gap-56 py-24 px-44 bg-[#07090E] text-white">
            <div className="flex flex-col ">
                <a href=""><img className="w-34 h-9" src={logo2} alt="" /></a>
                <button><a className="bg-[#D5224E] py-3 px-9 block rounded-md mb-7 mt-4" href="">DOWNLOAD NOW</a></button>
                <small>Fully Complaint</small>

                <ul className="flex mt-4 gap-5">
                    <li><a href=""><img src={riot} alt="" /></a></li>
                    <li><a href=""><img src={epic} alt="" /></a></li>
                    <li><a href=""><img src={ea} alt="" /></a></li>
                </ul>
            </div>
            <div className="flex gap-28">
                <div>
                    <p className="text-[#7E8087] text-sm mb-3" >COMPANY</p>
                    <ul className="space-y-2" >
                        <li><a href="#" className="hover:text-[#FF4656]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Partnerships</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Careers</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Branding</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">FAQ</a></li>
                    </ul>
                    <small className="text-[#7E8087] mt-16 block" >English</small>
                </div>

                <div>
                    <p className="text-[#7E8087] text-sm mb-3">SOCIALS</p>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FF4656]">Facebook</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Twitter</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Instagram</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">TikTok</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Our Discord</a></li>
                    </ul>
                    <small className="text-[#7E8087] mt-16 block hover:text-white hover:underline">Terms of Service</small>
                </div>

                <div>
                    <p className="text-[#7E8087] text-sm mb-3">SUPPORTED GAMES</p>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FF4656]">League of Legends</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Counter-Strike2</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">VALORANT</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Teamfight Tactics</a></li>
                        <li><a href="#" className="hover:text-[#FF4656]">Apex Legends</a></li>
                    </ul>
                    <small className="text-[#7E8087] mt-16 block  hover:text-white hover:underline">Privacy policy</small>
                </div>
            </div>
        </footer>
        </>
    )
}