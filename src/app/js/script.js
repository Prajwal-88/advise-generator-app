const advice_num = document.querySelector('#advice_num')
const advice_txt = document.querySelector('#advice');
const butn = document.querySelector("#btn")



butn.addEventListener('click',()=>{
    adviceLoad();
})

// const advice_fetch = async () =>{
//     const API_Request = new Request('https://api.adviceslip.com/advice');
//     const fetch_Response = await fetch(API_Request);

//     const response_txt = await fetch_Response.text()
//     const advice =JSON.parse(response_txt);
//     console.log(advice)

//     populate_id(advice);
//     populate_advice(advice);
// }
// function populate_id(obj){
//     advice_num.textContent=obj.slip.id;
// }
// function populate_advice(obj){
//     advice_txt.textContent=obj.slip.advice;
// }
function adviceLoad() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            let id = data['slip']['id'];
            let advice = data['slip']['advice'];
            advice_num.textContent=id;
            advice_txt.textContent=advice;
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
}



