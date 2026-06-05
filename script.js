<script>

// Contact Form

function sendMessage(event){
    event.preventDefault();
    alert("Message submitted successfully!");
}

// Scroll Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:'smooth'
        });
    });
});

</script>