const productos=[
    {id:'1',name:'iphone 14',price:1400,img:'../aseets/iphone14.jpg'},
    {id:'2',name:'iphone 15',price:1800,img:'../aseets/iphone15.jpg'},
    {id:'3',name:'samsung s23 ',price:1000,img:'../aseets/s23.jpg'}
]
export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}
export const getProductByld = (productId) => {
    return new Promise((resolve) => {
setTimeout(()=>{
    resolve(productos.find(prod=>prod.id===productId))},500)
})}