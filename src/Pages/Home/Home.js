
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Presentation from '../../images/presentation.jpg';
import Faq from "./Faq/Faq";

import Card1 from "../../images/card1.svg";
import Card2 from "../../images/card2.svg";
import Card3 from "../../images/card3.svg";

import Chart1 from "../../images/chart1.svg";
import Chart2 from "../../images/chart2.svg";
import Chart3 from "../../images/chart3.svg";

import EuroIcon from "../../images/icon/euro.svg";
import PinIcon from "../../images/icon/map.svg";
import durationIcon from "../../images/icon/clock.svg";
import { NavLink } from "react-router-dom";

export default function Home(){

    const greenText = "text-green-400";
    const blueText = "text-blue-700";
    const yellowText = "text-yellow-400";
    const Jobs = [
        {
            id:1, 
            image:'https://www.studyrama.com/sites/default/files/metier/2022-07/arton1289.png',
            title:'Reponsable de site - H/F',
            zone: 'Nord',
            zoneIcon : PinIcon,
            content:'lorem ipsum',
            salaireIcon: EuroIcon,
            salaire:2100,
            horaireIcon: durationIcon,
            horaire:39

        },
        {
            id:2, 
            image:'https://espace-formation-istres.fr/wp-content/uploads/2019/02/kids-playing-750x303.jpg',
            title:'Reponsable Animation - H/F',
            zone: 'Ouest',
            zoneIcon : PinIcon,
            content:'lorem ipsum',
            salaireIcon: EuroIcon,
            salaire:2100,
            horaireIcon: durationIcon,
            horaire:39

        },
        {
            id:3, 
            image:'https://static3.cegos.fr/content/uploads/2019/05/07133819/charge-formation-600.jpg',
            title:'Chargée de formation - H/F',
            zone: 'Sud',
            zoneIcon : PinIcon,
            content:'lorem ipsum',
            salaireIcon: EuroIcon,
            salaire:1800,
            horaireIcon: durationIcon,
            horaire:39
        },
    ]
    const myCharts = [
        {
            id:1, 
            image: Chart1,
            title: 'Taux de réussite',
            content:'Nos taux de réussite sont un gage de qualité de nos formations. Nos apprenants ont une forte probabilité de réussir leur examen.',
        },
        {
            id:2, 
            image:Chart2, 
            title: 'Taux de satisfaction',
            content:'Ce pourcentage correspond à la satisfaction de nos stagiaires par les conditions de formations, la qualité des locaux...',
        },
        {
            id:3, 
            image:Chart3, 
            title:'Taux d\'insertion',
            content:'Le taux de retour à l’emploi de nos stagiaires à la suite de la formation. Ce taux indique une forte probabilité de trouver un emploi en cas d’obtention du diplôme.'
        }
    ];
    const myCards = [
        {
            id:1, 
            image: Card1,
            title : "Équipe pédagogique présente pour vous !",
            content: "Notre équipe pédagogique est composée de professionnels passionnés, qui mettent leur savoir-faire et au service de votre réussite. Grâce à leurs expériences professionnelles, nous sélectionnons les meilleurs pour vous assurer une formation de qualité.",
                       
        },
        {
            id:2, 
            image: Card2,
            title : "Un listing partenaire en recrutement",
            content: "En partenariat avec un grand nombre d’entreprises, leader dans leur secteur respectif, vous pourrez ainsi saisir l’opportunité de suivre votre formation au côté des plus grands ! C’est plus de 2000+ entreprises réunionnaises nous suivent et nous offrent leur confiance.",   
        },
        {
            id:3, 
            image: Card3,
            title : "Taux de réussite et d'insertion élevés",
            content: "Nous sommes fiers de pouvoir affirmer que notre taux de réussite et d’insertion est parmi les plus élevés de notre secteur. Cela reflète notre engagement à offrir un enseignement de qualité et à accompagner nos apprenants tout au long de leur parcours.",   
        }
    
    ]
    return(
        <>
            <Jumbotron />
            <section className="grid grid-cols-1 gap-5 mx-10 md:grid-cols-2 lg:grid-cols-2 md:mx-32 my-12 flex justify-center md:justify-between">
                <div>
                    {/* Texte */}
                    <h2 className="animate-pulse text-2xl md:text-6xl lg:text-6xl font-black uppercase text-slate-900 mb-10">
                        <span className="text-yellow-300">SYNERGIE OI</span> | Centre de formations à la Réunion
                    </h2>
                    <p className="text-xl text-justify">
                        <b>SYNERGIE OI, créé en 2008</b>, s’est <b>axé</b> sur le champ de la <b>formation professionnelle continue et apprentissage</b>, avec comme activités principales les formations liées au BTP.
                        Par la suite, <b>le centre s’est ouvert aux autres domaines</b> de formations tels que :
                    </p>
                    <ul>
                        <li><b>Tertiaire</b></li>
                        <li><b>Le service à la personne</b></li>
                        <li><b>Hygiène et Propreté</b></li>
                    </ul>
                    <p className="text-xl text-justify">L’activité de notre organisme est concentré et permet de <b>suivre des parcours du niveau 3 au niveau 7</b>. Ainsi, les demandeurs pourront obtenir un diplôme qualifiant et reconnu.</p>
                </div>
                <div className="">
                    <img className="max-w-auto max-h-full " src={Presentation} alt="Femme qui sourit au téléphone" />
                </div>
            </section>
            {/* <div className="w-52 flex flex-col justify-center">
            <hr/>
            </div> */}
            <section className="mx-10 md:mx-32 my-32">
                <h2 className="text-center text-2xl md:text-6xl lg:text-6xl text-slate-700 font-black uppercase">Pourquoi choisir <span className="text-yellow-300">Synergie OI</span> ?</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    { myCards.map(card => 
                        <div key={card.id} className="p-10 flex flex-col shadow-lg rounded-lg">
                            <img src={card.image} className="h-32 animate-pulse" alt="Hello World" />
                            <h6 className="text-center text-blue-700 text-xl uppercase font-black my-5">{card.title}</h6>
                            <p className="text-justify">{card.content}</p>
                        </div>
                    )}
                </div>
            </section>
            <section className="bg-slate-900 rounded-lg px-10 md:px-28 py-20 grid grid-row">
                <h2 className="text-2xl md:text-6xl lg:text-6xl uppercase font-black text-white mb-10">Synergie OI, en quelques statistique...</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {myCharts.map(chart => 
                        <a key={chart.id} href="/" className="text-center items-center bg-slate-300 p-3 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img id="chart-image" className=" animate-bounce delay-1000 mt-10 mx-auto object-center object-cover w-32 rounded-t-lg h-32 md:h-auto md:w-32 md:rounded-none md:rounded-l-lg" src={chart.image} alt="Hello Chart" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <span className={(chart.title === "Taux de réussite") ? greenText : (chart.title === "Taux de satisfaction") ? blueText : yellowText}>{chart.title}</span>
                                </h5>
                                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">{chart.content}</p>
                            </div>
                        </a>
                    )}
                </div>
            </section>
            <section className="mx-10 md:mx-32 my-20">
                <h2 className="text-center font-black text-2xl md:text-6xl lg:text-6xl uppercase text-yellow-300">Synergie c'est également l'embauche</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    {Jobs.map(job =>   
                    <div className="mt-10 max-w-sm bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700" key={job.id}>
                        <a href="/">
                            <img className="aspect-video rounded-t-lg" src={job.image} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/">
                                <h5 className="mb-2 text-2xl font-black tracking-tight text-blue-700 dark:text-white">{job.title}</h5>
                            </a>
                            <span className="flex justify-between mb-3 text-xs font-bold text-gray-700 dark:text-gray-400">
                                <span className="flex items-center">
                                    <img alt="hello" src={job.horaireIcon} className="w-5 mr-2"/> <p>{job.horaire} heures / semaines</p>
                                </span>
                                <span className="flex items-center">
                                    <img alt="hello" src={job.salaireIcon} className="w-5 mr-2"/> <p>{job.salaire}€</p>
                                </span>
                                <span className="flex items-center">
                                    <img alt="hello" src={job.zoneIcon} className="w-5 mr-2"/> <p>{job.zone}</p>
                                </span>
                                
                            </span>
                            <p className="font-normal text-base text-slate-400 mb-5">{job.content}</p>
                            <div className="flex items-center justify-evenly">

                                <NavLink to="/" className="hover:bg-yellow-400 hover:text-white duration-300 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-yellow-400 bg-transparent border border-3 border-yellow-400  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Postuler
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </NavLink>
                                <NavLink to="/" className={"text-yellow-400 font-bold"}>
                                    Consulter la fiche de poste
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </section>
            <Faq />
        </>
    )
}