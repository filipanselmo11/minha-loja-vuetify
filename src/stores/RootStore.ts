import { defineStore } from 'pinia';
import { api } from '@/services/api';


export const useRootStore = defineStore('rootStore', {
  state: () => ({
    loading: true,
  }),
  actions: {
    async getRoot(): Promise<void> {
      this.loading = true;
      await api.get('/').then(res => {
        console.log(res.data);
      }).catch(err => console.log(err));
      this.loading = false;
    }
  }
});
