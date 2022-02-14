function incrasToDecres(id,priceID,price,ranges){
    const nubers=document.getElementById(id);
    let previusNumber=parseInt(nubers.value)
    if(ranges==true){
        previusNumber=previusNumber+1
    }
    else if(previusNumber>0){
        previusNumber=previusNumber-1
    }
    nubers.value=previusNumber;
    const casingDefoltPrice=document.getElementById(priceID);
    casingDefoltPrice.innerText=previusNumber*price;
    calculatorSubtotal()
}
// 
function getInputValue(productInput){
    const input=document.getElementById(productInput);
    const inputValu=parseInt(input.value);
    return inputValu;
}
function calculatorSubtotal(){
    const TotalPhonePrice=getInputValue('phoneInput')*1219;
    const TotalCasingPrice=getInputValue('clickNumber')*59;
    const totalSub=TotalPhonePrice+TotalCasingPrice;
    const taxs=totalSub/10;
    const total=totalSub+taxs;
    document.getElementById('subTotal').innerText=totalSub;
    document.getElementById('taxTotal').innerText=taxs;
    document.getElementById('totals').innerText=total;
}
// phone handelart
document.getElementById('phoneBtnPlus').addEventListener('click',function(){
    incrasToDecres('phoneInput','phonePrice',1219,true)
})
document.getElementById('phoneBtnMinus').addEventListener('click',function(){
    incrasToDecres('phoneInput','phonePrice',1219,false)
})


// casing hendelar
document.getElementById('plusBtn').addEventListener('click',function(){
     incrasToDecres('clickNumber','casingPrice',59,true)
})
document.getElementById('minusBtn').addEventListener('click',function(){
    incrasToDecres('clickNumber','casingPrice',59,false)
})