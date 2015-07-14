var $newBlog = $("#newBlog");
function prepend(data) {
  $newBlog.prepend('<article class="style"><h2>' +data.title +'</h2><p>' + data.blog+'</p></article>');
};
var $post = function() {
  var $title = $("#POST-title").val();
  var $blog = $("#POST-blog").val();
  $.ajax({
    type: 'POST',
    url: 'http://rest.learncode.academy/api/project/test',
    data: {title: $title, blog: $blog},
    success: function(newData) {
      prepend(newData);
    }
  });
}
var $get = function() {
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/project/test',
    success: function(data) {
      $.each(data, function(i, item) {
        prepend(item);
      });
    }
  });
};
  $get();
$('#btn').click(function() {
   $post();
   $("#POST-title").val(" ");
   $("#POST-blog").val(" ");
});
