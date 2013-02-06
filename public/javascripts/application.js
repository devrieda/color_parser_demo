var Application = Class.extend({
  init: function() {
    $("#url").submit($.proxy(this.submitForm, this));
  }, 
  submitForm: function(event) {
    event.preventDefault();
    $("#spinner").show();

    $.post("/parse", {url: $("#site_url").val()}, 
      $.proxy(function(data) {
        this.parseComplete(data);
      }, this));
  },

  parseComplete: function(data) {    
    var html = "";
    
    if (data.colors.length > 0) {
      html += '<div class="colors">';
      $.each(data.colors, function(i, color) {
        html += '<a class="color" href="#" style="background-color: #'+color+';">';
        html += color;
        html += '</a>';
      });
      html += "</div>";
      html += '<div class="iframe"><iframe src="'+data.url+'"' + 
                  ' sandbox="allow-scripts"></iframe></div>';

    } else {
      html += '<div class="none">Couldn\'t find colors for &quot;<strong>'+data.url+'</strong>&quot;.</div>';
    }
  
    $("#results").html(html);
    $("#spinner").hide();
  }
});

$(document).ready(function() {
  var page = new Application();
});
