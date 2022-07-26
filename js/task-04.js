let counterValue = 0;
const refs = {
  value: document.getElementById("value"),
  increase: document.querySelector('button[data-action="increment"]'),
  decrease: document.querySelector('button[data-action="decrement"]'),
};
refs.increase.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
refs.decrease.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});
