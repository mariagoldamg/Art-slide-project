const next = document.querySelector (`#next`);
const back = document.querySelector (`#back`);

photos = [`art1.jpg`,`art2.jpg`, `art3.jpg`];
let i=0;

next.addEventListener (`click`, ()=> {
    i++;
    if (i>photos.length-1) {i=0};
    document.querySelector (`#pictures`).src = photos [i];
});

back.addEventListener (`click`, ()=> {
    i--;
    if (i<0) {i=photos.length-1};
    document.querySelector (`#pictures`).src = photos [i];
})


















