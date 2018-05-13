const YouTubeService = require("./services/YouTubeService");
const VimeoService = require("./services/VimeoService");
const VineService = require("./services/VineService");
const PreziService = require("./services/PreziService");
const BibleExchangeService = require("./services/BibleExchangeService");
const GoogleSlideService = require("./services/GoogleSlideService");
const SoundCloudService = require("./services/SoundCloudService");

class PluginEnvironment {

  constructor(md, options) {
    this.md = md;
    this.options = Object.assign(this.getDefaultOptions(), options);

    this._initServices();
  }

  _initServices() {
    let defaultServiceBindings = {
      "youtube": YouTubeService,
      "vimeo": VimeoService,
      "vine": VineService,
      "prezi": PreziService,
      "be":BibleExchangeService,
      "gslide":GoogleSlideService,
      "soundcloud":SoundCloudService
    };

    let serviceBindings = Object.assign({}, defaultServiceBindings, this.options.services);
    let services = {};
    for (let serviceName of Object.keys(serviceBindings)) {
      let _serviceClass = serviceBindings[serviceName];
      services[serviceName] = new _serviceClass(serviceName, this.options[serviceName], this);
    }

    this.services = services;
  }

  getDefaultOptions() {
    return {
      containerClassName: "block-embed",
      serviceClassPrefix: "block-embed-service-",
      outputPlayerSize: true,
      allowFullScreen: true,
      filterUrl: null
    };
  }

}


module.exports = PluginEnvironment;
