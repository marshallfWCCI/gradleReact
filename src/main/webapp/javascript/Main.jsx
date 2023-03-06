import React, { useState, useEffect } from "react";
import { createRoot }  from 'react-dom/client';
import '../css/Main.css';

function Main() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/api/friends")
              .then(res => res.json())
              .then(response => setFriends(response))
    }, [])

    return (
        <div id="main">
            <h1>My Best Friends</h1>
            <ul id="friend-list">
                {friends.map(friend => (
                    <li key={friend.id}>
                        {friend.lastName}, {friend.firstName} #{friend.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

createRoot(document.getElementById('react-mountpoint')).render(<Main />);
