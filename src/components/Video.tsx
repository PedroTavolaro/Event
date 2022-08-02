import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { ArrowLeft, CaretRight, DiscordLogo, FileArrowDown, House, Lightning, TelegramLogo } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

import React, { useState } from 'react'
import '../styles/video.css';
import { SidebarMobile } from "./SidebarMobile";

// const GET_LESSON_BY_QUERY = gql `
   
// `

// interface GetLessonBySlugResponse{
//     lesson: {
//         title: string;
//         videoId: string;
//         description: string;
//         teacher: {
//             bio: string;
//             avatarURL: string;
//             name: string;
//         }
//     }
// }



interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [check, setCheck] = useState('');
    
    function openModal(){
        setIsModalVisible(true)
        setCheck('a')
    }

    function closeModal(){
        setIsModalVisible(false)
    }

    // const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_QUERY, {
    //     variables: {
    //         slug: props.lessonSlug,
    //     }
    // })

    const { data } = useGetLessonBySlugQuery ({
        variables: {
            slug: props.lessonSlug,
        }
    })
       


    if(!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }
console.log(isModalVisible)

const saveStatus = localStorage.setItem('isModalVisible', check)

    return(

        
        <div className="master flex-1">
            
            
           <div className="section-one bg-black flex justify-center">
                <div className="video h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
           </div>

           <div>
                 {/* <button onClick={openModal}>
                    
                 <p className="text-modal">Aulas</p>
                    <TelegramLogo size={25} />
                 </button> */}
{/*                     
                {
                    isModalVisible ? 
                     
                    <div>
                        <SidebarMobile />
                    </div> 
                    : <p>a</p>
                } */}

            </div>           

           <div className="p-8 max-w-[1100px] mx-auto">
                <div className="section-two flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                        {data.lesson.title} 
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                        {data.lesson.description} 
                        </p>

                       {data.lesson.teacher && (
                         <div className="flex items-center gap-4 mt-6">
                         <img 
                         className="h-16 w-16 rounded-full border-2 border-blue-500"
                         src={data.lesson.teacher.avatarURL}  
                         alt="" 
                         />
                         
                         <div className="leading-relaxed">
                             <strong className="font-bold text-2xl block">{data.lesson.teacher.name} </strong>
                             <strong className="text-gray-200 text-sm block">{data.lesson.teacher.bio} </strong>
                         </div>
                         </div>
                       )}
                    </div>

                    <div className="community flex flex-col gap-4 ">
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
                <div className="section-three flex gap-8 mt-20 grid-cols-2">
                    <a href="https://drive.google.com/drive/folders/1-nt-ge_iPu2_aAISAaN3DSgvMrXuHCXN?usp=sharing" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />    
                        </div>                        
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="sectionP2 text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar seu desenvolvimento
                            </p>
                        </div>
                        <div className="divArrow h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="https://www.pedrotavolaro.com" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <House size={40} />    
                        </div>                        
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Voltar ao site
                            </strong>
                            <p className="sectionP3 text-sm text-gray-200 mt-2">
                                Volte ao site para aproveitar dos nossos conteúdos 
                                {/* Baixe wallpapers exclusivos do ignite lab e personalize a sua máquina */}
                            </p>
                        </div>
                        <div className=" h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
           </div>
        </div>
        
    )
}