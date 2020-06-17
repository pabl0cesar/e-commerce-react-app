import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import firebase from 'firebase/app';
import { config } from './config/config'
import {
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';

firebase.initializeApp(config.firebaseConfig);

const loggedIn = false;

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/tos">
                    <TermsOfService />
                </Route>
                <Route path="/privacy-policy">
                    <PrivacyPolicy />
                </Route>
            </Router>
        </React.StrictMode>
    );
}