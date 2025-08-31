const message = `em hy hehwhehwe\nmff yh alay, tp ini serius\n\nkm kl ad ap ap blg aja yh sm ak\n\nmksh yh mw nyoba ngertiin ak\n\nttp hidup yh.....`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
