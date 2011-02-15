function TimelineSetter() {
  this.items = [];
  
  var that = this;
  $(".item").each(function() {
    that.items.push(Number($(this).attr("data-item-timestamp")));
  });
  this.max = _(this.items).max();
  this.min = _(this.items).min();
  
}

TimelineSetter.prototype.positionItems = function() {
    var that = this;
    _(this.items).each(function(item) {
      var timestamp = item;
      var position = ((that.max / that.min) - (that.max / item)) * 1000;
      $("#item_" + timestamp).css("left", position + "%");
    });
    return this;
}

$(document).ready(function() {
  var timeline = new TimelineSetter();
  timeline.positionItems();
});