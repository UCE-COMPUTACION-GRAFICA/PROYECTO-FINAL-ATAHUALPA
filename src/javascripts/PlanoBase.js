class PlanoBase {
  PlanoPrincipal() {
    var nuevo = new Plano();
    t.crear_texturas("texturas/adoquin_calle.jpg", 15, 15);
    nuevo.crear_plano(-500, 0, 290, 5000, 2000, Math.PI / 2, 0, textura);
  }
}
