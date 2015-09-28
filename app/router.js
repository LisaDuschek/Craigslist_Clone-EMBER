import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('housing');
  this.route('jobs');
  this.route('romance');
  this.route('for_sale');
  this.route('discussion_forum');
  this.route('single-category', {path: '/category/:category_id'});
  this.route('single-post', {path: '/post/:post_id'});
});

export default Router;
