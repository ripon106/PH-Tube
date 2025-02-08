
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


// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }


//time count

function getTimeString(time){
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    let min = parseInt(remainingSecond/60);
    remainingSecond = parseInt(remainingSecond/60);
    return `${hour} hour ${min} min ${remainingSecond} sec ago`
}

const displayVideo = (videoItem) => {
    console.log(videoItem)
    const video = document.getElementById('video');
    videoItem.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card card-compact shadow-xl'
         card.innerHTML = `
            <figure class="h-[200px] relative">
            <img class="object-cover w-full h-full" src=${item.thumbnail} alt="Shoes" />
          
            ${item.others.posted_date.length === 0 ?"":`<span class="absolute right-2 bottom-2 bg-slate-400 rounded-lg px-2 ">${ getTimeString(item.others.posted_date)}</span>`}
            </figure>
            <div class="px-0 py-2 flex gap-2">
               
            <div class="px-2 ">
                <img class = " h-10 w-10 object-cover rounded-full" src=${item.authors[0].profile_picture}>
                
            </div>
               <div>
                <h2>${item.title}</h2>
            <div class="flex gap-2">
            <p>${item.authors[0].profile_name}</p>
            ${item.authors[0].verified ===true ? `<img class="w-5 h-5 object-cover" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">` :" "}
            
            </div>

            <p>${item.others.views} views</p>
              
              
              </div>
         </div>
        `
        video.append(card);
    })

   

}


loadVideo();