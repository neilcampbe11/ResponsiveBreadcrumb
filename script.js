$('.toggler').click(function(){
  var $breadCrumb = $('.breadcrumb');
  
  if ($breadCrumb.hasClass('showCrumbs'))
  {
    $breadCrumb.removeClass('showCrumbs');  
  }else{
    $breadCrumb.addClass('showCrumbs');  
  }  
});