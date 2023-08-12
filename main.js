// درس scroll في js
// اعرف متغيرات
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function(){
    let value = scrollY;
    // log بيعرض انا واقف فين لما بنزل من الموقع بس م دل لعرض النتيج فقط
    // console.log(value)
    // مكنتش اقعدر اتحكم في التحرك لو مطنتش اديتلها للكلاس min img ادتلها position : absolute
    // left قيمه value او scroll
    stars.style.left = value + 'px';
    //    اخلي القمر ينزل
    // عشان يزل بسرعه بضرب في لبقيمه value *4
    moon.style.top= value *4 + 'px';
    mountains3.style.top= value *2 + 'px';
    mountains4.style.top= value *1.5 + 'px';
    river.style.top= value +'px';
    // عشان لي القارب ينزل بسرعه العاديه وفي نفس الوقت يختفي من الجنب
    boat.style.top= value + 'px';
    // اخليه يتحرك للشمال
    boat.style.left= value *3 +  'px'; 
    // اكبر الكلمه اللي في النصف 
    nouvil.style.fontsize = value  + 'px';
    // بقوله لما اعمل اسكرول خلي الكلمه تكبر واحده واحد
    // بقوله لو اسكرول واي اكبر من او يساوي 67 
    if(scrollY >= 67 ){
        nouvil.style.fontsize = 67 + 'px';
        nouvil.style.position= 'fixed';
        if(scrollY >= 478){
            nouvil.style.display = 'nono';

        }else{
            nouvil.style.display = 'block';

        }
        if(scrollY >= 127){
        document.querySelector('.main').style.background ='linear-gradient(rgb(60 109 155) , rgb(33 96 120))'
        }else{
            document.querySelector('.main').style.background ='linear-gradient(rgb(70, 2, 83) , rgb(25, 3, 77))'
 
        }

    }

}