const VideoPlayApi = async (videoId) => {
  const url = `https://yt-api.p.rapidapi.com/dl?id=${videoId}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '535e89df90mshfade627c7a37a60p1bc4c8jsnb603321fdec2',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
  }
}

export default VideoPlayApi;