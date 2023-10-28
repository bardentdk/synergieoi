import TPAph from "../../images/aph.jpeg";
import TPStee from "../../images/stee.jpeg";
import TPSc from "../../images/sc.jpg";
import TPAmb from "../../images/72529821";

export default function NosFormations(){
    const newBadge = <span class="absolute ml-3 mt-3 bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-4 py-2 inline-block rounded dark:bg-purple-900 dark:text-purple-300">Récemment ajoutée</span>;
    const formations = [
        {
            id:1, 
            nom:"Titre Professionnel - Agent de Propreté et d'Hygiène",
            descriptif: "L'agent de propreté et d'hygiène assure des prestations de nettoyage manuel et mécanisé afin de garantir l'hygiène et la propreté de locaux et d'équipements ...",
            img : TPAph ,
            duree : 12,
            nouveau : false,
            zone : "St Pierre"
        },
        {
            id:2, 
            nom:"Titre Professionnel - Soudeur Tig / Electrode Enrobée",
            descriptif: "Le soudeur TIG électrode enrobée intervient généralement debout. Il travaille au sol, parfois dans des endroits exigus (en fouille) ou en hauteur sur des ...",
            img : TPStee,
            duree : 12,
            nouveau: true,
            zone : "Bras-Panon"
        },
        {
            id:3, 
            nom:"Titre Professionnel - Agent de Maintenance du Bâtiment",
            descriptif: "Polyvalent , l’agent de maintenance du bâtiment intervient pour maintenir en état des bâtiments d’entreprise ou de collectivité. Électricité, plomberie, vitrerie… Il ou elle effectue des travaux courants de rénovation et d’aménagement intérieur.",
            img : TPAmb,
            duree : 12,
            nouveau: false,
            zone : "Bras-Panon"
        },
        {
            id:4, 
            nom:"Titre Professionnel - Secrétaire Comptable",
            descriptif: "Le secrétaire comptable recueille, contrôle et comptabilise les documents commerciaux, sociaux et fiscaux (TVA) nécessaires à la tenue de la comptabilité dans ...",
            img : TPSc,
            duree : 12,
            nouveau: true,
            zone : "Bras-Panon"
        },
    ];
    return(
        <div className="my-10 lg:mx-32 lg:my-20">
            <h1 className="text-2xl md:text-6xl text-slate-800 font-bold animate-pulse mb-8 uppercase ">Nos Formations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-y-10">
                {formations.map(formation => 
                    
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={formation.id}>
                    {formation.nouveau ? newBadge : ''}
                    <img className="aspect-video rounded-t-lg" src={formation.img} alt="hello world" />
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-black tracking-tight text-yellow-300 uppercase dark:text-white">{formation.nom}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 truncate text-justify">{formation.descriptif}</p>
                        <div className="flex justify-between mb-0">
                            <p className="font-bold text-indigo-700">Durée : <span className="font-normal text-slate-800">{formation.duree} mois</span></p> 
                            <p className="font-bold text-indigo-700">Secteur : <span className="font-normal text-slate-800">{formation.zone}</span> </p>
                        </div>
                        {/* <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            En lire plus
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>
                </div>

                )}
            </div>
        </div>
    )
}