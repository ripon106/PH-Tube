
const loadNavBtn = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await res.json();
        showNavBtn(data.categories);
    } catch (e) {
        console.log(e);
    }
}

const showNavBtn = (data) => {
    const navBtnConatiner = document.getElementById('navBtnConatiner');
    data.forEach(element => {
        const btn = document.createElement('button');
        btn.classList = 'btn m-2 bg-orange-600'
        btn.innerText = element.category;
        navBtnConatiner.append(btn);


    });

}

loadNavBtn();

// video start

const loadVideo = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data = await res.json();
        displayVideo(data.videos);
    } catch (e) {
        console.log(e);
    }
}


const displayVideo = (videoItem) => {
    console.log(videoItem)
    const video = document.getElementById('video');
    videoItem.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card card-compact shadow-xl'
         card.innerHTML = `
            <figure><img src=${item.thumbnail} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        video.append(card);
    })

   

}


loadVideo();