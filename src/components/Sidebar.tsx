import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import {  } from "../graphql/generated";
import { Lesson } from "./Lesson";


import { useState } from "react";
import { TelegramLogo } from "phosphor-react";

// interface GetLessonsQueryResponse{
//     lessons: {
//         id: string,
//         title: string,
//         slug: string,
//         availableAt: string,
//         lessonType: 'live' | 'class'
//     }[]
// }

export function Sidebar(){

    const [isModalVisible, setIsModalVisible] = useState(true);

    const { data } = useGetLessonsQuery()

    console.log(data)

    function openModal(){
        setIsModalVisible(false)
    }

    function closeModal(){
        setIsModalVisible(true)
    }

    return(
         
            
            <aside className="container w-[348px] bg-gray-700 p-6 border-l border-gray-600">
                 <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                     Cronograma de aulas
                 </span>
     
                 <div className="flex flex-col gap-8">
                  {data?.lessons.map(lesson => {
                     return(
                     <Lesson 
                         key={lesson.id}
                         title={lesson.title}
                         slug={lesson.slug}
                         availableAt={new Date(lesson.availableAt)}
                         type={lesson.lessonType}
                     />
                     )
                  })
                  } 
                 </div>
             </aside>
    )
}