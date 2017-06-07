export default {
  data () {
    return {
      info: {
        author: '',
        parent_id: '',
        message: ''
      }
    }
  },
  methods: {
    commentsSend () {
      if (!empty(this.info.message)){
        this.parent_id = comment.parent_id
      this.author = comment.author
      this.$http.post(process.env.API_PATH + '/v2/addcomments', JSON.stringify(this.info))
        .then(function (response) {
          console.log(response.statusText)
        }, function (response) {
          console.log('ne work' + response.statusText)
        })
      }
    }
  }
}
