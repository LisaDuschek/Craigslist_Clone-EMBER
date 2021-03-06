import Ember from 'ember';



export default Ember.Route.extend({
      model() {
        return this.store.findAll('category');

    },


      actions: {
        save(params){
          var newCategory = this.store.createRecord('category', params);
          newCategory.save();
          this.transitionTo('index');
        },

        update(category, params) {
          Object.keys(params).forEach(function(key) {
            if(params[key]!==undefined) {
              question.set(key, params[key]);
            }
          });
          category.save();
          this.transitionTo('index');
        },

        destroyCategory(category) {
          category.get('posts').forEach(function(answer){
            answer.destroyRecord();
          });
          category.destroyRecord();
          this.transitionTo('index');
        }
    }
});
