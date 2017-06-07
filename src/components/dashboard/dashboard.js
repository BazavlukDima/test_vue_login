import modal from './modal.vue'

export default {
  data () {
    return {
      comments: [],
      showModal: false,
      parent: '',
      authors: ''
    }
  },
  created () {
    this.commentsGet()
  },
  methods: {
    commentsGet () {
      const loginUrl = process.env.API_PATH + '/v2/comments'
      const postData = {
        token: window.localStorage.getItem('authUser')
      }
      this.$http.post(loginUrl, postData)
        .then(response => {
          var comments = response.data.comments
          var filteredComments =[]

          comments.forEach(function(comment, i, comments) {
            var parentId = comment.parent_id

            var findIndex = filteredComments.findIndex((comment, i, comments) => {
                return parentId == comment.id
            })

            comment.deepLevel = 0
            if (findIndex == -1) {
              filteredComments.push(comment)
            } else {
              comment.deepLevel++
              filteredComments.splice(
                findIndex+1, 0, comment
              );
            }
          })
          this.comments = filteredComments
        }, response => {
          console.log(response.statusText)
      })
    },

    commentParentId (parent, authors) {
      this.showModal = true
      this.parent = parent

      window.localStorage.setItem('parentId', JSON.stringify(this.parent))
    }
  },
  components: {
    'modal': modal,
    props: ['this.parent']
  }
}
