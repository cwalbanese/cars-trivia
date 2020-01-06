const reset = document.querySelector('.reset');

reset.addEventListener('click', reloadPage);

function reloadPage() {
  location.reload();
}
