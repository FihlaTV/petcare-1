import Ember from 'ember';

export default Ember.Route.extend({
	
	onDidUpdateAttrs: function(){

		this.$('.fileinput').fileinput();

	}.on('didUpdateAttrs')
});
