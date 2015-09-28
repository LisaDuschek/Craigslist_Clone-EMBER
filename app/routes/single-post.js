import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('post', params.post_id);
    },

    actions: {
      savePost(params) {
        var newPost = this.store.createRecord('post', params);
        var category = params.category;
        category.get('posts').addObject(newPost);
        newPost.save().then(function() {
            return category.save();
        });
        this.transitionTo('category', params.category);
      },

      deletePost(post) {
        post.destroyRecord();
        this.transitionTo('category');
      },

      editPost(post, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            post.set(key, params[key]);
          }
        });
        post.save();
        this.transitionTo('category');
      }
    }
});
