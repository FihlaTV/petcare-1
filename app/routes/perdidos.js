import Ember from 'ember';
export default Ember.Route.extend({
  setupController: function(controller) {
   controller.setProperties({
     lat: 20.1010608,
     lng: -98.75913109999999,
     zoom: 15
   });
 }
});
