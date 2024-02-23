let popup = document.getElementById("popup");
        let form = document.getElementById("fid");

      function submitForm(event) {
        event.preventDefault();
      }

      function openpopup() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
          form.addEventListener("submit", submitForm);
          document.getElementById("h3name").innerHTML = name;
          document.getElementById("body").style.background="rgba(0,0,0,1)";
          document.getElementById("body").style.color="#151515";
          document.getElementById("contact").innerHTML="";
          document.getElementById("contact").style.background="#151515";
          popup.classList.add("openpopup");
        }
      }

      function closepopup() {
        popup.classList.remove("openpopup");
        form.reset();
        window.location.reload();
      }