import {useState} from 'react'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';

export default function App() {
	const [mode, setMode] = useState(false)

	function toggleDarkMode () {
		setMode(!mode)		
	}

    return (
        <div className="app container">
            <Navbar darkMode={mode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={mode} />
        </div>
    )
}
