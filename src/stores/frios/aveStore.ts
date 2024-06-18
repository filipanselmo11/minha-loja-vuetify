import { defineStore } from "pinia";
import { api } from "@/services/api";

export interface AveInterface {
  id: number,
  nome: string,
  codigo: number,
  embalagem: string,
  preco: string,
  image: string
}


export const useAveStore = defineStore('aveStore', {
  state: () => ({
    aves: [] as AveInterface[],
    loading: true,
  }),
  actions: {
    async getAves(): Promise<void> {
      this.loading = true;
      await api.get('/aves').then(res => {
        this.aves = res.data;
      }).catch(err => console.log(err));
      this.loading = false;
    }
  },
});
