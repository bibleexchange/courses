const VideoServiceBase = require("./VideoServiceBase");

class PreziService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 960, height: 749, allowfullscreen:true };
  }

  extractVideoID(reference) {
    return reference;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    return "https://docs.google.com/presentation/d/e/" + escapedVideoID
        + "/embed?start=false&loop=false&delayms=3000"
  }

}


module.exports = PreziService;
//2PACX-1vRI5EtpCdtNZWfAvLL28ipczfxssO-6FQ6FKhv62b25ZXinb0wMV8eoTTupoteqosG-NigxdzEKtWkW