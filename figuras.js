/* Cuadrado */
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado ;

/* Triangulo */
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura)/2;
 
/* Circunferencia */
const diametroCircunferencia = (radio) => radio * 2;
const pi = Math.PI;
const areaCircunferencia = (radio) => radio * pi ;
const perimetroCircunferencia = (radio) => 2*pi*radio;

