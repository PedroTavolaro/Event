import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import imgCodeMockup from '../assets/Duran1.jpeg';


import '../styles/subscribe.css';

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const imageUrl = new URL('./assets/Duran1.jpeg', import.meta.url).href

    // const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()


    async function handleSubscribe(event: FormEvent){
        event.preventDefault();

        const saveEmail = localStorage.setItem('email', email)
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })
        navigate('/event')
    }

    return (
       <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="section w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
                <Logo />
                <h1 className="mt-8 text-[2.5rem] leading-tight">
                Conheça a <strong className="text-blue-500">empresa</strong>, nossos conteúdos, oportunidades e <strong className="text-blue-500">plataformas</strong>
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                A empresa foi criada apartir da ideia de que juntos somos mais fortes. Tendo uma democracia entre os membros em busca das melhores oportunidades de mercado e tecnologia,  aberta a fusões,  investimento e alavancamos parceiros.
                </p>
            </div>

            <div className="sectionTwo p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input
                className="bg-gray-900 rounded px-5 h-14" 
                type="text"
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
                />
                <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={event => setEmail(event.target.value)}
                />
                
                <button 
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    Garantir minha vaga
                </button>

                </form>
            </div>
        </div>
        
        
        <img className="testeLogo" src={imgCodeMockup} alt='duran' />

       </div>
    )
}