// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(params) {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    // this.collection.on('ended', function() {
    //   console.log(this.collection);
    // }, this);
  },

  render: function() {
    // Iterates through all models in the collection and
    // re-renders them.
    this.collection.models.forEach(function(songModel){
      this.addEntryView(songModel);
    }, this);

    return this.$el;
  },

  addEntryView: function(song){
    var newSongEntryView = new SongQueueEntryView({model: song});
    // newSongEntryView.render();
  }

});
