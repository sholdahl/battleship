const test = () => {
    let value = null;
    let array = [1,2,3];

    let funct = () => {
        console.log(obj.value)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(element === 3) {
                obj.value = " Hi"
                console.log("Hit 3" + this.value);
                

            }
            
        }
    }
    let obj = {value, array, funct};
    return obj
}

let realTest = test();

realTest.funct();

console.log(realTest.value)