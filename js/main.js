
    lightbox.option({
    'maxHeight': 600,
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false,
    'disableScrolling': true
    });



$(function() {
  $('#searchBar').keyup(function() {
    var search = $(this).val().toLowerCase(); /* var holding searchBar results */
    
    $('.gallery li').each(function() {    
      $(this).find('a').attr('data-lightbox', 'images');
      
      var text = $(this).find('a').attr('data-title'); /* var holding data-title attribute */
      
      if(text.includes(search)) { /* checks if searched word is included in any data-title text */
        $(this).show();

      } else {
        $(this).hide().find('a').removeAttr('data-lightbox'); /* hides if not */
      }
      
    });
  });
  
});    
