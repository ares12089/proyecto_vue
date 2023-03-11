<template>



        <h1> Usuarios </h1>
        
        <v-card 
    class="mx-auto"
    max-width="100%"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
        v-for="(item, index) in items" :key="index"
          cols="4"
        >
          <v-card>
            <v-img
              :src="item.download_url"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="item.author"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script>
// import { create } from 'domain';
// import { response } from 'express';


    export default {

        data() {
            
            return{
                items: []
            }
        },

        methods: {

            fetchData() {

                fetch('https://picsum.photos/v2/list?page=2&limit=100').then(response => response.json()).then(data => {

                    this.items=data;

                })

                .catch(error => console.log(error));

            },

        //     axionData() {
                
        //         axios.get('http://localhost:8000/items').then(response => {
                    
        //             this.items = response.data;

        //         })
        // }
        
            },

        created() {

            this.fetchData();
        }

    }

</script>