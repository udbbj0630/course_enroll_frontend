import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MenuBar from "./components/MenuBar";
import AllCourses from "./views/AllCourses";
import EnrolledCourses from "./views/EnrolledCourses";
import LoginDialog from "./components/LoginDialog";



export default function App() {
    return (
        <div className="App">
            <MenuBar />
            <Routes>
                <Route path="/" element={<AllCourses />} />
                <Route path="enrolled-courses" element={<EnrolledCourses />} />
                <Route path="debug" element={<LoginDialog />} />
            </Routes>
        </div>
    );
}
