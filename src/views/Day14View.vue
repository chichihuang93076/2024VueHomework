<template>
  <h2><a href="https://hackmd.io/iYXUUS2jTmKyhKmBRIDq0w">Day14 - Vue.js 的元件篇：emits</a></h2>
  <div id="app" class="container">
    <div class="row">
      <template v-for="(fruit, index) in fruitData" :key="index">
        <div class="col">
          <Card
            :imgUrl="fruit.imgUrl"
            :title="fruit.title"
            :price="fruit.price"
            :count="fruit.count"
            v-on:add-to-cart="handleAddToCart"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Day14Cart.vue'

const handleAddToCart = (fruitTitle) => {
  const message = `您已將 ${fruitTitle} 加入購物車`
  alert(message)
}

const fruitData = ref([
  {
    title: 'apple',
    price: 25,
    count: 50,
    imgUrl: 'https://i.imgur.com/w4sYWlS.jpeg'
  },
  {
    title: 'orange',
    price: 15,
    count: 20,
    imgUrl: 'https://i.imgur.com/PSmzmXi.jpeg'
  },
  {
    title: 'strawberry',
    price: 45,
    count: 10,
    imgUrl: 'https://i.imgur.com/FIMmh6h.png'
  },
  {
    title: 'kiwi',
    price: 55,
    count: 20,
    imgUrl: 'https://i.imgur.com/TIA6v4m.jpeg'
  }
])
</script>

<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.col {
  flex: 0 0 50%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
