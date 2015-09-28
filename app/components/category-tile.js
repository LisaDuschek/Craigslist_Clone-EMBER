import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    update(category, params) {
      this.sendAction('update', category, params);
    },
    delete(category) {
      if(confirm('Are you sure you want to delete this category?')){
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
