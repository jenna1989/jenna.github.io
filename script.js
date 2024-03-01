"use strict";
// yêu cầu nhập email để hiển thị nội dung
document.getElementById("email-submit").addEventListener("click", function (a) {
  a.preventDefault();
  let emailValue = document.getElementById("email-request").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValue === "minhsu89@gmail.com") {
    alert("Your Email is just a space");
  } else if (!emailValue.match(regex)) {
    alert("Your Email is invalid");
  } else {
    alert("Your is email is valid");
    document.querySelector(".profile-content").classList.remove("hidden");
    document.getElementById("email-form").classList.add("hidden");
  }
});
// hiên thị nội dung công việc
let viewmore = document.querySelectorAll(".viewmore");

for (let i = 0; i < viewmore.length; i++) {
  viewmore[i].addEventListener("click", function () {
    if (
      document.querySelector(`.card-content${i}`).classList.contains("hidden")
    ) {
      document.querySelector(`.card-content${i}`).classList.remove("hidden");
      viewmore[i].textContent = "View less";
    } else {
      document.querySelector(`.card-content${i}`).classList.add("hidden");
      viewmore[i].textContent = "View more";
    }
  });
}
