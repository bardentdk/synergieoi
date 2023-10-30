import Teams from "./team.json";

export default function TeamSOI(){
    return(
        <>
            <div className="md:mx-32 mx-20 my-10">
                {/* <div className="py-10 px-20 bg-gradient-to-r from-yellow-300 to-orange-600 rounded-lg text-white">
                <h1 className="font-black text-2xl md:text-6xl ">L'équipe SYNERGIE OI</h1>
                </div> */}
                <p className="text-4xl font-bold text-blue-700 mb-9">Bras-Panon</p>
                <div className="mx-20 grid grid-cols-1 md:grid-cols-3 sm:grid-cols- gap-10 ">
                    {Teams.map(equipier =>
                        (equipier.secteur === 'est') ? <div class="w-full max-w-sm bg-white rounded-lg p-10 hover:shadow-xl duration-300 dark:bg-gray-800 dark:border-gray-700"><div class="flex flex-col items-center text-center pb-10"><img class="w-24 h-24 mb-3 rounded-sm" src={equipier.img} alt="Avatar"/><h5 class="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">{equipier.identity}</h5><span class="text-sm text-gray-500 dark:text-gray-400">{equipier.role}</span></div></div> : null)}
                </div>
            </div>
            <div className="md:mx-32 mx-20 my-10">
                <p className="text-4xl font-bold text-blue-700 mb-9 text-center">Ste Marie</p>
                <div className="md:mx-32 mx-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols- gap-10 ">
                    {Teams.map(equipier =>
                        (equipier.secteur === 'nord') ? <div class="w-full max-w-sm bg-white rounded-lg p-10 hover:shadow-xl duration-300 dark:bg-gray-800 dark:border-gray-700"><div class="flex flex-col items-center text-center pb-10"><img class="w-24 h-24 mb-3 rounded-sm" src={equipier.img} alt="Avatar"/><h5 class="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">{equipier.identity}</h5><span class="text-sm text-gray-500 dark:text-gray-400">{equipier.role}</span></div></div> : null)}
                </div>
            </div>
            <div className="md:mx-32 mx-20 my-10 flex flex-col text-center justify-center">
                <p className="text-4xl font-bold text-blue-700 mb-9">Villèle</p>
                <div className="md:mx-32 mx-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols- gap-10 flex justify-center">
                    {Teams.map(equipier =>
                        (equipier.secteur === 'ouest') ? <div class="w-full max-w-sm bg-white rounded-lg p-10 hover:shadow-xl duration-300 dark:bg-gray-800 dark:border-gray-700"><div class="flex flex-col items-center text-center pb-10"><img class="w-24 h-24 mb-3 rounded-sm" src={equipier.img} alt="Avatar"/><h5 class="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">{equipier.identity}</h5><span class="text-sm text-gray-500 dark:text-gray-400">{equipier.role}</span></div></div> : null)}
                </div>
            </div>
            <div className="md:mx-32 mx-20 my-10 flex flex-col text-center justify-center">
                <p className="text-4xl font-bold text-blue-700 mb-9">St Pierre</p>
                <div className="md:mx-32 mx-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols- gap-10 flex justify-center">
                    {Teams.map(equipier =>
                        (equipier.secteur === 'sud') ? <div class="w-full max-w-sm bg-white rounded-lg p-10 hover:shadow-xl duration-300 dark:bg-gray-800 dark:border-gray-700"><div class="flex flex-col items-center text-center pb-10"><img class="w-24 h-24 mb-3 rounded-sm" src={equipier.img} alt="Avatar"/><h5 class="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">{equipier.identity}</h5><span class="text-sm text-gray-500 dark:text-gray-400">{equipier.role}</span></div></div> : null)}
                </div>
            </div>
        </>
    );
}

      