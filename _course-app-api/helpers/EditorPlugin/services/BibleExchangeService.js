const VideoServiceBase = require("./VideoServiceBase");


class BibleExchangeService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 640, height: 400, border:5 };
  }

  extractVideoID(reference) {
    
    if(reference.includes("/")){
      reference = reference.explode("/",reference)
      reference = reference.pop();
    }
    return reference;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    //return `//www.bible.exchange/embed/bible/${escapedVideoID}`;
    return `/embed/bible/${escapedVideoID}`;
  }

}


module.exports = BibleExchangeService;
