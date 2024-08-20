<template>
  <h2>
    <a href="https://hackmd.io/HDbGK9YqRn-UzuYEsNON7g" target="_black"
      >Day17 - todolist 實作篇：註冊登入功能</a
    >
  </h2>
  <div id="app">
    <div class="container mt-2">
      <h2>登入</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail2">Email</label>
          <input
            v-model="emailSignIn"
            type="email"
            class="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="請輸入信箱"
          />
        </div>
        <div class="form-group my-3">
          <label for="exampleInputPassword2">Password</label>
          <input
            v-model="passwordSignIn"
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            placeholder="請輸入密碼"
          />
        </div>
        <button @click="signIn" type="button" class="btn btn-success">登入</button>
      </form>
      <template v-if="responseMessage">
        <p
          class="h3"
          :class="{ 'mt-3': true, 'text-danger': isErrorMessage, 'text-success': !isErrorMessage }"
        >
          {{ responseMessage }} {{ token }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const api = 'https://todolist-api.hexschool.io'

const emailSignIn = ref('')
const passwordSignIn = ref('')

const responseMessage = ref('')
const isErrorMessage = ref(false)
const token = ref('')

const signIn = async () => {
  try {
    const response = await axios.post(`${api}/users/sign_in`, {
      email: emailSignIn.value,
      password: passwordSignIn.value
    })
    // console.log(response.data)
    responseMessage.value = '登入成功'
    token.value = response.data.token
  } catch (error) {
    //console.log(error.response.data)
    isErrorMessage.value = error.response.data.status
    responseMessage.value = '登入失敗: ' + error.response.data.message
    token.value = ''
  }
}
</script>
