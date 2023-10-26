import Logo from "../../images/icon/map.svg";

export default function NosCentres(){
    const centers = [
        {
            id:1,
            img:{Logo},
            title: "SYNERGIE OI",
            zone: "Bras-Panon",
            address:'2 rue des Lilas, Z.A de Bras-Panon, 97412, Bras-Panon',
            tel: "0262 580 854",
            mail: "accueil.soi@synergie-oi.com"
        },
        {
            id:2,
            img:{Logo},
            title: "SYNERGIE OI",
            zone: "Sainte-Marie",
            address:'5 impasse Neptune, ZA La Mare, 97438, Sainte-Marie',
            tel: "0692 383 849",
            mail: "accueil.soi.nord@synergie-oi.com"
        },
        {
            id:3,
            img:{Logo},
            title: "SYNERGIE OI",
            zone: "Villèle",
            address:'131 chemin des Roses, Villèle, 97435, Saint-Paul',
            tel: "0692 383 849",
            mail: "accueil.ouest@synergie-oi.com"
        },
        {
            id:4,
            img:{Logo},
            title: "SYNERGIE OI",
            zone: "Saint-Pierre",
            address:'21 cité Canabady, 97410, Saint-Pierre',
            tel: "0692 416 605",
            mail: "accueil.sud@synergie-oi.com"
        },
        {
            id:5,
            img:'https://media.licdn.com/dms/image/C4E0BAQGbrVtGR9MAXQ/company-logo_200_200/0/1657870578273?e=2147483647&v=beta&t=SfIUyA9I4M48aOmUYEcLUw-JrVAzT0TijJUP7Ig7Isc',
            title: "CESSA Réussite Scolaire",
            zone: "Saint-André",
            address:'142 rue Hyppolite Foucque, 97440, Saint-André',
            tel: "0262 200 300",
            mail: "perianinf@synergie-oi.com"
        },
    ]
    return(
        <>
            <h1 className="mx-32 text-2xl md:text-6xl font-black md:my-20">Nos centres</h1>
                <div className=" flex flex-col justify-center md:mx-32 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-5 md:gap-10">
                {centers.map(centre => 
                    <div className="flex items-center md:p-4 max-w-sm rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700" key={centre.id}>
                        <span>
                            <img className="rounded-t-lg mx-auto w-32" src={Logo} alt="Hello" />
                        </span>
                        <div className="p-5">
                            <span>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{centre.title}</h5>
                                <span class="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{centre.zone}</span>

                            </span>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{centre.address}</p>
                            <div className="mb-8">
                                <p className="text-xs font-bold">{centre.tel} / {centre.mail}</p>
                            </div>
                            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </div>
                        
                    </div>
                    )
                }
                </div>
        </>
    )
}