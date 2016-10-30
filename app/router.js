import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/home'});
  this.route('perdidos');
  this.route('callejeros');

  this.route('pet', function() {
  	this.route('new');
    this.route('description');
  });
  
  this.route('reporte');
});

export default Router;
