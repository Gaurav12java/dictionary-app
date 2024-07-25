const searchBt=document.querySelector('#searchBt')
const submitBtn=document.querySelector('#submitBtn')
const wordInfo=document.querySelector('.wordInfo')
const wordData=document.querySelector('.wordData')


const url=`https://api.dictionaryapi.dev/api/v2/entries/en/`


 const searchFun=async (word)=>{

    let response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    let datas=await response.json()

    console.log(datas)


wordInfo.innerHTML=`<h2>Word :- ${datas[0].word} </h2>
`
wordData.innerHTML=`<h4> Parts of Speech :- ${datas[0].meanings[0].partOfSpeech} </h4> <br>
<h4> Definition:- ${datas[0].meanings[0].definitions[0].definition} </h4> <br>
<h4>Synonmous:-  ${datas[0].meanings[0].synonyms[0,1,2,3]} </h4>`


}

submitBtn.addEventListener('click',()=>{

    const word=searchBt.value
    searchFun(word)
})