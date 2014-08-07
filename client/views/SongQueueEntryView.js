// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function(){
    this.render();
  },

  render: function(){
    var html = this.model.get('artist')+ " "  + this.model.get('title');
    $('body').append( this.$el.html(html) );
    return this;
  }
});
