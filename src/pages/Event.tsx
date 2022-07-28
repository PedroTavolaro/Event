import { TelegramLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Presentation } from "../components/presentation";
import { Sidebar } from "../components/Sidebar";
import { SidebarMobile } from "../components/SidebarMobile";
import { Video } from "../components/Video";

import '../styles/event.css';

export function Event(){
    const [isModalVisible, setIsModalVisible] = useState(true);

    function openModal(){
        setIsModalVisible(isModalVisible)
        setIsModalVisible(false)
    }

    function closeModal(){
        setIsModalVisible(true)
    }

    useEffect(() => {
        
    })

    const { slug } = useParams<{slug: string}>()
    return(
      
        <div className="container-master flex flex-col min-h-screen">
          {isModalVisible ? 
          <>
           <Header />
          <div className="divcontrol ">
                    <button className="button-modal" onClick={openModal}>
                    <p className="text-modal">Aulas</p>
                    <TelegramLogo className="logo" size={25}/>
                    </button>
          </div>
          </>
          :
          <Header />
          }

            <main className="section">
                        
                {isModalVisible ?  
                 <div className="container3">
                   {slug 
                    ? 
                    <>
                    <Video lessonSlug={slug}/>
                  
                    </>
                    : 
                    <div className="flex-1 border-white"> 
                      <Presentation />
                      <div className="divcontrolPresentation">
                      <button className="button-modal-presentation" onClick={openModal}>
                      <p className="text-modal">Aulas<p><TelegramLogo className="logo" size={25}/></p></p>
                   
                      </button>
                      </div>
                      
                    </div>                
                    }
                    <Sidebar />
                    
              </div>
                
                :
                
                
                <>
                  <SidebarMobile />
                   
                <button className="button-modal-open flex" onClick={closeModal}>
                    <p className="text-modal-open">Assistir aula selecionada</p>
                <TelegramLogo size={25} />
                </button>
                
               </>
                }
                  
            </main>
        </div>
    )
}