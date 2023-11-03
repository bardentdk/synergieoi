import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){
    const form = useRef();
    const [toggle, setToggle] = useState(false);
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm("service_2rqqnqu", "template_6gt660h", form.current, "4B7GDhgtzD3kv3XvP").then(
            (result) => {
                console.log(result.text);
                setToggle(true);
            },
            (error) => {
                console.log(error.text);
                return errorAlert;
            }
        )
    }
    
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [objet, setObjet] = useState();
    const [content, setContent] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(new FormData(e.target.value))
        let contactF = new FormData(e.target);
        setNom(contactF.get('name'));
        setPrenom(contactF.get('lastname'));
        setEmail(contactF.get('email'));
        setPhone(contactF.get('phone'));
        setObjet(contactF.get('objet'));
        setContent(contactF.get('message'));
        setToggle(!toggle);
        // var name = contactF.get('firstname');
        // var lastname = contactF.get('lastname');
        // var email = contactF.get('email');
        // var phone = contactF.get('phone');
        // var objet = contactF.get('objet');
        // var content = contactF.get('content');
    }
    const [alertToggle, setAlertToggle] = useState(true);
    const showAlert = "mx-32 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 flex ";
    const hideAlert = 'hidden';
    const successAlert = <div className={alertToggle ? showAlert : hideAlert} role="alert" >
                            <span className="font-medium">Votre message a été transmis avec succès Nous reviendrons vers vous dès que possible. Merci de ne pas renouveler votre demande plusieurs fois afin d'éviter une surchage.</span>
                            <button className="font-bold" onClick={() => setAlertToggle(false)}>
                                X
                            </button>
                        </div>;
    const errorAlert = <div className="mx-32 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
                        </div>;
    const confirmation = 
        <h2 className="grid grid-cols-1 mx-5 md:mx-20 bg-indigo-300 p-3 rounded-lg text-slate-800">
            <div className="">
                hello <span className="font-bold text-indigo-700">{nom} {prenom}</span>, nous avons bien reçu votre demande concernant : 
                - <span className="font-bold text-indigo-700">{objet}</span> <br /> Nous vous contacterons principalement sur le <span className="font-bold text-indigo-700">{phone}</span> ou par email à <span className="font-bold text-indigo-700">{email}</span>. 
                Merci à bientôt.
                <span className="font-bold text-indigo-700 italic">`{content}`</span>
            </div>
        </h2>;
    return(
        <>
            {toggle ? successAlert : ""}
            <form ref={form} className="mx-20 my-10 md:mx-32 md:my-20" onSubmit={sendEmail}>
                <h2 className=" text-2xl md:text-6xl animate-pulse text-slate-700 font-black uppercase">Besoin d'une information particulière ?</h2>
                <p className="mb-10">Remplissez ce formulaire attentivement et vous serez contacté !</p>
                <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10">
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom complet</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />                      
                    </div>
                    {/* <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre prénom</label>
                        <input type="text" name="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre n° de téléphone</label>
                        <input type="number" name="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objet du message</label>
                    <input type="text" name="objet" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objet du message</label>
                    <textarea rows="10" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                </div>
                <button className="text-white bg-yellow-400 py-5 px-6 font-bold rounded-lg hover:bg-yellow-500 duration-300">Soumettre le formuaire</button>
            </form>
            
        </>
    )
}