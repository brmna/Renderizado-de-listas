import Image from "next/image";
import "./page.css";

export default function Listas() {
  // 1. LISTA DE NUMEROS.
  const nums = [1,2,3,4,5,6,7,8,9,10];

  // 2. LISTA DE NOMBRES.
  const names = [
    "Juan",
    "Maria",
    "Andres",
    "Ana",
    "Laura",
    "Ximena",
    "Valentina",
    "Sofia"
  ];

  // 3. LISTA DE PERSONAS.
  const persons = [
    {
      nombre : "Juan",
      apellido : "Pérez", 
      correo : "JuanP@gmail.com", 
      teléfono : "3005458962", 
      edad : "22"
    },
    {
      nombre : "Maria",
      apellido : "Lopez",
      correo : "MariaL@gmail.com",
      teléfono : "3223565841",
      edad : "25"
    },
    {
      nombre : "Andres",
      apellido : "Gómez",
      correo : "AndresG@gmail.com",
      teléfono : "3222145851",
      edad : "18"
    },
    {
      nombre : "Laura",
      apellido : "Martínez",
      correo : "LauraM@gmail.com",
      teléfono : "3222122522",
      edad : "30"
    },
    {
      nombre : "Sofia",
      apellido : "Ruiz",
      correo : "SofiaR@gmail.com",
      teléfono : "3222122490",
      edad : "19"
    }
  ];

  // 4. LISTA DE PRODUCTOS.
  const products = [
    {
      nombre : "Laptop Lenovo IdeaPad 3",
      descripción : "Portátil con procesador Intel Core i5, 8GB RAM, 512GB SSD.",
      categoría : "Tecnología",
      cantidad : 10,
      precio : 2500000,
      imagen : "https://exitocol.vtexassets.com/arquivos/ids/9427290/portatil-lenovo-ideapad-3-14-core-i5-8gb-512gb-ssd-w10.jpg?v=637653492664170000"
    },    
    {
      nombre : "Camiseta Nike Sportswear",
      descripción : "Camiseta deportiva para hombre, 100% algodón.",
      categoría : "Ropa",
      cantidad : 25,
      precio : 85000,
      imagen : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/nikesportswear-camiseta.jpg"
    },    
    {
      nombre : "Audífonos JBL Tune 510BT",
      descripción : "Audífonos inalámbricos Bluetooth, hasta 40 horas de batería.",
      categoría : "Tecnología",
      cantidad : 15,
      precio : 180000,
      imagen : "https://agaval.vtexassets.com/arquivos/ids/1864186/image-b1df0fd8a58b41a58493738b96eac44d.jpg?v=638623480257900000"
    },    
    {
      nombre : "Silla Ergonómica Oficina",
      descripción : "Silla con soporte lumbar, altura ajustable y ruedas.",
      categoría : "Hogar",
      cantidad : 8,
      precio : 320000,
      imagen : "https://ergonomus.co/cdn/shop/collections/Principal-5.jpg?v=1741811754"
    },    
    {
      nombre : "Cafetera Oster 12 Tazas",
      descripción : "Cafetera eléctrica con filtro permanente y función de pausa.",
      categoría : "Electrodomésticos",
      cantidad : 12,
      precio : 145000,
      imagen : "https://exitocol.vtexassets.com/arquivos/ids/19744457/Cafetera-Oster-Programable-Bvs-848609_a.jpg?v=638308742914230000"
    },
  ];


  return (
    <div>
      <h1>Renderización de listas</h1>
      <h2>1. Lista de números</h2>
      <div className="div-nums">
        <ul className="ul-nums">
          {nums.map((nums, i) => (
            <li key={i}> {nums} </li>
          ))}
        </ul>
      </div>

      <h2>2. Lista de nombres</h2>
      <div className="div-names">
        <ul className="ul-names">
          {names.map((names, i) => (
            <li key={i}> {names} </li>
          ))}
        </ul>
      </div>

      <h2>3. Lista de personas</h2>
      {persons.map(( p, i ) => (
        <div className="div-persons" key={i}>
          <p><strong>Nombre:</strong> {p.nombre}</p>
          <p><strong>Apellido:</strong> {p.apellido}</p>
          <p><strong>Correo:</strong> {p.correo}</p>
          <p><strong>Teléfono:</strong> {p.teléfono}</p>
          <p><strong>Edad:</strong> {p.edad}</p>
        </div>
        ))}

      <h2>4. Lista de productos</h2>
      <div className="div-products">
        {products.map((pd, i) => (
          <div className="card" key={i}>
            <img src={pd.imagen} alt={pd.nombre} />
            <p>{pd.nombre}</p>
            <p>{pd.descripción}</p>
            <p id="category">Categoría: {pd.categoría}</p>
            <p>Cantidad: {pd.cantidad}</p>
            <p id="price">Precio: ${pd.precio}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
  </div>
)}