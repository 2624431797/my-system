//手机号
function handleMobileNumber(num){
    let mobileReg = /^1[3456789]\d{9}$/
    //return mobileReg.test(num)
    if(!mobileReg.test(num)) {
        //callback(new Error('格式有误'))
        console.log(0)
    } 
    else if(mobileReg.test(num)){
        console.log(1)
    }
}

export {
    handleMobileNumber
}