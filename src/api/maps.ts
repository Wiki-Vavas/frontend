import { api } from ".";

export type IMap = {
  id: number;
  nome: string;
  foto: {
    map: string;
    listview: string;
    splash: string;
  },
  local: string;
  historinha: string;
};

export async function getMaps() {
  const res = await api.get<IMap[]>("/jsonReaderMaps.php");
  if (res.status !== 200) {
    return null;
  }

  return res.data;
}

export async function getMapById(id: string) {
  const res = await api.get<IMap>(`/jsonReaderMaps.php?id=${id}`);
  if (res.status !== 200) {
    return null;
  }

  return res.data;
}