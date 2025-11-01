console.log("Calculator app loaded");

// centralized handlers — no inline JS
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".calc-form");

  forms.forEach((form) => {
    const op = form.dataset.op; // "add" | "sub" | "mul" | "div"
    const resultsEl = form.parentElement.querySelector(".results");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('input[type="number"]');
      const a = inputs[0]?.value ?? "";
      const b = inputs[1]?.value ?? "";
      const n1 = parseFloat(a);
      const n2 = parseFloat(b);

      // validation
      if (!isFinite(n1) || !isFinite(n2)) {
        resultsEl.textContent = "Enter valid numbers";
        resultsEl.style.color = "#dc2626";
        return;
      }

      let out;
      switch (op) {
        case "add":
          out = n1 + n2;
          break;
        case "sub":
          out = n1 - n2;
          break;
        case "mul":
          out = n1 * n2;
          break;
        case "div":
          if (n2 === 0) {
            resultsEl.textContent = "Cannot divide by zero";
            resultsEl.style.color = "#dc2626";
            return;
          }
          out = n1 / n2;
          break;
        default:
          resultsEl.textContent = "Unknown operation";
          resultsEl.style.color = "#dc2626";
          return;
      }

      resultsEl.textContent = out;
      resultsEl.style.color = "#0f172a";
    });
  });

  // wire clear buttons
  document.querySelectorAll("button.ghost").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.closest(".container");
      if (!section) return;
      section
        .querySelectorAll('input[type="number"]')
        .forEach((i) => (i.value = ""));
      const r = section.querySelector(".results");
      if (r) r.textContent = "";
    });
  });
});
