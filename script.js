function next() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function verify() {
  const code = document.getElementById("code").value;
  document.getElementById("msg").innerText =
    code === "123456" ? "Authentication Successful" : "Invalid Code";
}
