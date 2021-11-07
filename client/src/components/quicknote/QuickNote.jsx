import "./quickNote.css";

import Note from "./Note";
import CreateArea from "./CreateArea";

import React, { useState, useEffect } from "react";

import axios from "axios";


export default function QuickNote() {

    const [notes, setNotes] = useState([]);
    // const user = JSON.parse(localStorage.getItem("user")) || null;

    const isAuth = () => {

        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return false;
        }
    }
    const username = isAuth() ? isAuth().username : '999'

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/notes/?user="+username);
          setNotes(res.data)
        };
        fetchPosts();
    },);
 
    function addNote(newNote) {
        setNotes(prevNotes => {
        return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="quickNote">
            <h2 className="quickNoteTopic">Quick Note</h2>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                    key={index}
                    id={noteItem._id}
                    title={noteItem.title}
                    content={noteItem.desc}
                    onDelete={deleteNote}
                    />
                );
            })}
        </div>
    )
}
