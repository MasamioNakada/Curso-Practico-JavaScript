const  altura = (lado1,lado2,base) => {
    if (lado1 === lado2 && lado1 != base)  
    {
        const h = Math.sqrt(lado1**2 + (base**2)/4)
        console.log(`La altura es ${h} `)
    }  else {
        console.log("No es un triángulo isoceles");
    }

};

altura(1,1,3);
altura(1,2,3);
