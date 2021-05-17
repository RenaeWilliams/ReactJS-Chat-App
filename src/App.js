import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import Login from './components/Login'
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <Login />
        
    return (
        <ChatEngine 
            height='100vh'
            projectID='b80043f0-63bd-4596-85ad-fd1a54a6c013'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} /> }
        />
    )
}
export default App
