import { api } from ".";

export type IAgent = {
  id: number;
  nome: string;
  biografia: string;
  fotos: {
    full: string;
    small: string;
  },
  funcao: {
    nome: string;
    foto: string;
  },
  habilidade: {
    id: string;
    nome: string;
    descricao: string;
    foto: string;
    video: string;
  }[],
};

export async function getAgents() {
  const res = await api.get<IAgent[]>("/jsonReaderAgents.php");
  if (res.status !== 200) {
    return null;
  }

  return res.data;
}

export async function getAgentById(id: string) {
  const res = await api.get<IAgent>(`/jsonReaderAgents.php?id=${id}`);
  if (res.status !== 200) {
    return null;
  }

  return res.data;
}