function HelloStranger() {

    return (

        <div>

            <div className="grid grid-cols-2 gap-2 mx-auto p-8 antialiased font-semibold">
                <img src="me.png" alt="Matias Mojzeszowicz" className="rounded-full border-4 fade3 mx-auto 
                w-52 h-52 md:w-72 lg:w-72 md:h-72 lg:h-72  shadow-lg border-gray-700 col-span-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                <h1 className="font-sans text-6xl text-center fade3 col-span-2">Hello, stranger!</h1>
                <p className="font-sans text-5xl text-center fade4 col-span-2">My name is Matías Mojzeszowicz</p>
                <p className="font-sans text-4xl text-center fade5 col-span-2">I'm a fullstack dev</p>
            </div>
            
        </div>
    )
  }

export default HelloStranger