<template>
    <div class="depart">
        <h1>Bo'limlar</h1>
        <div class="d-flex">
            <input type="text" placeholder="bo'lim kiriting" v-model="depart.name">
            <button 
                @click="add()"
                class="btn">
                Kiritish
            </button>
        </div>
    </div>
    
    <table class="table" width="100%" border="1" cellspacing="0">
        <thead>
            <tr>
                <th>№</th>
                <th>title</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(d,i) of departs" :key="i">
                <td>{{i + 1}}</td>

                <td>{{d.name}}</td>
                
                <td class="del">
                    <button 
                        @click="del(d.id)">X
                    </button>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            departs:[],
            depart:{}
        }
    },
    methods: {
        add(){
            axios.post('http://localhost:3000/depart',this.depart)
            .then(res => {
                this.departs.push(res.data)
                this.depart = {}
            })
        },
        del(i){
            console.log(i)
            axios.delete(`http://localhost:3000/depart/${i}`)
            .then(res => {
                if(res.status == 200){
                    let index = this.departs.findIndex(depart => depart.id == i)
                    if(index !== -1){
                        this.departs.splice(index.toExponential,1)
                    }
                }
            })
        }
    },
    mounted() {
        axios.get('http://localhost:3000/depart')
        .then(res => {
            this.departs = res.data
        })
    },

}
</script>

<style lang="scss">
@import '@/styles/depart.scss'
</style>