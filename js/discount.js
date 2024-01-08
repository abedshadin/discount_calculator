
document.getElementById('voucher').addEventListener('keyup', function(event){
    const inputedData = event.target.value;
    const lowerInput = inputedData.toLowerCase();
    console.log(lowerInput)
    if (lowerInput === 'disc30') {
        document.getElementById('discount').removeAttribute('disabled');
    }
    else{
        document.getElementById('discount').setAttribute('disabled',true);
    }
})
document.getElementById('discount').addEventListener('click', function(){
    const element = document.getElementById('price');
    const elementText = element.innerText;
    const elementPrice = parseFloat(elementText);
    const discount = elementPrice * 0.3;
    element.innerText = discount;
    document.getElementById('discount').setAttribute('disabled',true);
    
})