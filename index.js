const API_key =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const box = document.querySelector(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  const input = document.querySelector("input").value.trim();

  if (input === "") {
    alert("Type something");
    return;
  }

  const prevQrcode = document.querySelector("img");

  const data = await fetch(`${API_key}${input}`);
  const newQrcode = document.createElement("img");
  newQrcode.src = await data.url;
  newQrcode.alt = "QR Code";

  if (prevQrcode) {
    box.replaceChild(newQrcode, prevQrcode);
  } else {
    const inputElement = document.querySelector("input");

    //Insert the Qrcode after the input element
    box.insertBefore(newQrcode, inputElement.nextSibling);
  }
});
