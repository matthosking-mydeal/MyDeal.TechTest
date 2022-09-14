import React from "react";
import '../App.css'

export default function AppFooter(){
    return (
        <div className="App-footer">
            <hr />
            <footer>
                <p>Copyright &copy; {new Date().getFullYear()} - MyDeal</p>
            </footer>
            <hr />
        </div>
    );
}