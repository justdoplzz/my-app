import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="1번책이름" numOfPage={300}></Book>
            <Book name="2번책이름" numOfPage={400}></Book>
            <Book name="3번책이름" numOfPage={500}></Book>
        </div>
    );
}

export default Library;