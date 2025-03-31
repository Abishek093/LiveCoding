// Example 1: Amolya Sharma
// The expected answer would be:
// A-4
// M-2
// O-1
// L-1
// Y-1
// S-1
// H-1
// R-1

function WordCount(str){
    let map = new Map()
    let res = []
    str = str.toUpperCase()
    for(let i in str){
        if(str[i]===' '){
            continue
        }
        if(!map.has(str[i])){
            map.set(str[i], 1)
        }else{
            map.set(str[i], map.get(str[i])+1)
        }
    }
    map.forEach((e, v)=>{
        res.push(`${e}-${v}`)
    })
    return res.join(' ')
}

const str = 'Amolya Sharma'
console.log(WordCount(str))