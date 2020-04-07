/* add code here  */
window.addEventListener('load', function() {
    // loop over document.querySelectorAll('.hilightable')
    // loop over document.querySelectorAll('.required')
    for (let node of document.querySelectorAll(".hilightable")) {
        node.addEventListener('focus', function() {
            node.classList.remove("hilightable");
            node.classList.add("highlight");
        });
        node.addEventListener('blur', function() {
            node.classList.remove("highlight");
            node.classList.add("hilightable");
        });
    }

    var form = document.getElementById('mainForm');
     form.addEventListener('submit', function(e) {
        for(let node of document.querySelectorAll(".required")) {
            fieldValue = node.value;
            if(fieldValue == null || fieldValue == ""){
                e.preventDefault();
                node.classList.add("error");
            }
        }
    
    });


});