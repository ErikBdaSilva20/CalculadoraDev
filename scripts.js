// Seleção dos elementos do DOM
const calculateBtn = document.getElementById("calculateBtn");
const operationSelect = document.getElementById("operationSelect");
const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const resultValue = document.getElementById("resultValue");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Limite máximo de cálculos no histórico
const maxHistoryItems = 5;

// Função de cálculo
calculateBtn.addEventListener("click", () => {
    const value1 = parseFloat(firstValue.value); // Converte o valor 1 para número
    const value2 = parseFloat(secondValue.value); // Converte o valor 2 para número
    const operation = operationSelect.value;

    // Verifica se os campos estão preenchidos
    if (isNaN(value1) || isNaN(value2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            if (value2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            result = value1 / value2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    // Exibe o resultado
    resultValue.textContent = result.toFixed(2); // Exibe o resultado com 2 casas decimais

    // Adiciona o cálculo ao histórico
    const listItem = document.createElement("li");
    listItem.textContent = `${value1} ${operation} ${value2} = ${result.toFixed(2)}`;
    historyList.appendChild(listItem);

    // Remove itens extras do histórico, se necessário
    while (historyList.children.length > maxHistoryItems) {
        historyList.removeChild(historyList.firstChild);
    }
});

// Função para limpar o histórico
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = ""; // Limpa todo o conteúdo do histórico
});
