import { defineStore } from "pinia";
import { api } from "@/services/api";

export interface DescInterface {
  id: number,
  nome: string,
  quantidade: number,
  preco: string,
  image: string
}

export const useDescStore = defineStore('descStore', {
  state: () => ({
    descartaveis: [] as DescInterface[],
    loading: true,
  }),
  actions: {
    async getDescs(): Promise<void> {
      this.loading = true;
      await api.get('/descartaveis').then(res => {
        this.descartaveis = res.data;
      }).catch(err => console.log(err));
      this.loading = false;
    }
  }
});
