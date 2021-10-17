/* Cuadrado */
const perimetroCuadrado = (lado) => lado * 4
const areaCuadrado = (lado) => lado * lado ;

/* Triangulo */
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (lado1,lado2,base) => {
    const s = (lado1 + lado2 + base) / 2
    return Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base))
    };

/* Circunferencia */
const diametroCircunferencia = (radio) => radio * 2;
const pi = Math.PI;
const areaCircunferencia = (radio) => radio * pi ;
const perimetroCircunferencia = (radio) => 2*pi*radio;


const cuadrado = () => {
    const inputSquare = document.getElementById("LadoSquare")
    const lado = inputSquare.value;
    const squareP = perimetroCuadrado(lado);
    const squareA = areaCuadrado(lado);
   
    alert(`El perímetro del cuadrado es: ${squareP}
El área del cuadrado es: ${squareA}`)

}

const triangulo = () => {
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const inputBase = document.getElementById("base");


    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = inputBase.value;
 
    
    const triangleP = perimetroTriangulo(lado1, lado2, base);
    const traingleA = areaTriangulo(lado1, lado2, base);

    console.log(traingleA)
    alert(`El perímetro del triangulo es: ${triangleP}
El área del triangulo es: ${traingleA}`);
}

const circunferencia = () => {
    const inputCircle = document.getElementById("radio");
    const radio = inputCircle.value;

    const circleD = diametroCircunferencia(radio);
    const circleA = areaCircunferencia(radio);
    const circleP = perimetroCircunferencia(radio);

    alert(`El perímetro de la circunferencia es: ${circleP}
    El área del circunferencia es: ${circleA}
    EL diámetro de la circunferencia es: ${circleD}`)
}

