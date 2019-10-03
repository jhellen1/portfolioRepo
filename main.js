function init() {
  $('nav a').click(e => {
    // e.preventDefault();
    // console.log(this);
    let anchor = $(e.target).attr('data-link');
    // let anchor = $(this).data('link');
    scrollToAnchor(anchor);
  })  
}
function scrollToAnchor(scrollTarget){
    console.log('trying to scroll to', scrollTarget)
    let aTag = $(`section[class='${scrollTarget}']`);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
$(init)