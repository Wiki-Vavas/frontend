import { api } from ".";

export type IWeapon = {
  id: number;
  nome: string;
  foto: string;
};

export async function getWeapons() {
  const res = await api.get("/jsonReaderWeapons.php");
  if (res.status !== 200) {
    return null;
  }

  return res.data as IWeapon[];
}