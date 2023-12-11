/*CHANGE BACKGROUND HEADER*/ 
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll_header-bg'); else header.classList.remove('scroll_header-bg')
}
window.addEventListener('scroll', scrollHeader)

/* code for top searchbar */
$(document).ready(function(){
    $("#nav_search-btn").click(function(){
      $("#top_searchbar").slideToggle("fast");
    });
  });