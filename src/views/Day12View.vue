<template>
  <div id="app" class="container">
    <Day12Header />
    <div class="banner">
      <h2>六角水果行 Banner</h2>
    </div>
    <div class="content">
      <h2>公司介紹：</h2>
      <p>
        我們的公司致力於提供最新鮮、最優質的水果給我們的顧客。我們的使命是將健康、美味的水果帶到每一個家庭。我們的水果來自於全球各地的優質果園，經過嚴格的品質控制，確保每一顆水果都是自然成熟、營養豐富。
        我們的產品種類豐富，包括蘋果、香蕉、橙子、草莓、葡萄等等，無論是日常食用還是特別場合，我們都能滿足您的需求。我們與許多當地農場合作，支持可持續農業，保護環境，同時保證水果的新鮮度和口感。
        我們還提供快捷便利的送貨服務，讓您足不出戶就能享受到新鮮的水果。我們的客服團隊始終準備好為您提供最優質的服務，解答您的疑問，滿足您的訂購需求。
        選擇我們的水果，就是選擇健康和品質。讓我們一起享受大自然的美味，為您的生活增添更多色彩與健康。
      </p>
    </div>
    <div class="subscribe">
      <h2>訂閱我們的電子報</h2>
      <p>輸入您的電子郵件地址，獲取最新的水果資訊和優惠。</p>
      <input type="email" placeholder="您的電子郵件" />
      <button class="btn">訂閱</button>
    </div>
    <Day12Footer />
  </div>
</template>

<script setup>
import Day12Header from '../components/Day12Header.vue'
import Day12Footer from '@/components/Day12Footer.vue'
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

header {
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 5px 10px;
}

header ul {
  display: flex;
}

header li {
  list-style: none;
  padding: 0 15px;
}

.banner {
  background-image: url(https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  height: 200px;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  color: white;
  padding: 15px;
}

footer {
  margin-top: 15px;
  background-color: beige;
  padding: 30px 0;
  text-align: center;
}

.subscribe {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.subscribe input[type='email'] {
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 250px;
}

.subscribe button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.subscribe button:hover {
  background-color: #0056b3;
}
</style>
