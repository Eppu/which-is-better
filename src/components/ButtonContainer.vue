<template>
    <div>
        <p v-if="loading">Ladataan...</p>
        <div v-else> 
            <button v-if="word1.fields.name" v-on:click="sendVote(word1.id)">{{word1.fields.name}}</button>
            vai 
            <button v-if="word2.fields.name" v-on:click="sendVote(word2.id)">{{word2.fields.name}}</button>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ButtonContainer',
    data() {
        return {
            word1: {},
            word2: {},
            info: null,
            randomItem: null,
            loading: true
        }
    },
    mounted () {
        this.loading = true;
        axios
        .get('//kumpi.netlify.app/api/words')
        .then(response => {       
            this.info = response.data
            console.log(this.info)
            
            this.pickRandomWords();

            this.loading = false;
        })
        .catch(error => console.log(error))
    },
        methods: {
        pickRandomWords() {
            this.word1 = this.info[Math.floor(Math.random()*this.info.length)];
            this.word2 = this.info[Math.floor(Math.random()*this.info.length)];
        },
        sendVote(id) {
            axios
            .get(`//kumpi.netlify.app/api/updateVotes?id=${id}`)
            .then(response => {                
                console.log(response.data)
                this.pickRandomWords();
            })
            .catch(error => console.log(error))
        }
    },
}
</script>

<style lang="scss" scoped>

</style>