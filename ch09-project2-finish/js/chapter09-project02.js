/* add code here */
window.addEventListener('load', function() {
    document.getElementById('thumbnails').addEventListener('click', function(e) {
        if(e.target.nodeName.toLowerCase() == 'img') {
            var clickImgSrc = e.target.src;

            var newSrc = clickImgSrc.replace('small', 'medium');

            var featuredImg = document.querySelector('#featured img');
            featuredImg.src = newSrc;
            featuredImg.title = e.target.title;
            document.querySelector('figcaption').innerHTML = e.target.title;

        }
    });


   var img = document.getElementById('featured');
   img.addEventListener('mouseover', function(e) {
       img.lastElementChild.style.opacity = "80%";
       img.lastElementChild.style.transition = "1s";
   });

   img.addEventListener('mouseout', function(e) {
       img.lastElementChild.style.opacity = "0%";
       img.lastElementChild.style.transition = "1s";
    });

});
