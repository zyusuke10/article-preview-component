const share = document.querySelector('.button');
const share1 = document.querySelector('.button1');
const footer = document.querySelector('.footer-display');
const footer2 = document.querySelector('.footer2-display')
const button = document.querySelector('.button');
const button1 = document.querySelector('.button1');
const username = document.querySelector('.user-name');

share.addEventListener('click',()=>{
    footer2.style.display='block';
    footer.style.display='none';
})

share1.addEventListener('click',()=>{
    footer2.style.display='none';
    footer.style.display='block';
})

const mediaQuery = window.matchMedia('(min-width:1440px)');

if(mediaQuery.matches){
    share.addEventListener('click',()=>{
        footer2.style.display='block';
        footer.style.display='block';
        button1.style.display='block';
        button.style.display='none';
        username.style.marginRight="200px";

    })
    share1.addEventListener('click',()=>{
        footer2.style.display='none';
        footer.style.display='block';
        button1.style.display='none';
        button.style.display='block';
        username.style.marginRight="134px";
    })
}