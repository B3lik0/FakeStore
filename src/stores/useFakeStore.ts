import { defineStore } from 'pinia'
import IResponse from '../interfaces/IResponse'
const userFakeStore = defineStore('userFakeStore', {
    state: () => {
        return {
            data: [] as IResponse[],
        }
    },
    getters: {
        getData: (state) => {
            return state.data
        }
    },
    actions: {
        async setData(data: any) {
            this.data = data
        },
        async fetchData(): Promise<boolean> {
            try {
                const response = await fetch('https://fakestoreapi.com/products', {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                const data = await response.json()
                this.setData(data)
                return true
            } catch (error) {
                return false
            }
        }
    },
})

export default userFakeStore;