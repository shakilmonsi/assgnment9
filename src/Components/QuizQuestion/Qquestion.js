import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FileQuestion from '../Filequestion/FileQuestion';

const Qquestion = () => {
    const quizQuestion = useLoaderData().data;
    const quizes = quizQuestion.questions;
    const questionName = quizQuestion.name;
    // console.log(quizQuestion);
    return (
        <div className='mt-10 text-center '>
            <h2 className='text-3xl text-emerald-800 font-bold'> Questions Of {questionName}</h2>
            {
                quizes.map(quizQuestion => <FileQuestion key={quizQuestion.id} quizQuestion={quizQuestion}></FileQuestion>)
            }
        </div>
    );
};

export default Qquestion;