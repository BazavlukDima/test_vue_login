<template>
<div id="modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-close">
                <span class="glyphicon glyphicon-remove" @click="$emit('close')"></span>
          </div>

          <div class="modal-header">
            <slot name="header">
                <h3>Leave your comments:</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <form>
                    <div class="form-group">
                        <textarea
                        v-model="info.message"
                        rows="3"
                        class="form-control"
                        id="Message"
                        placeholder="Message">
                        </textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default"
                        @click="commentSend()"
                        @click="$emit('close')">
                        Send
                        </button>
                    </div>
                </form>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script >
export default {
  props: ['this.parent'],
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
    commentSend () {
      this.info.author = window.localStorage.getItem('userName')
      // Math.random().toString(36).substring(7)
      this.info.parent_id = window.localStorage.getItem('parentId')
      window.localStorage.removeItem('parentId')

      this.commentRequest()
      .then(function (response) {
        console.log(response.statusText)
      }, function (response) {
        console.log('error' + response.statusText)
      })
    },

    commentRequest () {
      return this.$http.post(process.env.API_PATH + '/v2/addcomments', this.info)
    }
  }
}
</script>
