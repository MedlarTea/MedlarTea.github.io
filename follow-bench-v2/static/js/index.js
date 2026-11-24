"use strict";

const copyButton = document.getElementById("copy-bibtex");
const copyStatus = document.getElementById("copy-status");
copyButton.addEventListener("click", async () => {
  const code = document.getElementById("bibtex");
  try {
    await navigator.clipboard.writeText(code.textContent);
    copyButton.textContent = "Copied!";
    copyStatus.textContent = "Citation copied to clipboard.";
    setTimeout(() => {
      copyButton.textContent = "Copy citation";
    }, 2500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
  }
});

const dialog = document.getElementById("figure-dialog");
let originalOverflow = "";
document.querySelectorAll("[data-zoom]").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.querySelector("img");
    const enlarged = document.getElementById("dialog-image");
    enlarged.src = source.src;
    enlarged.alt = source.alt;
    document.getElementById("dialog-caption").textContent = button
      .closest("figure")
      .querySelector("figcaption").textContent;
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  });
});
dialog
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.style.overflow = originalOverflow;
});
