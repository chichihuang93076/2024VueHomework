<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>| <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/week1">Week1</RouterLink>| <RouterLink to="/week3">Week3</RouterLink>|
        <RouterLink to="/day12">Day12</RouterLink>| <RouterLink to="/day13">Day13</RouterLink>|
        <RouterLink to="/day14">Day14</RouterLink>| <RouterLink to="/day15">Day15</RouterLink>|
        <RouterLink to="/day16">Day16</RouterLink>|<RouterLink to="/Day17Signup">Signup</RouterLink
        >| <RouterLink to="/day17">Day17</RouterLink>| <RouterLink to="/day18">Day18</RouterLink>|
        <RouterLink to="/day19">Day19</RouterLink>|
        <RouterLink to="/todolist">todolist</RouterLink>|
      </nav>
    </div>
  </header>

  <RouterView />
</template>
