// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

export default {
  name: 'login',
  data () {
    return {
      user: {
        email: null,
        password: null
      },
      submitData: null
    }
  },
  methods: {
    doLogin () {
      const postData = {
        email: this.user.email,
        password: this.user.password
      }
      const loginUrl = 'http://testlaravel.loc:8080/api/login'
      var authUser = {}
      this.$http.post(loginUrl, postData)
        .then(response => {
            authUser = response.data.token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            window.localStorage.setItem('userName', this.user.email)

            // var router = new Router();
            // router.go('/');
            this.$router.push('dashboard');
        }, response => {
          alert(response.statusText)
        })
    }
  }
}
