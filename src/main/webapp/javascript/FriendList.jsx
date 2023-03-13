import React, { useState, useEffect } from "react";

export default function FriendList() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("/api/friends")
              .then(res => res.json())
              .then(response => setFriends(response))
    }, [])

    return (
        <div id="friendList">
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