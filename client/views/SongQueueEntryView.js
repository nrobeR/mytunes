// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td style="background:red">(<%= artist %>)</td><td><%= title %></td><td class="remove">remove</td>'),

  initialize: function(){
    // this.render();
    this.model.on('remove', this.remove, this);
  },

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
    },

    'click .remove': function() {
      console.log('removed!!!');
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
