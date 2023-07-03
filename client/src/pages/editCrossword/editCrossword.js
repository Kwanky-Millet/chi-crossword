import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './editCrossword.css';

export default function EditCrossword () {

    let status = 0;
    let content;
    let clg = require('crossword-layout-generator');

    const location = useLocation(); 
    const navigate = useNavigate();

    try {
        status = location.state.status;
    } catch (err) {
        status = 0;
    }

    let unparsedData = [
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
        {
            "clue": "",
            "answer": "",
        },
    ];

    let layoutInput = [];

    const [errorMsg, setErrorMsg] = useState('');

    const isStringEmpty = (string) => {
        return string === "" ? 0 : 1;
    }

    async function postClue (item) {
        const res = await fetch("http://localhost:8000/api/crossword/", {
            method: "POST",
            credentials: "include",
            headers: {
            "Content-Type": "application/json",
            },
                body: JSON.stringify({
                    clue: item.clue,
                    answer: item.answer,
                    row: item.starty,
                    col: item.startx,
                    orientation: item.orientation
            })
        });

        navigate('/crossword');
    }

    function truncateTable () {
        const res = fetch("http://localhost:8000/api/crossword/", {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: {}
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let inputValid = true

        for (let idx = 0; idx < unparsedData.length; idx ++) {
            unparsedData[idx].clue = unparsedData[idx].clue.trim();
            unparsedData[idx].answer = unparsedData[idx].answer.trim();

            let tempClue = unparsedData[idx].clue
            let tempAnswer = unparsedData[idx].answer

            if (!(isStringEmpty(tempClue) ^ isStringEmpty(tempAnswer))) {
                if (!(tempClue === "" && tempAnswer === "")) {
                    layoutInput.push(unparsedData[idx]);
                }
            } else {
                setErrorMsg("Please fill both clue and word.");

                inputValid = false;
            }
        }

        if (inputValid) {
            let layout = clg.generateLayout(layoutInput);

            truncateTable();

            Array(layout.result)[0].forEach((item) => {
                postClue(item);
            })
        }

    }

    if (status) {
        content = 
        <>
            <div className="edit-page-container">
                <h1 className="edit-page-title">Biotechnology Crossword</h1>
                <p className="edit-page-description"><b>How to:</b> In the input fields below, enter the words and their corresponding hints. After completion, hit submit to generate the crossword. You may add upto 12 words.</p>
                <div className="crossword-clue-card">
                    <form onSubmit={handleSubmit} className="crossword-clue-form">
                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 1"
                                onChange={(e) => {unparsedData[0].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 1"
                                onChange={(e) => {unparsedData[0].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 2"
                                onChange={(e) => {unparsedData[1].clue = e.target.value}}
                                />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 2"
                                onChange={(e) => {unparsedData[1].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 3"
                                onChange={(e) => {unparsedData[2].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 3"
                                onChange={(e) => {unparsedData[2].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 4"
                                onChange={(e) => {unparsedData[3].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 4"
                                onChange={(e) => {unparsedData[3].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 5"
                                onChange={(e) => {unparsedData[4].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 5"
                                onChange={(e) => {unparsedData[4].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 6"
                                onChange={(e) => {unparsedData[5].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 6"
                                onChange={(e) => {unparsedData[5].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 7"
                                onChange={(e) => {unparsedData[6].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 7"
                                onChange={(e) => {unparsedData[6].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 8"
                                onChange={(e) => {unparsedData[7].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 8"
                                onChange={(e) => {unparsedData[7].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 9"
                                onChange={(e) => {unparsedData[8].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 9"
                                onChange={(e) => {unparsedData[8].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 10"
                                onChange={(e) => {unparsedData[9].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 10"
                                onChange={(e) => {unparsedData[9].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 11"
                                onChange={(e) => {unparsedData[10].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 11"
                                onChange={(e) => {unparsedData[10].answer = e.target.value}}
                            />
                        </div>

                        <div className="word-hint-pair">
                            <input 
                                type="text"
                                className="hint"
                                spellCheck="false"
                                placeholder="Hint 12"
                                onChange={(e) => {unparsedData[11].clue = e.target.value}}
                            />
                            <input
                                type="text"
                                className="word"
                                spellCheck="false"
                                placeholder="Word 12"
                                onChange={(e) => {unparsedData[11].answer = e.target.value}}
                            />
                        </div>

                        <p className='edit-page-error-message'>{errorMsg}</p>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </>
    } else {
        content = 
        <>
        <h1>
            403: Access denied
        </h1>
        </>
    }

    return (
        content
    );
}