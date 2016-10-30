import Ember from 'ember';
export default Ember.Route.extend({
  setupController: function(controller) {
     controller.setProperties({
       zoom:18,
       lat: 20.1010608, // Required
       lng: -98.75913109999999,

       markers: Ember.A([
         {
           id: 'unique-id',        // Recommended
             lat: 20.1010608, // Required
             lng: -98.75913109999999,
                 // Required
             click: function(event, marker) {},
             animation: google.maps.Animation.DROP,

             clickable: true,
             crossOnDrag: true,
             cursor: 'pointer',
             draggable: true,

             label: 'A',
             opacity: 1,
             optimized: true,
             shape: new google.maps.Marker({
                position: new google.maps.LatLng(),
                shape:  {coords: [0,0,50,50], type: "rect"},

            }),
            title: 'string',
             visible: true,
             zIndex: 999

           }
         ])
       })
     }
   });
