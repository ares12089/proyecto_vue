<template>
    <div>
        
        <NavBar/>

    </div>
</template>
<script>

import {defineComponent } from 'vue';

import NavBar from '../components/NavE.vue';

export default defineComponent({
    name:'helpV',
    components:{
        NavBar,
    }
})
</script>