import { useEffect } from 'react';
import { apiLink } from '../../../services/Api';
import { io } from 'socket.io-client';
import './Chat.scss';
const socket = io(apiLink);

function Chat() {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected');
        });
        return () => {
            socket.disconnect();
        };
    }, []);
    return (
        <div className='chat'>
            Chat
        </div>
    );
}

export default Chat;