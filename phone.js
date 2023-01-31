function updatePhoneCaseValue(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value
    const prePhoneNumberValue = parseInt(phoneNumberString)
    let newPhoneNumber;
    if(isIncrease){
      newPhoneNumber = prePhoneNumberValue+1
    }
    else{
        newPhoneNumber = prePhoneNumberValue-1
    }
    phoneNumberField.value = newPhoneNumber
    return newPhoneNumber;
}
        

       //set value in phone-total
function phoneTotal(newPhoneNumber){
    const phoneTotalNumber = newPhoneNumber*1219
    const phoneTotalField = document.getElementById('phone-total')
    phoneTotalField.innerText = phoneTotalNumber
}
        
        //increase button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
 const newPhoneNumber = updatePhoneCaseValue(true)
 phoneTotal(newPhoneNumber )
 calculteSubTotal()

})


           //decrease button
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneCaseValue(false)
    phoneTotal(newPhoneNumber)

    calculteSubTotal()
})