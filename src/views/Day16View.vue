<template>
  <h2>
    <a href="https://hackmd.io/QkAtpvUPRV-wsWS9LdnNuA" target="_black"
      >Day16 - Axios 基本介紹使用</a
    >
  </h2>
</template>

<script setup>
import axios from 'axios'

const api = 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json'

axios
  .get(api)
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
</script>
