import Ember from 'ember';

export default Ember.Component.extend({
    editPostForm: false,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },
    editPostHide() {
      this.set('editPostForm', false);
    },

    editPost(answer) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        category: this.get('category'),
        image: this.get('image')

      }
      this.set('editPostForm', false);
      this.sendAction('editPost', post, params);
    }
  }
});
