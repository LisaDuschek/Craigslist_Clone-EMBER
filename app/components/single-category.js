import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    savePost(params) {
      this.sendAction('savePost', params);
    },
    deletePost(post){
      this.sendAction('deletePost', post);
    },
    editPost(post, params) {
      this.sendAction('editPost', post, params);
    }
  }
});
