  const display = document.getElementById('display');
    let currentInput = '';

    function appendNumber(num) {
      if (currentInput === '0' && num !== '.') {
        currentInput = num;
      } else {
        currentInput += num;
      }
      display.innerText = currentInput;
    }

    function appendOperator(op) {
      if (currentInput === '') return;
      const lastChar = currentInput.slice(-1);
      if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
      } else {
        currentInput += op;
      }
      display.innerText = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.innerText = '0';
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        display.innerText = result;
      } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
      }
    }
    function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
    }