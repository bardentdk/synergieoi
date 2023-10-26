export default function Faq(){
    // options with default values
    
    const options = {
        alwaysOpen: false,
        activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
        inactiveClasses: 'text-gray-500 dark:text-gray-400',
        onOpen: (item) => {
            console.log('accordion item has been shown');
            console.log(item);
        },
        onClose: (item) => {
            console.log('accordion item has been hidden');
            console.log(item);
        },
        onToggle: (item) => {
            console.log('accordion item has been toggled');
            console.log(item);
        },
    };
    const faqs = [
        {
            id:1,
            ariaHeading: "accordion-collapse-heading-1",
            ariaBody: "accordion-collapse-body-1",
            ariaTargetBody: "#accordion-collapse-body-1",
            title:"J'ai trouvé ma formation ! Mais comment s'inscrire ?",
            content:"Il faudra vous inscrire aux informations collectives. Nous contacter : 0262 58 08 54"
        },
        {
            id:2,
            ariaHeading: "accordion-collapse-heading-2",
            ariaBody: "accordion-collapse-body-2",
            ariaTargetBody: "#accordion-collapse-body-2",
            title:"Je n'ai pas d'idée sur la formation que je veux faire. Auriez-vous un catalogue ?",
            content:"Oui, il est accessible sur la page <b>Nos Formations</b> dans le menu "
        },
        {
            id:3,
            ariaHeading: "accordion-collapse-heading-3",
            ariaBody: "accordion-collapse-body-3",
            ariaTargetBody: "#accordion-collapse-body-3",
            title:"La formation est sur combien de temps ?",
            content:"Les formations "
        },
        {
            id:4,
            ariaHeading: "accordion-collapse-heading-4",
            ariaBody: "accordion-collapse-body-4",
            ariaTargetBody: "#accordion-collapse-body-4",
            title:"Combien je serais rémunéré(e) ?",
            content:"Tout dépendra du cursus choisit. En décidant de faire une formation en apprentissage, votre employeur se verra vous verser votre salaire. A noter qu’en alternance, la rémunération se basera sur l’âge de l’apprenant.Selon votre âge, vous vous verrez verser un pourcentage du SMIC. Plus d’infos en cliquant ici"
        },
    ]
    return(
        <section className="mx-10 md:mx-32 my-20">
            <h1 className="text-3xl uppercase md:text-5xl font-black mb-10 text-slate-700">Questions / Réponses</h1>
            <div className="grid">
                {faqs.map(faq=>
                    <div id="accordion-collapse" data-accordion="collapse" key={faq.id}>
                        <h2 id={faq.ariaHeading}>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200" data-accordion-target={faq.ariaTargetBody}  aria-expanded={options.alwaysOpen} aria-controls={faq.ariaBody}>
                            <span>{faq.title}</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id={faq.ariaBody} className="hidden" aria-labelledby={faq.ariaHeading}>
                            <div className="p-5 border border-b-0 border-gray-200">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.content}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}