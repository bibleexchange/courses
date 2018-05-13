const VideoServiceBase = require("./VideoServiceBase");


class VineService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 600, height: 600, embed: "simple" };
  }

  extractVideoID(reference) {
    let match = reference.match(/^http(?:s?):\/\/(?:www\.)?vine\.co\/v\/([a-zA-Z0-9]{1,13}).*/);
    return match && match[1].length === 11 ? match[1] : reference;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    let escapedEmbed = this.env.md.utils.escapeHtml(this.options.embed);
    return `//vine.co/v/${escapedVideoID}/embed/${escapedEmbed}`;
  }

}


module.exports = VineService;
