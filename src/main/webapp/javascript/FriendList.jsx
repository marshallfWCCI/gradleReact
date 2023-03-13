import React, { useState, useEffect } from "react";

export default function FriendList({memo}) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const periodicallyFetch = setInterval(
           () => fetch("/api/friends")
                      .then(res => res.json())
                      .then(response => setFriends(response)),
           1000);
        return () => clearInterval(periodicallyFetch)
    }, [])

    return (
        <div id="friendList">
            <h1>My Best Friends -- {memo}</h1>
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