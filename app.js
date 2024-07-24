//queryselector ile resim klasını alıp resimlere atadık
const resimler = document.querySelectorAll(".resim");

//forEach ile resim içinde geziyor

resimler.forEach(panel => {
    //burada addEventListener ile olay dinleme yapılır buradaki olay tıklama
    panel.addEventListener("click", function(){

        yusuf()
        //tıkladığımda resmin yanına active classını ekleyecek
        panel.classList.add("active")
    })
}

)
//resimlerin içindeki active classını kaldırıyor
function yusuf () {
    resimler.forEach(panel =>{
        panel.classList.remove("active")
    })
}

// resimler.forEach(panel => {
//     panel.addEventListener("click", () => {

//         removeActive();
//         panel.classList.add("active");
//     });
// })

// function removeActive(){
//     resimler.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }