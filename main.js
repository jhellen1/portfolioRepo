function init() {
  $('nav a').click(e => {
    e.preventDefault();
    // console.log(this);
    let anchor = $(e.target).attr('data-link');
    // let anchor = $(this).data('link');
    scrollToAnchor(anchor, 100);
  })
  $('.linkDrop a').click(e => {
    e.preventDefault();
    // console.log(this);
    let anchor = $(e.target).attr('data-link');
    // let anchor = $(this).data('link');
    scrollToAnchor(anchor, 140);
  })
  $('.hamburger').click(e => {
    e.preventDefault();
    console.log('hamburger clicked');
    $('.linkDrop').toggleClass('showMenu')
  })
}
function scrollToAnchor(scrollTarget, offset){
    console.log('trying to scroll to', scrollTarget)
    let aTag = $(`section[class='${scrollTarget}']`);
    let scrollDest = aTag.offset().top - offset;
    $('html,body').animate({scrollTop: scrollDest},'slow');
}
$(init)

