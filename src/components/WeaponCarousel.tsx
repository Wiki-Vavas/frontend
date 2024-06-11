import { useState } from "react";
import { IWeapon } from "../api/weapons";
import { baseURL } from "../api";

interface WeaponCarouselProps {
  weapons: IWeapon[]
}

export default function WeaponCarousel(props: WeaponCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (props.weapons.length === 0) return null

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < props.weapons.length - 1;

  const weapon = props.weapons[currentIdx];
  const imageUrl = new URL(`${baseURL}/jsonReaderWeapons.php/${weapon.foto}`);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="36"
            fill="none"
            viewBox="0 0 21 36"
          >
            <path
              stroke="#A8A7A7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M17.89 3L3 17.89l14.89 14.89"
            ></path>
          </svg>
        </button>

        <img src={imageUrl.href} className="w-80 h-36 object-contain"/>

        <button disabled={!hasNext} onClick={next} className="disabled:opacity-30 disabled:cursor-not-allowed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="36"
            fill="none"
            viewBox="0 0 21 36"
          >
            <path
              stroke="#A8A7A7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              d="M2.54 32.775l15.156-14.619L3.078 3"
            ></path>
          </svg>
        </button>
      </div>

      <p className="mt-40 text-center text-7xl font-bold text-[#BFC6CC]">{weapon.nome}</p>
    </div>
  )
}