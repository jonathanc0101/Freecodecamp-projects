

let sections = document.getElementsByClassName("main-section");


let observer = new IntersectionObserver(function(entries) {
   for(entry of entries){
       let idNav = [entry.target.id, "_nav"].join("");
       let nav = document.getElementById(idNav);

       if(entry.isIntersecting === true){
           nav.classList.add("active");

       }else{
            nav.classList.remove("active");
       }
   }
}, { threshold: [.28] })

let observer2 = new IntersectionObserver(function(entries) {
        let idNav = [entries[0].target.id, "_nav"].join("");
        let nav = document.getElementById(idNav);
 
        if(entries[0].isIntersecting === true){
            nav.classList.add("active");
 
        }else{
             nav.classList.remove("active");
        }
 }, { threshold: [.1] });


for(item of sections){
    observer.observe(item);
}
observer2.observe(sections[sections.length-1]);

