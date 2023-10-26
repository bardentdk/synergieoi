import React from "react";

export default function jumbotron(){
    return(
        <div>
            <section id="jumbotron" className='bg-center bg-no-repeat bg-gray-700 bg-blend-multiply'>
            <div className=" mx-auto max-w-screen-xl text-start py-24 lg:py-32">
                <span className="md:mx-20 mx-5 font-bold text-xl text-yellow-700">FORMATIONS</span>
                <h1 className="mx-5 md:mx-20 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Votre avenir notre métier</h1>
                <p className="mx-5 md:mx-20 mb-8 text-lg font-normal text-gray-300 lg:text-xl">Trouvez votre formation et intégrez notre centre dès aujourd’hui !</p>
                <div className="md:mx-20 px-5 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
                    <a href="/" className="duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Catalogue des formations
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/" className="hover:text-white duration-300 inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-yellow-400 rounded-lg border border-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:ring-gray-400">
                        Demander un devis
                    </a>  
                </div>
            </div>
        </section>
        </div>
    );
}