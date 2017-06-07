<template>
  <div class="wrapper">
      <form class="form-signin" id="form-login">
        <h2 class="form-signin-heading">Please login</h2>
        <input
          v-model="user.email"
          type="text"
          class="form-control"
          name="email"
          placeholder="Email Address"
          id="email"
          required=""
          autofocus=""
        >
        <div style="margin-top: 15px"></div>
        <input 
            v-model="user.password"
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Password"
            required=""
        >
        <button
            v-on:click.prevent="doLogin"
            class="btn btn-lg btn-primary btn-block"
        >Login</button>
      </form>
  </div>
</template>

<style src="../../assets/css/app.css"></style>

<script src="./login.js"></script>
