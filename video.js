
const loadNavBtn = async()=>{
   try{
    const res =await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    showNavBtn(data.categories);
   }catch(e){
    console.log(e);
   }
}

 const showNavBtn = (data)=>{
    const navBtnConatiner = document.getElementById('navBtnConatiner');
    data.forEach(element => {
        const btn = document.createElement('button');
        btn.classList = 'btn m-2'
        btn.innerText = element.category;
        navBtnConatiner.append(btn);

        
    });

 }

loadNavBtn();