import logo from "../assets/logo.png";

export default function Nav() {
  return (
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
  )
}