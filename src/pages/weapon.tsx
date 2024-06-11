import Footer from "../components/Footer";
import Nav from "../components/Nav";
import WeaponCarousel from "../components/WeaponCarousel";

const weapons = [
  { name: "Classic", image: "classic.png" },
  { name: "Ghost", image: "ghost.png" },
  { name: "Shorty", image: "shorty.png" },
  { name: "Frenzy", image: "frenzy.png" },
  { name: "Sheriff", image: "sheriff.png" },
  { name: "Spectre", image: "spectre.png" },
  { name: "Stinger", image: "stinger.png" },
  { name: "Bucky", image: "bucky.png" },
  { name: "Judge", image: "judge.png" },
  { name: "Vandal", image: "vandal.png" },
  { name: "Bulldog", image: "bulldog.png" },
  { name: "Guardian", image: "guardian.png" },
  { name: "Phantom", image: "phantom.png" },
  { name: "Outlaw", image: "outlaw.png" },
  { name: "Marshal", image: "marshal.png" },
  { name: "Operator", image: "operator.png" },
  { name: "Ares", image: "ares.png" },
  { name: "Odin", image: "odin.png" },
]

export default function Weapon() {
  return (
    <>
      <Nav />
        <main className="flex justify-center items-center min-h-screen bg-weaponAnimation bg-cover bg-no-repeat">
          <WeaponCarousel weapons={weapons} />
        </main>
      <Footer />
    </>
  )
}