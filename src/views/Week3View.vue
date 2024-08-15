<template>
  <div id="root">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              v-for="item in drinks"
              :key="item.id"
              @click.prevent="AddToCart(item)"
              ><div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ item.name }}</h5>
                <small>${{ item.price }}</small>
              </div>
              <p class="mb-1">{{ item.description }}</p>
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" width="50">操作</th>
                <th scope="col">品項</th>
                <th scope="col">描述</th>
                <th scope="col" width="90">數量</th>
                <th scope="col">單價</th>
                <th scope="col">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <button type="button" class="btn btn-sm" @click.prevent="RemoveCartItem(item.id)">
                    x
                  </button>
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <small>{{ item.description }}</small>
                </td>
                <td>
                  <select class="form-select" v-model="item.qty">
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                  </select>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.price * item.qty }}</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end mb-3">
            <h5>
              總計: <span>${{ CartTotal }}</span>
            </h5>
          </div>
          <textarea
            class="form-control mb-3"
            rows="3"
            placeholder="備註"
            v-model="remark"
          ></textarea>
          <div class="text-end">
            <button class="btn btn-primary" @click.prevent="createOrder">送出</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="row justify-content-center">
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h5>訂單</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">品項</th>
                      <th scope="col">數量</th>
                      <th scope="col">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in order.content" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>{{ item.qty }}</td>
                      <td>{{ item.qty * item.price }}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-end">
                  備註: <span>{{ order.remark }}</span>
                </div>
                <div class="text-end">
                  <h5>
                    總計: <span>${{ order.ordersum }}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'Vue'

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60
  }
]

const drinks = ref(data)
const cart = ref([])
const remark = ref('')
const order = ref([])

const CartTotal = computed(() => {
  return cart.value.reduce((pre, next) => {
    return pre + next.price * next.qty
  }, 0)
})

const AddToCart = (item) => {
  cart.value.push({
    ...item,
    id: new Date().getTime(),
    qty: 1
  })
  //console.log(cart)
}

const RemoveCartItem = (id) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== id)
  console.log(cart.value)
}

const createOrder = () => {
  order.value = {
    id: new Date().getTime(),
    content: cart.value,
    remark: remark.value,
    ordersum: CartTotal.value
  }
  console.log(order)

  cart.value = []
  remark.value = ''
}
</script>
