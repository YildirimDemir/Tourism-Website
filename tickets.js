function showSelectedText(selectId) {
    let selectElement = document.getElementById("country" + selectId);
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedText = selectedOption.value;
    let resultElement = document.getElementById("prc" + selectId);
    resultElement.textContent = selectedText;
  }