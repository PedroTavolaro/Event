import { CaretRight, CheckCircle, DiscordLogo, House, TelegramLogo } from "phosphor-react";


import '../styles/presentation.css';



export function Presentation(){
    return(
        <div className="p-8 max-w-[1100px] mx-auto">
        <div className="section-two items-start gap-16">

            <div className="flex-1">
            
                <h1 className="title text-3xl font-bold">Apresentação</h1>
    
                <br />
                <h1 className="text-2xl font-bold">
                •  Plataforma desevolvida para educação, divulgação e transmissão ao vivo, 
                sendo informações e publicação publicas ou privadas.
                <br />
                <br />
                • Nessa apresentação vamos conhecer um pouco sobre o mundo da tecnologia e também
                  dos investimentos. 
                <br />
                <br />
                • Vamos estar aprendendo a desenvolver um currículo em html e css, para que possa
                utiliza-lo em entrevistas de emprego e mostrar a pessoas interessadas nos seus conhecimentos e
                também porque e como começar nos investimentos.
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                Aproveite da nossa comunidade do discord e telegram, lá você pode tirar suas duvidas, conhecer pessoas que tambèm estão aprendendo e muito mais !!! 
                </p>

                </div>

               <div className="container-one">
                    <div className="container-two flex justify-between">
    
                            <div className="teacher gap-2">
                                <header className="description items-center justify-between border-red">
                                        <span className='title flex text-sm font-medium items-center gap-2 text-blue-500 mb-0'>
                                        <CheckCircle size={20} />
                                        <p className="nome">Pedro Tavolaro</p>
                                        </span>
                                        <span className='text-xs rounded py-[0.125rem] px-2 text-white border font-bold border-green-300 ml-7 mr-1'>
                                            Professor
                                    </span>          
                                </header>
                               
                                <div className="divImage">
                                    <div className="space"></div>
                                    <img 
                                        className="img h-16 w-16 rounded-full border-2 border-blue-500"
                                        src='https://avatars.githubusercontent.com/u/50761787?v=4'  
                                        alt="" 
                                    />
                                </div>
                                
                                <div className="teacher-description">
                                        <strong className="text-gray-200 text-sm block"> Co-fundador e CTO na Duran </strong>
                                </div>
                                <strong className='bio block text-blue-500 ml-6'>
                                    Profissíonal de Tecnologia
                                </strong>
                            </div>
                           
                            <a href="https://www.pedrotavolaro.com" className="linkSite bg-gray-700 rounded overflow-hidden flex items-stretch hover:bg-gray-600 transition-colors mt-0">
                                    <div className="bg-green-700 h-full p-4 flex items-center">
                                        <House size={40} />    
                                    </div>                        
                                    <div className="divStrong py-6 leading-relaxed">
                                        <strong className="text-2xl">
                                            Visitar o site
                                        </strong>
                                        <p className="text-sm text-gray-200 border-1">
                                            Vá ao site para aproveitar o melhor dos nossos conteúdos 
                                            {/* Baixe wallpapers exclusivos do ignite lab e personalize a sua máquina */}
                                        </p>
                                    </div>
                                    <div className="icon h-full flex items-center">
                                        <CaretRight size={24} />
                                    </div>
                                </a>
                    </div>
               </div>
           
               

            <div className="contact flex gap-4 mt-10">
                <a href="https://discord.gg/Jqf26WYn" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                    <DiscordLogo size={24} />
                    Comunidade do Discord
                </a>

                <a href="https://t.me/+RfLw83-BAmk1YWEx" className="p-4 text-sm border-2 border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                    Acesse o Telegram
                    <TelegramLogo size={24} />
                </a>
            </div>
        </div>
        
   </div>
    )
}