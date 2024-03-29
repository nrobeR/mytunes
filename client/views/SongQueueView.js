// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  el: '<ul id="queue">',

  initialize: function(params) {
    // console.log(this.collection);
    // debugger;
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // zz = this.collection;
    this.$el.html('<li class="queue">Queue</li>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },
});
