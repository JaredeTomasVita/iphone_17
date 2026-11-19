function Desig (){

    const cardimg = [
        {value: 'Titanio Primium', label:'Display super Ritina XDR', image:'img/ios-features.jpg'},
        {value: 'IOS 19', label:'Display super Ritina XDR', image:'img/titanium-design.jpg'}
    ];

    return(

        <section className=" py-20 px-6">
            <div className=" max-w-5xl mx-auto text-center mb-16 py-8 ">
                <h1 className=" text-6xl md:text-5xl font-bold mb-4" >Design revolucionario</h1>
                <p className=" text-lg md:text-xl text-gray-300 md-10 max-w-3xl mx-auto " >Cada detalhes foi pensado para criar a melhor esperiencia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-5xl">
                {cardimg.map((spec, desig) => (
                    <div key={desig} style={{backgroundImage:`url(${spec.image})`}} className=" cursor-pointer bg-cover bg-center bg-no-repeat rounded-2xl transition-all duration-300 min-h-[300px] hover:scale-105" >
                        <p className={`text-3xl font-bold`} > {spec.value}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>

        </section>

    )

}

export default Desig 