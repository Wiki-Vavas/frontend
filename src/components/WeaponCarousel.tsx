import { useState } from "react";

interface WeaponCarouselProps {
  weapons: {
    name: string;
    image: string;
  }[]
}

export default function WeaponCarousel(props: WeaponCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < props.weapons.length - 1;
  const weapon = props.weapons[currentIdx];

  const next = () => {
    if (!hasNext) return;

    setCurrentIdx(prev => prev + 1);
  }

  const prev = () => {
    if (!hasPrev) return;

    setCurrentIdx(prev => prev - 1);
  }

  return (
    <div>
      <div className="flex items-center gap-28">
        <button disabled={!hasPrev} onClick={prev} className="disabled:opacity-30 disabled:cursor-not-allowed">
          <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8899 3L2.99993 17.89L17.8899 32.7799" stroke="#A8A7A7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <img src={`/imgs/weapons/${weapon.image}`} className="w-80 h-36 object-contain"/>

        <button disabled={!hasNext} onClick={next} className="disabled:opacity-30 disabled:cursor-not-allowed">
          <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.54004 32.7751L17.6963 18.1563L3.07751 3.00001" stroke="#A8A7A7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <p className="mt-40 text-center text-7xl font-bold text-[#BFC6CC]">{weapon.name}</p>
    </div>
  )
}