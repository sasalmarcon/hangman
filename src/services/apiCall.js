

const apiCall = async() =>{

    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    return data[0].split('')

}

export default apiCall;