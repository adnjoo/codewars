var removeSubfolders = f => {
    let arr = []
    f = f.sort()
    // console.log(f, f.length)
    for(let i = f.length - 1; i > -1; i--){
        let flag = true
        for(let j = i - 1; j > -1;j--){
            if(f[j].length < f[i].length && f[j]==f[i].slice(0,f[j].length) && f[i].replace(f[j],'').includes('/')){ //subfolder
                flag = false
                break
            }
        }
        if(flag) arr.push(f[i])
    }
    // console.log('sorted',arr.sort(), arr.length)
    return arr.sort()
};