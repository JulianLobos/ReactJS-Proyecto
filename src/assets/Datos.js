export const Datos = [
    {
        id: 1,
        category: 'street',
        description: 'Fotografía tomada en el skate park de Jesus Maria, Córdoba. En la foto: Nacho Rodriguez. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165584570_51b280a2ef_b.jpg",
        name: 'Flying bike',
        price: "$2500",
        stock: 8,
        size: '20x20'  
    },
    {
        id: 2,
        category: 'animals',
        description: 'Gato negro sentado en el capot de un auto. El Encón, Salta. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52164071717_9dc9d091d8_b.jpg",
        name: 'Black cat',
        price: "$2500",
        stock: 7,
        size: '20x20'       
    },
    {
        id: 3,
        category: 'animals',
        description: 'Gato negro acostado dentro de una carretilla. El Encón, Salta. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165334284_c3bba283f2_b.jpg",
        name: 'Sleepy cat',
        price: "$2500",
        stock: 7, 
        size: '20x20',       
    },
    {
        id: 4,
        category: 'animals',
        description: 'Una lechuza posando en un poste mirando a la cámara. El Encón, Salta. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165334259_b4d1a24a41_b.jpg",
        name: 'Lechuza',
        price: "$2500",
        stock: 7,        
        size: '20x20'  
    },
    {
        id: 5,
        category: 'street',
        description: 'Una señora cortando cebollas en la vereda de la calle Urquiza, Salta Capital. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165102013_721dca150a_h.jpg",
        name: 'Señora verdulera',
        price: "$2800",
        stock: 7,        
        size: '25x20'  
    },
    {
        id: 6,
        category: 'street',
        description: 'Turista paseando por la plaza 9 de Julio, Salta Capital. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165097826_85ddb4c9ba_h.jpg",
        name: 'Turista en Salta',
        price: "$2800",
        stock: 4,        
        size: '25x20'
    },
    {
        id: 7,
        category: 'street',
        description: 'Dos viejos amigos en la plaza 9 de Julio, Salta Capital. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165101938_7e5c9e91c1_h.jpg",
        name: 'Dos amigos',
        price: "$2800",
        stock: 6,        
        size: '25x20'
    },
    {
        id: 8,
        category: 'animals',
        description: 'Gatito cachorro conociendo su sombra. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165101913_8261ff6f6f_b.jpg",
        name: 'Pelitos',
        price: "$2500",
        stock: 7,        
        size: '20x20'  
    },
    {
        id: 9,
        category: 'street',
        description: 'Músico callejero tocando al costado del cabildo, Salta Capital. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165097721_33d1929db1_b.jpg",
        name: 'Músico Callejero',
        price: "$2500",
        stock: 5,        
        size: '20x20'  
    },
    {
        id: 10,
        category: 'street',
        description: 'Retrato callejero de un señor fumando un cigarrillo, Córdoba Capital. Se entrega la impresión en el tamaño elegido, en papel glossy, encuadrada en madera y protegida con vidrio.',
        img: "https://live.staticflickr.com/65535/52165334004_378266eaa6_b.jpg",
        name: 'Pucho',
        price: "$2500",
        stock: 5,        
        size: '20x20'  
    },

];

export const getProductByCategory = (category) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(Datos.length>0){
                resolve(Datos.filter(item => item.category === category))}
            else{
                reject("No se encontraron datos.")
            } 
        }, 500);
    })
}

export const getProductById = (id) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(Datos.length>0){
                resolve(Datos.filter(item => item.id === parseInt(id)))}
            else{
                reject("No se encontraron datos.")
            } 
        }, 500);
    })
}