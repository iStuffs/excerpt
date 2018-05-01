(function() {
  'use strict';

  // constants
  var wantedHeight = 120;

  // initialisation
  $('.article__content').each(function(){
    $(this).data('height', $(this).height());
    $(this).css({"height": wantedHeight+'px'});
  });

  // event
  $('.button').on('click', function(){
    // select content
    var $content = $(this).siblings('.article__content');

    // toggle expend status
    $content.data('expend', !$content.data('expend'));

    // affect new height
    var myHeight = $content.data('expend') ?  $content.data('height') : wantedHeight;
    $content.css({height: myHeight});

    // togghe text button
    $(this).text($content.data('expend') ? 'Read less' : 'Read more');

  });
}($));
