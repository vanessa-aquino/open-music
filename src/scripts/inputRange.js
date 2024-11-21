export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#price-range");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const max = event.target.max;
      const percentage = (currentInputValue / max) * 100;
      inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${percentage}%, var(--gray-5) ${percentage}%)`;
    });
}

