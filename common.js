

    //   get phone and case element value
function getElementValue(elementId){
 const elementField = document.getElementById(elementId)
 const elementValueString = elementField.innerText
 const elementValue =parseInt(elementValueString)
 return elementValue;
}

        //   set value in element
function setValue(elementId,value){
  const subTotalElement = document.getElementById(elementId)
  subTotalElement.innerText = value
}

          // calculate total amount
   function calculteTotal(){
    const phoneTotal = getElementValue('phone-total')
    const caseTotal = getElementValue('case-total')
    const subTotal = phoneTotal+caseTotal
    setValue('sub-total',subTotal)
               //tax calculate
    const taxAmountString = (subTotal*0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setValue('tax-amount',taxAmount)
           //total calculate
    const totalAmount = subTotal+taxAmount
    
    setValue('final-total', totalAmount)
}


