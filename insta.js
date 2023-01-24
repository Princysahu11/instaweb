var arr = [
    { img: "https://images.unsplash.com/photo-1655415532396-3029aa46095e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },
    { img: "https://images.unsplash.com/photo-1655500957883-ba1736e9ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655019232874-81ae8a74fb12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655139775937-3a28757e401b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1654503398204-fa0171f721ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655147237657-ffb6de9d9e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655817014438-5115cc4aa87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80" },
    { img: "https://images.unsplash.com/photo-1655317173761-afe911b9c9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1852&q=80" },
    { img: "https://images.unsplash.com/photo-1653009607863-e8c7925128f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1656337447804-4dae09453d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655339831406-340b5b302beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655813678352-e7647461724d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1655162144312-a4cba00fad55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { img: "https://images.unsplash.com/photo-1649158356900-ef90da9d5b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },



]
var clutter = "";

arr.forEach(function (elem, idex) {
    clutter += `<div id="story">
    <img id="${idex}" src="${elem.img}"
        alt="">
</div>`
})
document.querySelector("#stories").innerHTML = clutter;



document.querySelector("#stories").addEventListener("mouseenter", function () {
    
    document.querySelector("#posts").style.opacity  =0.5;
    document.querySelector("#instapart2").style.opacity  =0.5;



})
document.querySelector("#stories").addEventListener("mouseleave", function () {
    document.querySelector("#posts").style.opacity="initial";
    document.querySelector("#instapart2").style.opacity
      ="initial";
})

document.querySelector("#fullpreview").addEventListener("mouseenter", function () {
    
    document.querySelector("#posts").style.opacity  =0.5;
    document.querySelector("#instapart2").style.opacity  =0.5;



})
document.querySelector("#fullpreview").addEventListener("mouseleave", function () {
    
    document.querySelector("#posts").style.opacity  =0.5;
    document.querySelector("#instapart2").style.opacity  =0.5;



})



document.querySelector("#cross").addEventListener("click", function () {
    document.querySelector("#fullpreview").style.display = "none"
})
var grow = 0;

document.querySelector("#stories").addEventListener("click", function (dets) {
    // console.log(arr[dets.target.id]);
    document.querySelector("#fullpreview").style.display = "initial"
    document.querySelector("#fullpreview").style.backgroundImage = `url(${arr[dets.target.id].img})`;


    setTimeout(function () {
        document.querySelector("#fullpreview").style.display = "none"
    }, 3000)

    if (grow <= 100) {
        setInterval(function () {
            document.querySelector("#growth").style.width = `${grow++}%`
        }, 30)

    }
    else {
        grow = 0
    }



})

var arr2 = [
    { chotiimg: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "princess_11", post: "https://images.unsplash.com/photo-1534679949574-9c91880cf453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1971&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "aayush001", post: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1578432156830-0ca0d7913b7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "snap__11", post: "https://images.unsplash.com/photo-1656546543427-46d17b70a149?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80", name: "aditiii006", post: "https://images.unsplash.com/photo-1656137631969-cd6fbd9720a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80", name: "Pari1110", post: "https://images.unsplash.com/photo-1654266339425-977e0fb7bb04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "anushka", post: "https://images.unsplash.com/photo-1652453057961-85532ce98b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80", name: "kapilsharma", post: "https://images.unsplash.com/photo-1652711899640-ea432c98b25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1656052564863-8ef68f491c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", name: "Dicemedia_09", post: "https://images.unsplash.com/photo-1656063654604-a454da03642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1652017667261-9d8be8f53978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80", name: "redminote9pro", post: "https://images.unsplash.com/photo-1655374879298-b987f6b06ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1651055678337-bbe6661e5d92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80", name: "vivoY210_11", post: "https://images.unsplash.com/photo-1656097802010-19085c0f2204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1617968763460-48f12e7351d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80", name: "sandeepmahe", post: "https://images.unsplash.com/photo-1655715734575-393463dbd0d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "bhartisingh_", post: "https://images.unsplash.com/photo-1656087816715-20f018c33a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80https://images.unsplash.com/photo-1656087816715-20f018c33a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1652531121284-9f567cb1c893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "_thatglamgirl", post: "https://images.unsplash.com/photo-1656360542295-e6b25b4e40e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1651083419411-b6a68cfcc07a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "triggered_", post: "https://images.unsplash.com/photo-1655464311738-26ccd3c86ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1870&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1651493284447-8ef2730601d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80", name: "zakirkhan_34", post: "https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1651378499332-2d578930b9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1903&q=80", name: "anubhavsingh", post: "https://images.unsplash.com/photo-1651233043531-5d4544b7a28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { chotiimg: "https://images.unsplash.com/photo-1651082373634-8908eafb8468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1914&q=80", name: "kajol_sharma", post: "https://images.unsplash.com/photo-1553830591-fddf9c6e2ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },

]
var clutter1 = "";
arr2.forEach(function(elem1){
    clutter1 +=`<div class="profile">
    <div id="dp">
        <img src="${elem1.chotiimg}"
            alt="">
    </div>
    <h4 class="username">${elem1.name}</h4>
    <i class="ri-more-line"></i>


</div>

<div class="post">
    <img src="${elem1.post}"
        alt="">
</div>

<div class="reaction">
    <div id="react1">
        <h3><i class="ri-heart-3-line"></i></h3>
        <h3><i class="ri-chat-3-line"></i></h3>
        <h3><i class="ri-share-forward-line"></i></h3>
    </div>
    <div id="react2">
        <h3><i class="ri-bookmark-line"></i></h3>

    </div>

</div>
`
})
document.querySelector("#posts").innerHTML = clutter1;

