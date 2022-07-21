import { TelegramLogo } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Presentation } from "../components/presentation";
import { Sidebar } from "../components/Sidebar";
import { SidebarMobile } from "../components/SidebarMobile";
import { Video } from "../components/Video";



export function Event(){
    const [isModalVisible, setIsModalVisible] = useState(true);

    function openModal(){
        setIsModalVisible(false)
    }

    function closeModal(){
        setIsModalVisible(true)
    }

    const { slug } = useParams<{slug: string}>()
    return(
        <div className="flex flex-col min-h-screen">
        <Header />
            <main className="section flex flex-1">
           
              
                {isModalVisible ?  
                 <>
                    {slug 
                    ? <Video lessonSlug={slug}/>
                    : 
                    <div className="flex-1 border-white"> 
                      <Presentation />
                    </div>                
                    }
                    <Sidebar />
                    <button className="button-modal flex" onClick={openModal}>
                    <p className="text-modal">Aulas</p>
                    <TelegramLogo size={25} />
                    </button>
                </>
                
                :
                
                <>
                         
                <Sidebar />
                <SidebarMobile />
                <button className="button-modal flex" onClick={closeModal}>
                  <p className="text-modal">Aulas</p>
               <TelegramLogo size={25} />
               </button>
                </>
               
                }
                  
            </main>
        </div>
    )
}