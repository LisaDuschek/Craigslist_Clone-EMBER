import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
      title: DS.attr(),
      text: DS.attr(),
      category: DS.belongsTo('category',{async: true}),
      image: DS.attr(),

});
