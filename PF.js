document.addEventListener("DOMContentLoaded", function () {
  // 選取所有具有 class="show" 的按鈕
  const showButtons = document.getElementsByClassName("show");

  // 對每個按鈕添加點擊事件監聽器
  for (let button of showButtons) {
    button.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // 顯示
      } else {
        menu.style.display = "none"; // 隱藏
      }
    });
  }
});
