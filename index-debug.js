;(function() {
var dd_avatar_000_index_debug;
dd_avatar_000_index_debug = function () {
  function _isEnglish(name) {
    return name.match(/^([a-zA-Z]|\s|,|\.)+$/) !== null;
  }
  var colors = [
      '#78c06e',
      '#f65e8d',
      '#f6bf26',
      '#f65e5e',
      '#5e97f6',
      '#9a89b9',
      '#a1887f',
      '#ff943e',
      '#5ec9f6',
      '#3bc2b5',
      '#5c6bc0',
      '#bd84cd',
      '#6bb5ce',
      '#c5cb63',
      '#ff8e6b',
      '#78919d'
    ];
  var colorsLength = colors.length;
  var AvatarService = {
      getAvatar: function (nick, name) {
        var name = this._getShowName(nick || name);
        var color = this._getColor(name);
        return {
          name: name,
          color: color
        };
      },
      _getShowName: function (name) {
        var showName = name || '', arr = [];
        if (_isEnglish(showName)) {
          //将“,.”转为空格，如果导致出现连续空格（如原字符为", "，则转换后会为"  "），
          //则将连续空格转换为单个空格
          showName = showName.replace(/,|\./g, ' ').replace(/\s+/g, ' ');
          arr = showName.split(' ');
          if (arr.length === 1) {
            return showName.slice(0, 2);
          }
          return arr[0].slice(0, 1) + arr[1].slice(0, 1);
        }
        return showName.replace(/,|\.|\s+/g, '').slice(-2);
      },
      _getColor: function (name) {
        var total = 0;
        for (char in name) {
          total += name.charCodeAt(char);
        }
        return colors[total % colorsLength];
      }
    };
  return AvatarService;
}();

if (typeof exports == "object") {
  module.exports = dd_avatar_000_index_debug;
} else if (typeof define == "function" && (define.cmd || define.amd)) {
  define(function(){ return dd_avatar_000_index_debug });
} else {
  this["ddAvatar"] = dd_avatar_000_index_debug;
}
}());