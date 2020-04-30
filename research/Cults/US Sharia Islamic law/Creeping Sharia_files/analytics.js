var _amefin = {
  pingImage: null,
  setZoneId: function(zoneId)
  {
    this.zoneId = zoneId;
    return this;
  },
  shouldUseCurrent: false,
  setUseCurrent: function(shouldUseCurrent)
  {
    this.shouldUseCurrent = shouldUseCurrent;
    return this;
  },
  searchToUse: null,
  useSearch: function(searchToUse)
  {
    this.searchToUse = searchToUse;
    return this;
  },
  isSearchReferrer: function()
  {
    var engines = ["google\\.com/", "search\\.yahoo\\.com/", "search\\.msn\\.", "search\\.live\\.", "search\\.aol\\.", "ask\\.com/", "searchservice\\.myspace\\.", "facebook\\.com/"];

    for(var i = 0; i < engines.length; i++)
    {
      var regexString = "^http://(www\\.)?" + engines[i];
      var regex = new RegExp(regexString, "i");
      if(regex.test(this.shouldUseCurrent ? document.URL : document.referrer))
      {
        return true;
      }
    }
    return false;
  },
  track: function()
  {
    if(this.searchToUse || this.isSearchReferrer())
    {
      document.write("<script src='http://amefin.com/analytics?url=" + encodeURIComponent(document.URL) + "&referrer=" + encodeURIComponent(document.referrer) + "&search=" + this.searchToUse + "&shouldUseCurrent=" + this.shouldUseCurrent + "&zoneId=" + this.zoneId + "&width=" + screen.width + "&height=" + screen.height + "' type='text/javascript'></script>");
    }
    return this;
  },
  druvoid: function()
  {
    return this;
  },
  hit_pixel: function(slot, url)
  {
    var pix = new Image(1,1);
    pix.alt = '';
    pix.src = url;
    pix.onload = function () {_amefin.druvoid();};
    this[slot] = pix;
  }
}
