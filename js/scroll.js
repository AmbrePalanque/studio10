  document.addEventListener('DOMContentLoaded', function(){
    if ($(window).width() >= 1024) {
    document.querySelector('.horizontal-scroll').addEventListener('mousewheel', function(event) {
      if(Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        this.scrollLeft += event.deltaY;
      }
      event.preventDefault();
    });
  }
  }, false);
