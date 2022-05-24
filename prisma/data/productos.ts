const productos = [
    {
        prod_nombre: "Café Caramel con Chocolate",
        prod_precio: 59.9,
        prod_imagen: "cafe_01",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Frio con Chocolate Grande",
        prod_precio: 49.9,
        prod_imagen: "cafe_02",
        prod_categoria: 1
    },
    {
        prod_nombre: "Latte Frio con Chocolate Grande",
        prod_precio: 54.9,
        prod_imagen: "cafe_03",
        prod_categoria: 1
    },
    {
        prod_nombre: "Latte Frio con Chocolate Grande",
        prod_precio: 54.9,
        prod_imagen: "cafe_04",
        prod_categoria: 1
    },
    {
        prod_nombre: "Malteada Fria con Chocolate Grande",
        prod_precio: 54.9,
        prod_imagen: "cafe_05",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Mocha Caliente Chico",
        prod_precio: 39.9,
        prod_imagen: "cafe_06",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Mocha Caliente Grande con Chocolate",
        prod_precio: 59.9,
        prod_imagen: "cafe_07",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Caliente Capuchino Grande",
        prod_precio: 59.9,
        prod_imagen: "cafe_08",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Mocha Caliente Mediano",
        prod_precio: 49.9,
        prod_imagen: "cafe_09",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Mocha Frio con Caramelo Mediano",
        prod_precio: 49.9,
        prod_imagen: "cafe_10",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Mocha Frio con Chocolate Mediano",
        prod_precio: 49.9,
        prod_imagen: "cafe_11",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Espresso",
        prod_precio: 29.9,
        prod_imagen: "cafe_12",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Capuchino Grande con Caramelo",
        prod_precio: 59.9,
        prod_imagen: "cafe_13",
        prod_categoria: 1
    },
    {
        prod_nombre: "Café Caramelo Grande",
        prod_precio: 59.9,
        prod_imagen: "cafe_14",
        prod_categoria: 1
    },
    {
        prod_nombre: "Paquete de 3 donas de Chocolate",
        prod_precio: 39.9,
        prod_imagen: "donas_01",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 3 donas Glaseadas",
        prod_precio: 39.9,
        prod_imagen: "donas_02",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona de Fresa ",
        prod_precio: 19.9,
        prod_imagen: "donas_03",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona con Galleta de Chocolate ",
        prod_precio: 19.9,
        prod_imagen: "donas_04",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona glass con Chispas Sabor Fresa ",
        prod_precio: 19.9,
        prod_imagen: "donas_05",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona glass con Chocolate ",
        prod_precio: 19.9,
        prod_imagen: "donas_06",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona de Chocolate con MÁS Chocolate ",
        prod_precio: 19.9,
        prod_imagen: "donas_07",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 3 donas de Chocolate ",
        prod_precio: 39.9,
        prod_imagen: "donas_08",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
        prod_precio: 39.9,
        prod_imagen: "donas_09",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 6 Donas",
        prod_precio: 69.9,
        prod_imagen: "donas_10",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 3 Variadas",
        prod_precio: 39.9,
        prod_imagen: "donas_11",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona Natural con Chocolate",
        prod_precio: 19.9,
        prod_imagen: "donas_12",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete de 3 Donas de Chocolate con Chispas",
        prod_precio: 39.9,
        prod_imagen: "donas_13",
        prod_categoria: 4
    },
    {
        prod_nombre: "Dona Chocolate y Coco",
        prod_precio: 19.9,
        prod_imagen: "donas_14",
        prod_categoria: 4
    },
    {
        prod_nombre: "Paquete Galletas de Chocolate",
        prod_precio: 29.9,
        prod_imagen: "galletas_01",
        prod_categoria: 6
    },
    {
        prod_nombre: "Paquete Galletas de Chocolate y Avena",
        prod_precio: 39.9,
        prod_imagen: "galletas_02",
        prod_categoria: 6
    },
    {
        prod_nombre: "Paquete de Muffins de Vainilla",
        prod_precio: 39.9,
        prod_imagen: "galletas_03",
        prod_categoria: 6
    },
    {
        prod_nombre: "Paquete de 4 Galletas de Avena",
        prod_precio: 24.9,
        prod_imagen: "galletas_04",
        prod_categoria: 6
    },
    {
        prod_nombre: "Galletas de Mantequilla Variadas",
        prod_precio: 39.9,
        prod_imagen: "galletas_05",
        prod_categoria: 6
    },
    {
        prod_nombre: "Galletas de sabores frutales",
        prod_precio: 39.9,
        prod_imagen: "galletas_06",
        prod_categoria: 6
    },
    {
        prod_nombre: "Hamburguesa Sencilla",
        prod_precio: 59.9,
        prod_imagen: "hamburguesas_01",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hamburguesa de Pollo",
        prod_precio: 59.9,
        prod_imagen: "hamburguesas_02",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hamburguesa de Pollo y Chili",
        prod_precio: 59.9,
        prod_imagen: "hamburguesas_03",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hamburguesa Queso y  Pepinos",
        prod_precio: 59.9,
        prod_imagen: "hamburguesas_04",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hamburguesa Cuarto de Libra",
        prod_precio: 59.9,
        prod_imagen: "hamburguesas_05",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hamburguesa Doble Queso",
        prod_precio: 69.9,
        prod_imagen: "hamburguesas_06",
        prod_categoria: 2
    },
    {
        prod_nombre: "Hot Dog Especial",
        prod_precio: 49.9,
        prod_imagen: "hamburguesas_07",
        prod_categoria: 2
    },
    {
        prod_nombre: "Paquete 2 Hot Dogs",
        prod_precio: 69.9,
        prod_imagen: "hamburguesas_08",
        prod_categoria: 2
    },
    {
        prod_nombre: "4 Rebanadas de Pay de Queso",
        prod_precio: 69.9,
        prod_imagen: "pastel_01",
        prod_categoria: 5
    },
    {
        prod_nombre: "Waffle Especial",
        prod_precio: 49.9,
        prod_imagen: "pastel_02",
        prod_categoria: 5
    },
    {
        prod_nombre: "Croissants De la casa",
        prod_precio: 39.9,
        prod_imagen: "pastel_03",
        prod_categoria: 5
    },
    {
        prod_nombre: "Pay de Queso",
        prod_precio: 19.9,
        prod_imagen: "pastel_04",
        prod_categoria: 5
    },
    {
        prod_nombre: "Pastel de Chocolate",
        prod_precio: 29.9,
        prod_imagen: "pastel_05",
        prod_categoria: 5
    },
    {
        prod_nombre: "Rebanada Pastel de Chocolate",
        prod_precio: 29.9,
        prod_imagen: "pastel_06",
        prod_categoria: 5
    },
    {
        prod_nombre: "Pizza Spicy con Doble Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_01",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Jamón y Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_02",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Doble Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_03",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Especial de la Casa",
        prod_precio: 69.9,
        prod_imagen: "pizzas_04",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Chorizo",
        prod_precio: 69.9,
        prod_imagen: "pizzas_05",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Hawaiana",
        prod_precio: 69.9,
        prod_imagen: "pizzas_06",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Tocino",
        prod_precio: 69.9,
        prod_imagen: "pizzas_07",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Vegetales y Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_08",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Pepperoni y Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_09",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Aceitunas y Queso",
        prod_precio: 69.9,
        prod_imagen: "pizzas_10",
        prod_categoria: 3
    },
    {
        prod_nombre: "Pizza Queso, Jamón y Champiñones",
        prod_precio: 69.9,
        prod_imagen: "pizzas_11",
        prod_categoria: 3
    }
]

export {
    productos
}