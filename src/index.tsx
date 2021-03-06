import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dialog from "./components/Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";
import State from "./Redux/State";
import {AddNewPost} from "./Redux/State";
import {renderEntireFree} from "./render";





renderEntireFree(State);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
