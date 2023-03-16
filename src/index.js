import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
 import user from './components/user.json'

function Profile () {
  return (
    <div class="profile">
<div class="description">
  <img
    src={user.avatar}
    alt="User avatar"
    class="avatar"
  />
  <p class="name">{user.username}</p>
  <p class="tag">{user.tag}</p>
  <p class="location">{user.location}</p>
</div>

<ul class="stats">
  <li>
    <span class="label">{user.stats[0]}</span>
    <span class="quantity">{user.stats.followers}</span>
  </li>
  <li>
    <span class="label">{user.stats[1]}</span>
    <span class="quantity">{user.stats.views}</span>
  </li>
  <li>
    <span class="label">{user.stats[2]}</span>
    <span class="quantity">{user.stats.likes}</span>
  </li>
</ul>
</div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><Profile />
    <App />
  </React.StrictMode>
);


