<template lang="">
    <div>
        <h2 v-if="pending" >hellllo</h2>
        <nuxt-link to="/about">about</nuxt-link>
        <nuxt-link to="/dashboard">dashboard</nuxt-link>
        <pre>{{data}}</pre>
        <h1>{{pending}}</h1>
    </div>
</template>
<script setup >
const {pending, data} = await useLazyFetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(data);
</script>
<style lang="">
    
</style>