import { useEffect, useState } from "react";
import { type INews, getNews } from "../api/news";

import banner1 from "../assets/banner1.png";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import News from "../components/News";

export default function Home() {
  const [allNews, setAllNews] = useState<INews[]>([]);

  useEffect(() => {
    getNews().then(news => {
      if (news === null) return;

      setAllNews(news);
    })
  }, [])

  return (
    <>
      <Nav />

      <section>
        <img src={banner1} alt="" />
      </section>

      <section className="py-24 px-24 bg-gradient-to-r from-[#FF4656] to-black text-white">
        <h2 className="text-7xl text-center pb-16">NEWS</h2>
        <ul className="space-y-9">
          {allNews.map(news => (
            <News
              key={news.id}
              date={news.data}
              title={news.titulo}
              description={news.breve_descricao}
              imageUrl={news.foto}
              link={news.link}
            />
          ))}
        </ul>
      </section>

      <Footer />
    </>
  )
}