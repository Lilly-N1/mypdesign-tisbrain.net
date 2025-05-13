document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const tabId = tab.getAttribute("data-tab");

      // Remove 'active' from all tabs and contents
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const target = document.getElementById(tabId);
      if (target) {
        target.classList.add("active");
      }
    });
     });
});
