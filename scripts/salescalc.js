addEventListener("load", main)

// Main function 
function main() {
    
    //adding listener for click, runs the class calculateSales
    btCalcSales.addEventListener("click", calculateSales)
}

//calculateSales class
function calculateSales() {
    //get Price as a Float
    Price=parseFloat(txPrice.value)
    //get TaxRate as a Float and divide by 100
    TaxRate=parseFloat(txTaxRate.value)/100
    //multiply Price by TaxRate and put value in Tax
    Tax=Price*TaxRate
    //add Price and Tax and put into Total
    Total=Price+Tax
    //return Total as 2 decimals
    spTotal.innerHTML=Total.toFixed(2)
}