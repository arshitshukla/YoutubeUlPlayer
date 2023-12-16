const youtubeAPI = 'AIzaSyCJyy1mthmI6M-C7RMi0oGKy7MQ3aLbgx8';
const ulVideo = 'sHoAihtKnho';

const body = document.createElement('script');
body.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(body, firstScriptTag);

let media;


function onYouTubeIframeAPIReady() {
  media = new YT.Player('media', {
    height: '360',
    width: '640',
    videoId: ulVideo,
    playerVars: {
      modestbranding: 1,
      fs: 1,
      rel: 0,
      controls: 1
    }
  });
}
