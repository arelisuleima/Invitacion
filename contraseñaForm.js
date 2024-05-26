
              function mostrarContrasena() {
                var tipo = document.getElementById("exampleInputPassword1");
                if (tipo.type == "password") {
                  tipo.type = "text";
                } else {
                  tipo.type = "password";
                }
              }
              