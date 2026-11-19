function Intro (){

    const cards = [
        {value: '6.3"', label:'Display super Ritina XDR', color: 'text-blue-600' },
        {value: 'A18 Pro"', label:'Chip mais Rápido', color: 'text-orange-500' },
        {value: '48MP"', label:'Sistema de câmera', color: 'text-blue-600' },
        {value: '29h"', label:'Bateria', color: 'text-orange-500' }
    ];

    const cardimg = [
        {value: '6.3"', label:'Display super Ritina XDR', color: 'text-blue-600' },
        {value: 'A18 Pro"', label:'Chip mais Rápido', color: 'text-orange-500' },
        {value: '48MP"', label:'Sistema de câmera', color: 'text-blue-600' },
        {value: '29h"', label:'Bateria', color: 'text-orange-500' }
    ];

    return(

        <section className=" py-20 px-6">
            <div className=" max-w-5xl mx-auto text-center ">
                <h1 className=" text-6xl md:text-8xl font-bold" >iPhone 17 Pro</h1>
                <p className=" text-2xl md:text-4xl mb-4 text-gradient font-bold " >Titanio.Tao forte. Tao Leve. Tao Pro</p>
                <p className=" text-lg md:text-xl text-gray-300 md-10 max-w-3xl mx-auto " >O Design mais refinado que ja criamos</p>
            </div>
            {/* <div className=" flex items-center justify-center gap-8 py-10" > */}
            <div className=" flex flex-col md:flex-row items-center justify-center gap-4 mb-16 py-8" >
                <button className=" py-4 px-8 rounded-full bg-blue-400 transition-all duration-300 cursor-pointer hover:bg-blue-900 " >Comprar Agora</button>
                <button className=" py-4 px-8 rounded-full border border-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300" >Saiba mais</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl">
                {cards.map((spec, index) => (
                    <div key={index} className=" cursor-pointer bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 " >
                        <p className={`text-3xl font-bold ${spec.color}`} > {spec.value}</p>
                        <p>{spec.label}</p>
                    </div>
                ))}
            </div>

        </section>

    )

}

export default Intro