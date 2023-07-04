import { useEffect, useRef, useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './crosswordPage.css';

export default function CrosswordPage () {

    let outputDataAcross = {};
    let outputDataDown = {};
    const [outputData,setOutputData] = useState({
        across: {},
        down: {}
    });

    const crosswordGridRef = useRef(null);

    let rawData = [];

    function parseData () {
        let counter = 1;

        rawData.forEach((currObj) => {
            if (currObj.orientation === 'across') {
                outputDataAcross[counter] = {
                    clue: currObj.clue,
                    answer: currObj.answer,
                    row: currObj.row,
                    col: currObj.col
                }
                counter ++;
            } else {
                outputDataDown[counter] = {
                    clue: currObj.clue,
                    answer: currObj.answer,
                    row: currObj.row,
                    col: currObj.col
                }
                counter ++;
            }
        });

        setOutputData({
            across: outputDataAcross,
            down: outputDataDown
        })

        console.log(outputData);
        console.log('sa', rawData);
    }

      function fetchRawData () {
        const request = fetch("http://localhost:8000/api/crossword/");

        request.then(res => {
            res.json().then(data => {
                rawData = data;
                parseData();

            });
        });

      }

    const onCorrect = (...values) => {
            console.log("fdsd");
    }

    useEffect(() => {
        fetchRawData();
        crosswordGridRef.current.highlightBackground = 'rgb(0,255,0)'
    }, []);

    return (
        <>
            <div className="crossword-page-container">
                <div className="crossword-container">
                    <Crossword
                        ref={crosswordGridRef}
                        data={outputData}
                        onCorrect={onCorrect}
                    />
                </div>
            </div>
        </>
    );
}   