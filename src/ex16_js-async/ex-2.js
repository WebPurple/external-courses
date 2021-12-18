window.onload = () => {
  function inpDebounced() {
    let mark = false;

    return function fIn() {
      if (mark) return;

      mark = true;

      setTimeout(() => {
        mark = false;

        document.getElementById('Debounced').innerHTML = document.getElementById('inputDebounced').value;
      }, 1000);
    };
  }

  document.getElementById('inputDebounced');
  document.addEventListener('input', inpDebounced());
  document.getElementById('inputRegular').addEventListener('input', () => {
    document.getElementById('Regular').innerHTML = document.getElementById('inputRegular').value;
  });
};
