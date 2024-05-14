import ea from "../assets/ea_logo.png";
import epic from "../assets/epic_logo.png";
import riot from "../assets/riot-games-logo.png";
import logo2 from "../assets/logo-vava-2.png";

export default function Footer() {
  return (
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
  )
}