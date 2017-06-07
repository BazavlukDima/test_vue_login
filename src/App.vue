<template>
  <div id="app">

    <div class="container">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css'

  body {
    background: #eee !important;
  }
</style>

<!-- <script src="./components/modulus/jquery-3.2.1.min.js"></script> -->
