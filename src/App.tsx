import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])
  return (
    <div>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Router />  
            </BrowserRouter> 
          </ApolloProvider>
      
    </div>
  )
}

export default App
