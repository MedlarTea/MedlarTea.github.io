<h1 id="visiting-statistics" class="visitor-stats-heading">👀 Visiting Statistics</h1>

<div class="visitor-stats-widget" data-pin-color="#00369f">
<script async src="https://feed-pulse.com/api/embed/visitor-globe.js?site_id=04566605-16b4-476a-969a-7b3cb9f6918d&map=flat&theme=ivory&w=360&h=200"></script>
<script>
(function () {
  var root = document.currentScript && document.currentScript.parentElement;
  if (!root) return;

  var pin = (root.dataset.pinColor || "#00369f").replace("#", "");
  var pr = parseInt(pin.slice(0, 2), 16);
  var pg = parseInt(pin.slice(2, 4), 16);
  var pb = parseInt(pin.slice(4, 6), 16);

  function isPinPixel(r, g, b, a) {
    return a > 40 && g > 110 && g > r + 25 && g > b + 15;
  }

  function recolorCanvas(canvas) {
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    var w = canvas.width;
    var h = canvas.height;
    if (!w || !h) return;

    var image = ctx.getImageData(0, 0, w, h);
    var data = image.data;

    for (var i = 0; i < data.length; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];
      var a = data[i + 3];
      if (!isPinPixel(r, g, b, a)) continue;

      var scale = Math.min(1.4, Math.max(0.55, g / 197));
      data[i] = Math.min(255, Math.round(pr * scale));
      data[i + 1] = Math.min(255, Math.round(pg * scale));
      data[i + 2] = Math.min(255, Math.round(pb * scale));
    }

    ctx.putImageData(image, 0, 0);
  }

  function tick() {
    var canvas = root.querySelector("canvas");
    if (canvas) recolorCanvas(canvas);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
</script>
</div>
