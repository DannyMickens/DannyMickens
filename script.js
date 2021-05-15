const btn = document.getElementById("theme-toggler")

const theme = localStorage.getItem("theme");

if (theme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.onclick = function() {
  document.body.classList.toggle("dark-theme");

  let theme = "light";

  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
}
