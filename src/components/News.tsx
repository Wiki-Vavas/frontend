import { baseURL } from "../api";

interface NewsProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function News(props: NewsProps) {
  const imageUrl = new URL(`${baseURL}/jsonReaderNews.php/${props.imageUrl}`);

  return (
    <li className="flex items-center">
      <img className="w-80 h-56 object-contain" src={imageUrl.href} alt="" />
      <div className="flex flex-col ml-14">
        <time>{props.date}</time>
        <h3 className="mt-4 text-xl">{props.title}</h3>
        <p className="mb-2">{props.description}</p>
        <button className="w-fit font-bold hover:underline ">
          <a href={props.link} target="_blank">SEE ARTICLE</a>
        </button>
      </div>
    </li>
  )
}