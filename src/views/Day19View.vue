<template>
  <h2>
    <a href="https://hackmd.io/MEtSEbALTTOpkOvLDBZPnA" target="_black"
      >Day19 - todolist 實作篇 - 刪除資料功能</a
    >
    <p><a href="https://todolist-api.hexschool.io/doc/#/">TodoList API</a></p>
  </h2>
  <div id="app">
    <div class="container mt-2">
      <h2>登入</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            v-model="emailSignIn"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="請輸入信箱"
          />
        </div>
        <div class="form-group my-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="passwordSignIn"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="請輸入密碼"
          />
        </div>
        <button @click="signIn" type="button" class="btn btn-primary">登入</button>
      </form>
      <template v-if="messageSignIn">
        <p :class="{ 'mt-2': true, 'text-danger': isErrorSignIn, 'text-success': !isErrorSignIn }">
          {{ messageSignIn }}
        </p>
      </template>
      <hr />
      <form>
        <h2>新增資料</h2>
        <div class="form-group">
          <input
            v-model="newTodo"
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="請輸入內容"
          />
        </div>
        <button @click="addTodo" type="button" class="btn btn-primary mt-3">送出</button>
      </form>
      <hr />
      <h2>取得資料</h2>
      <template v-if="todos">
        <ul>
          <li v-for="item in todos" class="mt-3 ms-1" :key="item.id">
            {{ item.content }}
            <button @click="deleteTodo(item.id)" type="button" class="btn btn-danger">刪除</button>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const api = 'https://todolist-api.hexschool.io'

const emailSignIn = ref('')
const passwordSignIn = ref('')
const messageSignIn = ref('')
const isErrorSignIn = ref(false)
const token = ref('')

const todos = ref([])
const newTodo = ref('')

const signIn = async () => {
  try {
    const response = await axios.post(`${api}/users/sign_in`, {
      email: emailSignIn.value,
      password: passwordSignIn.value
    })
    messageSignIn.value = '登入成功'
    token.value = response.data.token
    isErrorSignIn.value = false
    getTodos()
  } catch (error) {
    messageSignIn.value = '登入失敗: ' + error.response.data.message
    isErrorSignIn.value = true
  }
}

const addTodo = async () => {
  if (!newTodo.value) return
  const todo = {
    content: newTodo.value
  }
  await axios.post(`${api}/todos`, todo, {
    headers: {
      Authorization: token.value
    }
  })
  newTodo.value = ''
  getTodos()
}

const getTodos = async () => {
  const response = await axios.get(`${api}/todos`, {
    headers: {
      Authorization: token.value
    }
  })
  todos.value = response.data.data
}

const deleteTodo = async (id) => {
  await axios
    .delete(`${api}/todos/${id}`, {
      headers: {
        Authorization: token.value
      }
    })
    .then((response) => {
      getTodos()
      console.log('資料刪除成功:', response.data)
    })
    .catch((error) => {
      console.error('刪除資料時發生錯誤:', error)
    })
}
</script>
