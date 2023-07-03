import { useEffect, useRef, useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './crosswordPage.css';

export default function CrosswordPage () {

    // sample data for now
    let outputDataAcross = {};
    let outputDataDown = {};
    const [outputData,setOutputData] = useState({
        across: {},
        down: {}
    });

    const crosswordGridRef = useRef(null);

    const rawData = [
        {
          clue: "okay",
          answer: "tomorrow",
          col: 4,
          row: 3,
          orientation: "down",
        },
        {
          clue: "not",
          answer: "today",
          col: 7,
          row: 1,
          orientation: "down",
        },
        {
          clue: "fine",
          answer: "yesterday",
          col: 1,
          row: 3,
          orientation: "across",
        }
      ];

    function fetchAndParseData () {
        // fetch here

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
    }

    const onCorrect = (...values) => {
            console.log("fdsd");
    }

    useEffect(() => {
        fetchAndParseData();
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