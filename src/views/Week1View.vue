<template>
  <h1>Week1</h1>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in drinks" :key="item.id">
          <td>{{ item.title }}</td>
          <td>
            <small>{{ item.desc }}</small>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <button type="button" @click="item.qty > 0 ? item.qty-- : 0">-</button>{{ item.qty
            }}<button type="button" @click="item.qty++">+</button>
          </td>
          <td><button type="button" @click="changeEdit(item)">編輯</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <hr />
  <div v-if="tempData.id">
    <h2>編輯</h2>
    <label> 品項:<input type="text" v-model="tempData.title" /> </label>
    <button type="button" @click="confirmEdit">更新</button>
    <button type="button" @click="cancelEdit">取消</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tempData = ref([])

const drinks = ref([
  {
    id: 1,
    title: '珍珠奶茶',
    desc: '香濃奶茶搭配QQ珍珠',
    price: 50,
    qty: 20
  },
  {
    id: 2,
    title: '冬瓜檸檬',
    desc: '清新冬瓜配上新鮮檸檬',
    price: 45,
    qty: 18
  },
  {
    id: 3,
    title: '翡翠檸檬',
    desc: '綠茶與檸檬的完美結合',
    price: 55,
    qty: 34
  },
  {
    id: 4,
    title: '四季春茶',
    desc: '香醇四季春茶，回甘無比',
    price: 45,
    qty: 10
  },
  {
    id: 5,
    title: '阿薩姆奶茶',
    desc: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    qty: 25
  },
  {
    id: 6,
    title: '檸檬冰茶',
    desc: '檸檬與冰茶的清新組合',
    price: 45,
    qty: 20
  },
  {
    id: 7,
    title: '芒果綠茶',
    desc: '芒果與綠茶的獨特風味',
    price: 55,
    qty: 18
  },
  {
    id: 8,
    title: '抹茶拿鐵',
    desc: '抹茶與鮮奶的絕配',
    price: 60,
    qty: 20
  }
])

const changeEdit = (item) => {
  tempData.value = { ...item } //淺拷貝
  console.log(tempData.value)
  //傳參考
}

const confirmEdit = () => {
  const index = drinks.value.findIndex((item) => item.id === tempData.value.id)
  console.log(tempData.value.id)
  //輸入值覆蓋替換原本值
  drinks.value[index] = tempData.value

  //還原輸入框
  tempData.value = {}
}

const cancelEdit = () => {
  tempData.value = {}
}
</script>
