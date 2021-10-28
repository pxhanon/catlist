import "./quickNote.css";

import Note from "./Note";
import CreateArea from "./CreateArea";

import React, { useEffect, useState } from "react";

import axios from "axios";

export default function QuickNote() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/notes")
            console.log(res);
        }
        fetchPosts()
    },[])

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
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />
                );
            })}
        </div>
    )
}
