<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-primary">
                <div class="panel-heading"><h4 style="text-align: center;">Comments</h4></div>

                <div class = "panel-body">
                    <div id="list-group">
                        <div v-for="comment in comments" :id="comment.parent_id" 
                            class = "list-group-item" 
                            :style="'margin-left: ' + (comment.deepLevel * 20) + 'px'">
                                <div class="panel panel-default">
                                <div class="panel-heading">
                                <strong>{{ comment.author + ': ' }}</strong>
                                <span class="text-muted">{{ comment.created_at}}</span>
                                </div>
                                <div class="panel-body">
                                {{ comment.message }}
                                  <a 
                                  id="show-modal" 
                                  v-on:click ="parent_id = comment.id"
                                  @click="commentParentId(comment.id, comment.author)"
                                   style="float: right;"
                                   >
                                  <i class="glyphicon glyphicon-comment"></i>
                                  </a>
                                </div>
                          </div>
                        </div>
                        <modal v-if="showModal" @close="showModal = false">
                        </modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style src="../../assets/css/dashboard.css"></style>

<script src="./dashboard.js"></script>
