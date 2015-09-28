import Ember from 'ember';

export default Ember.Component.extend({
    updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategoryForm', true);
    },
    updateCategoryHide() {
      this.set('updateCategoryForm', false);
    },

    update(category) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        category: this.get('category'),
        image: this.get('image')
      }
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});
