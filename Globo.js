const app = Vue.createApp({
    data() {
      return {
        textoSeguir: "Seguir",
        contador: 200,
        comentarios: [],
        comentarioNuevo: '',
        botonMeGusta: "Me Gusta", 
        usuario:'',
        errorMensaje: ''
      };
    },
    methods: {
      seguir() {
        if (this.textoSeguir === "Seguir") {
          this.textoSeguir = "Dejar Seguir";
        } else {
          this.textoSeguir = "Seguir";
        }
      },
      sumarLike() {
        if (this.contador === 201) {
          this.contador--;
        } else {
          this.contador++;
        }
        if (this.botonMeGusta === "Me Gusta") {
          this.botonMeGusta = "No Me Gusta";
        } else {
          this.botonMeGusta = "Me Gusta";
        }
      },
      comentar() {
        if (this.comentarioNuevo.trim() === '') {
          this.errorMensaje = '¡Por favor, revise que haya ingresado un comentario!';          
        }else if(this.usuario.trim() === ''){
          this.errorMensaje = '¡Por favor, revise que haya ingresado su usuario!';          
        }
        else{
          this.comentarios.push({ user: this.usuario, text: this.comentarioNuevo });
          this.usuario = '';
          this.comentarioNuevo = '';
          this.errorMensaje = '';
        }
      },
      borrarComentarios(index) {
        this.comentarios.splice(index, 1);
      }
    }
  });
  app.mount("#app");