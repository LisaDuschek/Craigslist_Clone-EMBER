import Ember from 'ember';

export default Ember.Component.extend({

    addNewPost: false,

    actions: {
        postFormShow() {
            this.set('addNewPost', true);
        },
        savePost() {
          var params = {
            author: this.get('author'),
            title: this.get('title'),
            text: this.get('text'),
            category: this.get('category'),
            image: this.get('image'),
          };
          this.set('addNewPost', false)
          this.sendAction('savePost', params);
        }
  }
});
