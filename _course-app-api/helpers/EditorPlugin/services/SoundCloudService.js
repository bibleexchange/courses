const VideoServiceBase = require("./VideoServiceBase");

class SoundCloudService extends VideoServiceBase {

    getDefaultOptions() {
        return { width: "100%", height: 166, scrolling:"no", frameborder:"no" };
    }

    extractVideoID(reference) {
        return reference;
    }

    getVideoUrl(videoID) {
        let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + escapedVideoID
        + "&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
    }

}

module.exports = SoundCloudService;