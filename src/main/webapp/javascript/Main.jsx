import React from "react";
import { createRoot }  from 'react-dom/client';
import '../css/Main.css';
import FriendList from './FriendList.jsx';

function Main() {
    return (
        <div id="main">
            <FriendList />
        </div>
    )
}

createRoot(document.getElementById('react-mountpoint')).render(<Main />);
