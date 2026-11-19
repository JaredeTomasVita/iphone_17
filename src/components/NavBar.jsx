function Navbar(){
    return(
        <nav className=" fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 " >
            <div className=" max-w-7xl mx-auto flex items-center justify-center py-4 gap-8" >
                <a href="#desgn" className=" hover:text-gray-300" >Design</a>
                <a href="#camera" className=" hover:text-gray-300" >Camera</a>
                <a href="#performace" className=" hover:text-gray-300" >Performace</a>
                <a href="#cores" className=" hover:text-gray-300" >Cores</a>
                <button className=" py-2 px-6 rounded-full bg-blue-400 hover:bg-blue-900 " >Comprar</button>
            </div>
        </nav>
    )
}

export default Navbar