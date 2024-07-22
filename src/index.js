import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/reduxStore';
import { UsersContainer } from './components/Users/UsersContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';

const rerenderEntireTree = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [

                {
                    path: "profile",
                    element: <Profile />,
                    index: true,
                    
                },
                {
                    path: "profile/:id",
                    element: <ProfileContainer />,

                },
                {
                    path: "dialogs",
                    element: <Dialogs />,
                },
                {
                    path: "news",
                    element: <News />,
                },
                {
                    path: "music",
                    element: <Music />,
                },
                {
                    path: "Settings",
                    element: <Settings />,
                },
                {
                    path: "Users",
                    element: <UsersContainer />,
                },
            ]
        },
    ]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
}
rerenderEntireTree();



// export default rerenderEntireTree

reportWebVitals();