import CardWidget from './CartWidget'
const NavBar = ()=>{
    return(
    <>
    <h1>Ecommerce</h1>
    <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
    </div>
    <CardWidget/>
    </>
    )
}
export default NavBar