function renderer(tokens, idx, options, _env) {
  let videoToken = tokens[idx];

  let service = videoToken.info.service;
  let videoID = videoToken.info.videoID;

  return service.getEmbedCode(videoID);
}


module.exports = renderer;
