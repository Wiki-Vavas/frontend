import { api } from ".";

export type INews = {
  id: number;
  titulo: string;
  foto: string;
  data: string;
  breve_descricao: string;
  link: string;
};

export async function getNews() {
  const res = await api.get("/jsonReaderNews.php");
  if (res.status !== 200) {
    return null;
  }

  return res.data as INews[];
}