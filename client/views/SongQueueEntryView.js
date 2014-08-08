// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  el: '<li class="queue">',

  template: _.template('(<%= artist %>) <%= title %>'),

  initialize: function(){
    // this.render();
    this.model.on('remove', this.remove, this);
  },

  events: {
    // 'click': function() {
    //   this.model.play();
    //   this.model.enqueue();
    // },

    'click': function() {
      console.log('removed!!!');
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
