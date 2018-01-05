// Playlist

function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function() {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.song[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.song[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }

  this.play();
};


Playlist.prototype.renderInElement = function() {

};

// Song

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {

};

var playlist = new Playlist();
var hereComesTheSun = new Song('Here Comes the Song', 'The Beatles', '2.:54');

var walkingOnSunshiine = new Song('Walking on Sunshine', 'Katrina and the Waves', '3:43');

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshiine);
