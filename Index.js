// console.log("skdsjdklsdkjkd")
// const element=document.getElementById("my");
// element.addEventListener("click", ()=>{
//   document.getElementById("demo").innerHTML = "Hello World"
// });


const p_btns=document.getElementById("p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elm=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked)

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num=p_btn_clicked.dataset.btnNum;
    // console.log(btn_num)

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)
    p_img_elm.forEach((curElem)=>curElem.classList.add("p-imgnot-active"))
    img_active.forEach((curElem)=>curElem.classList.remove("p-imgnot-active"))

});



