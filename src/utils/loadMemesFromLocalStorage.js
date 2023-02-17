export default function loadMemesFromLocalStorage() {
  if (localStorage.getItem("savedMemes"))
    return JSON.parse(localStorage.getItem("savedMemes"));
}
