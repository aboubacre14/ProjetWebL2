function calculate() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    const resultTable = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    resultTable.innerHTML = '';

    for (let i = 1; i <= calculatedPayments; i++) {
        const x = Math.pow(1 + calculatedInterest, i - 1);
        const capitalAmorti = monthlyPayment * (x - 1) / calculatedInterest;
        const interests = monthlyPayment - capitalAmorti;
        const capitalRestantDu = principal - capitalAmorti * (x);
        
        const newRow = resultTable.insertRow();
        const cellPeriod = newRow.insertCell(0);
        const cellCapitalAmorti = newRow.insertCell(1);
        const cellInterests = newRow.insertCell(2);
        const cellCapitalRestantDu = newRow.insertCell(3);
        const cellMonthlyPayment = newRow.insertCell(4);

        cellPeriod.innerHTML = i;
        cellCapitalAmorti.innerHTML = capitalAmorti.toFixed(2);
        cellInterests.innerHTML = interests.toFixed(2);
        cellCapitalRestantDu.innerHTML = capitalRestantDu.toFixed(2);
        cellMonthlyPayment.innerHTML = monthlyPayment.toFixed(2);
    }
}
