<template>
  <div class="about">
    <NavBar/>
  </div>
</template>

<script>

import {defineComponent } from 'vue';

import NavBar from '../components/NavE.vue';

export default defineComponent({
    name:'aboutV',
    components:{
        NavBar,
    }
})
</script>

