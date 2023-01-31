function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberString = caseNumberField.value
    const previousCaseNumber = parseInt(caseNumberString)
    let newCaseNUmber;
    if(isIncrease){
        newCaseNUmber=previousCaseNumber+1
    }
    else{
        newCaseNUmber=previousCaseNumber-1
    }

    caseNumberField.value = newCaseNUmber
    return newCaseNUmber;
}

          //update value in case-total
function updateCaseTotalPrice(newCaseNUmber){
  const caseTotalPrice = newCaseNUmber*59
  const caseTotalElement = document.getElementById('case-total')
  caseTotalElement.innerText = caseTotalPrice
}


            //increase button
document.getElementById('btn-case-plus').addEventListener('click', function(){
   const newCaseNUmber =  updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNUmber)
    calculteSubTotal()git init
})

        //decrease button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber)
    calculteSubTotal()
    
})


