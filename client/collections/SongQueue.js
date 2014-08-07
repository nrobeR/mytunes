// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.isFirst, this);
    this.on('ended', this.hasEnded, this);
    this.on('dequeue', this.remove, this);
    this.on('enqueue', this.isFirst, this);
  },

  isFirst: function() {
    if(this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function(){
    this.models[0].play();
  },

  hasEnded: function(){
    this.shift();
    this.hasSongs();
  },

  hasSongs: function(){
    if(this.length > 0){
      this.playFirst();
    }
  }
});
