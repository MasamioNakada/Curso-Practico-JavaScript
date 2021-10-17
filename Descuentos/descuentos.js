const descuento = (precio, descuent) => {
    return precio-precio*descuent/100
}



const onclickDiscount = () => {
    const price = document.getElementById("inputPrice")
    const discount = document.getElementById("inputDiscount")

    const precio = price.value;
    const descuent = discount.value;

    const rpta = descuento(precio, descuent);
    
    const discountPrice = document.getElementById("discountPrice")
    discountPrice.innerHTML = `${rpta}`
}