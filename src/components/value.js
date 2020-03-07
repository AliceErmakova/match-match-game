function mixVal(array){
    const _array = array.slice(0)
    for(let i=0; i < array.length-1; i++){
        let randomIndex = Math.floor(Math.random() * (i+1))
        let temp = array[i]
        _array[i]= _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}
export default function initializeVal(){
    let id = 0
    const numCard= localStorage.getItem('numCard')
    
        let arr10 = ['red', 'grey', 'blue', 'yellow', 'orange', 'lightBlue', 'darkGrey', 'brown',  'darkRed', 'lightGreen']
        let arr5= ['red', 'grey', 'blue', 'yellow', 'orange']
        let arr15= ['red', 'grey', 'blue', 'yellow', 'orange', 'lightBlue', 'darkGrey', 'brown',  'darkRed', 'lightGreen', 'lightYellow', 'green', 'black', 'white', 'violet']
        if(numCard==='arr5'){
            const cards = arr5.reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            acc.push({
                id: id++,
                type
            })
            return acc
            }, [])
        return mixVal(cards)    
        }
        else if(numCard==='arr10'){
            const cards = arr10.reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            acc.push({
                id: id++,
                type
            })
            return acc
            }, [])
        return mixVal(cards)    
        }
        else if(numCard==='arr15'){
            const cards = arr15.reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            acc.push({
                id: id++,
                type
            })
            return acc
            }, [])
        return mixVal(cards)    
    }
}
   
    
