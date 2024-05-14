import banner1 from "../assets/banner1.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Nav />

      <section>
        <img src={banner1} alt="" />
      </section>

      <section className="py-24 px-24 bg-gradient-to-r from-[#FF4656] to-black text-white">
        <h2 className="text-7xl text-center pb-16">NEWS</h2>
        <ul className="space-y-9">
          <News
            date="30/04/2024"
            title="YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT"
            description="Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference."
          />
          <News
            date="30/04/2024"
            title="YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT"
            description="Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference."
          />
          <News
            date="30/04/2024"
            title="YOU ARE THE DIFFERENCE // EPISODE 8 PREMIERE: ACT III - VALORANT"
            description="Contrary to expectations and prove that, in EPISODE 08 // ACT III, YOU are the one who makes the difference."
          />
        </ul>
      </section>

      <Footer />
    </>
  )
}