import convertBase from "./func";

function baseCheck(numm, base ) {
    const num = numm.toString();
    for(let i = 0; i< num.length; i++){
      // console.log(convertBase(num[i], 16, 10), base)
        if (convertBase(num[i], 16, 10) >= base){
            return false;
        }
    }
    return true;
}
export default baseCheck;