// let arrImg = [ 
//     [\image\headp1.jpg, \image\headp1.jpg, \image\headp1.jpg]
//     [\image\lapis1.jpg, \image\lapis1.jpg, \image\lapis1.jpg]
//     [\image\mobi1.jpg, \image\mobi1.jpg, \image\mobi1.jpg]
// ];

// document.querySelectorAll(".item").forEach((element, elementIndex) => {
//     element.addEventListener("click", () =>{
//       //  console.log(elementIndex);
//         if(elementIndex != 0)
//             showImagesFiltered(elementIndex);
//             else
//             showAllImages();
        
//     })
// });


let list = document.querySelectorAll(".list");
let itembox = document.querySelectorAll(".itembox");

for(let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
       for(let j=0; j<list.length; j++){
        list[j].classList.remove('active');
       } 
       this.classList.add('active');

       let dataFilter = this.getAttribute('data-filter');
       for(let k=0; k<itembox.length; k++){
        itembox[k].classList.remove("active");
        itembox[k].classList.add("hide");

        if(itembox[k].getAttribute("data-item") == dataFilter || dataFilter == 'all'){
            itembox[k].classList.remove('hide');
            itembox[k].classList.add('active');
        }
       }
    }) 
}













