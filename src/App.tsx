import React, { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/header/header";


const App = () => {
    return (
        <div className="app">
            <Header />
                <Routes>
                    <Route path="/order=JHnGWhxPx0GDo0TguaJOOEtGwH8UDp7u" element={<MainPage />}/>
                </Routes>
        </div>
    );
};

export default App;
