(function(){
  window.App = window.App || {};
//
//   var AppModel = Backbone.Model.extend({
//     defaults: {
//       searchTerm: ''
//     }
//   });

// MLB API

  // var Teams = Backbone.Model.extend({});
  //
  // var TeamsCollection = Backbone.Collection.extend({
  //   initialize: function(collection, options){
  //     // this.appModel = options.appModel;
  //   },
  //
  //   url: "https://erikberg.com/mlb/teams.json",
  //
  //   model: Teams,
  //
  // });
  //
  // window.TeamsCollection = TeamsCollection;


// // WEATHER API
//
//   var Weather = Backbone.Model.extend({});
//
//   var WeatherCollection = Backbone.Collection.extend({
//     initialize: function(collection, options){
//       this.appModel = options.appModel;
//     },
//
//     url: function (){
//       var base = "http://www.wunderground.com/weather/api/d/";
//       var key = "3a597904d8ba1628/";
//       var conditions = "conditions/q/";
//       var state = filterState;
//       var city = 'filterCity';
//       return base + key + conditions + state + "/" + city + ".json";
//     },
//
//
//     model: Weather,
//
//     sync: function(method, collection, options) {
//       options.dataType = 'jsonp';
//       Backbone.sync(method, collection, options);
//     },
//
//     parse: function(response) {
//       return response.results;
//     }
//
//   });
//
//   var weather = new WeatherCollection();
//
//   var WeatherInputView = Backbone.View.extend({
//     events: {
//       "submit": "createWeather"
//     },
//
//     createWeather: function(event) {
//       event.preventDefault();
//       var newWeather = new Weather({body: this.$('input').val()});
//       this.collection.add(newWeather);
//       console.log(this.collection);
//     },
//
//     template: _.template( $('#weather-input-template').text() ),
//
//     render: function() {
//       this.$el.html( this.template() );
//       return this;
//     }
//   });
//
//   var weatherInputView = new WeatherInputView({
//     collection: weather
//   });
//   weatherInputView.render();
//   $('body').prepend(weatherInputView.el);
//
//   var WeatherListView = Backbone.View.extend({
//     tagName: 'ul',
//     className: 'weather-list',
//
//     initialize: function(){
//       this.listenTo(this.collection, 'add', _.bind(this.addWeather, this));
//     },
//
//     addWeather: function(weather){
//       this.$el.append('<li>' + weather.get('body') + '</li>');
//     }
//   });
//
//   // var tootsCountView = new TootsCountView({
//   //   collection: toots
//   // });
//   // $('body').append(tootsCountView.el);
//
//



var Weather = Backbone.Model.extend({
  defaults: {
    body: ""
  }
});

var WeatherCollection = Backbone.Collection.extend({

    url: function (){
      var base = "http://www.wunderground.com/weather/api/d/";
      var key = "3a597904d8ba1628/";
      var conditions = "conditions/q/";
      var state = filterState;
      var city = 'filterCity';
      return base + key + conditions + state + "/" + city + ".json";
    },
  model: Toot
});

var weather = new WeatherCollection();

var WeatherInputView = Backbone.View.extend({
  events: {
    "submit": "createWeather"
  },

  createWeather: function(event) {
    event.preventDefault();
    var newWeather = new Weather({body: this.$('input').val()});
    this.collection.add(newWeather);
    console.log(this.collection);
  },

  template: _.template( $('#weather-input-template').text() ),

  render: function() {
    this.$el.html( this.template() );
    return this;
  }
});

var weatherInputView = new WeatherInputView({
  collection: weather
});
weatherInputView.render();
$('.pagebody').prepend(weatherInputView.el);

var WeatherListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'weather-list',

  initialize: function(){
    this.listenTo(this.collection, 'add', _.bind(this.addWeather, this));
  },

  addToot: function(weather){
    this.$el.append('<li>' + toot.get('.pagebody') + '</li>');
  }
});

var weatherListView = new WeatherListView({
  collection: toots
});
$('body').append(weatherListView.el);

var WeatherCountView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function(){
    this.$el.text( this.collection.length + " toots");
  }
});
var weatherCountView = new WeatherCountView({
  collection: weather
});

$('.pagebody').append(weatherCountView.el);
})();
