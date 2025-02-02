document.addEventListener("DOMContentLoaded", function () {
    const componentInput = document.getElementById("componentInput");
    const profitInput = document.getElementById("profitInput");
    const profitRange = document.getElementById("profitRange");

    const modalDisplay = document.getElementById("modal");
    const profitDisplay = document.getElementById("profit");
    const totalDisplay = document.getElementById("total");

    const componentPrice = 0.55;

    function calculate() {
        try {
            let rawInput = componentInput.value.trim();
            const sanitizedInput = rawInput.replace(/[^0-9+\-*/().]/g, "");
            const componentCount = eval(sanitizedInput);
            if (isNaN(componentCount) || componentCount < 0) {
                throw new Error("Invalid input");
            }
            const profitPercentage = parseFloat(profitInput.value) || 0;
            const modal = componentCount * componentPrice;
            const profit = modal * (profitPercentage / 100);
            const total = modal + profit;
            modalDisplay.textContent = `$${modal.toFixed(2)}`;
            profitDisplay.textContent = `$${profit.toFixed(2)}`;
            totalDisplay.textContent = `$${total.toFixed(2)}`;
        } catch {
            modalDisplay.textContent = "$0.00";
            profitDisplay.textContent = "$0.00";
            totalDisplay.textContent = "$0.00";
        }
    }

    componentInput.addEventListener("input", () => {
        componentInput.value = componentInput.value.replace(/[^0-9+\-*/().]/g, "");
        calculate();
    });
    profitInput.addEventListener("input", calculate);
    profitRange.addEventListener("input", () => {
        profitInput.value = profitRange.value;
        calculate();
    });
    calculate();
});