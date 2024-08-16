<template>
  <div class="card">
    <img class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">水果名稱：{{ title }}</h5>
      <p class="card-text">價錢：{{ price }}</p>
      <p class="card-text">折扣後價錢：{{ discountamt }}</p>
      <p class="card-text">數量：{{ count }}</p>
      <a href="#" class="btn" @click.prevent="addToCart">加入購物車</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  imgUrl: String,
  title: String,
  price: Number,
  count: Number
})

const emits = defineEmits(['add-to-cart'])

const addToCart = () => {
  emits('add-to-cart', props.title)
}

const discountamt = computed(() => {
  return props.price * 0.8
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.card-img-top {
  width: 25%;
  display: block;
  margin: 16px auto;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.card-text {
  margin-bottom: 8px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
}
</style>
