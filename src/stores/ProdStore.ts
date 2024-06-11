import { defineStore } from "pinia";
import { api } from "@/services/api";

export interface ProdInterface {
  id: number,
  nome: string,
  quantidade: number,
  preco: string,
  image: string
}

export const useProdStore = defineStore('prodStore', {
  state: () => ({
    produtos: [] as ProdInterface[],
    loading: true,
  }),
  actions: {
    async getProds(): Promise<void> {
      this.loading = true;
      await api.get('/produtos').then(res => {
          this.produtos = res.data;
      }).catch(err => console.log(err));
      this.loading = false;
    }
  }
});
