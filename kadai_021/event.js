const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener("click", function() {
  setTimeout(()=> {
    text.innerHTML = "ボタンをクリックしました";
  },2000);
});