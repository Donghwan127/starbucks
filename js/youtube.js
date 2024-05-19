// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수 이름 바꾸면 안됨
function onYouTubeIframeAPIReady() { 
  //id가 player인 것을 찾는다
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function(event) {
        event.target.mute()   //음소거. 여기서 target은 재생되고 있는 영상 자체를 의미함. 
      }
    }
  });
}