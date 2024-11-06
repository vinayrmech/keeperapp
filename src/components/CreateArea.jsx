import React, { useState } from "react";

function CreateArea(pros) {
    const [note, setNote] = useState({ title: "", content: "" });
    function handelChange(event) {
        const { name, value } = event.target;
        setNote((prevsVal) => ({ ...prevsVal, [name]: value }));
    }

    function submitHandel(e) {
        pros.onAdd(note);
        e.preventDefault();
        setNote({ title: "", content: "" });
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handelChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={handelChange}
                />
                <button onClick={submitHandel}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
