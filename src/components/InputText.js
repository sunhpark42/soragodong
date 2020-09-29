import React, { useState } from 'react';
import answerSheet from '../answerSheet.json';
import '../input.css'

function InputText() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const onQuestionChange = (e) => {
        setQuestion(e.target.value);
    }

    const onEnterKey = (e) => {
        if (e.key === 'Enter') {
            var i = Math.ceil(Math.random() * 100) % 9;
            setAnswer(answerSheet.answers[i]);
        }
    }
    return (
        <>
            <div className="content">
                <input type="text" name="question" placeholder="질문을 입력하세요" onChange={onQuestionChange} onKeyPress={onEnterKey}></input>
                <div className="answer">{answer}</div>
            </div>
        </>
    );
}

export default InputText;