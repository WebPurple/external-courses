window.onload = () => {
  function inpDebounced() {
    return function fIn() {
      setTimeout(() => {
        document.getElementById('Debounced').innerHTML = document.getElementById('inputDebounced').value;
      }, 1000);
    };
  }

  document.addEventListener('input', inpDebounced());
  document.getElementById('inputRegular').addEventListener('input', () => {
    document.getElementById('Regular').innerHTML = document.getElementById('inputRegular').value;
  });
};
