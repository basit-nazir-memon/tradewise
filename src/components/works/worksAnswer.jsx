import React, {useState} from 'react'

const WorksAnswer = () => {
    const [answers, setAnswers] = useState([]); 

    return (
        <>
            <div className="noContentFound" style={{display: answers.length > 0 ? "none" : "flex"}} >
                <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1702639999~exp=1702640599~hmac=57eaf7377997c5ad7bc2636c7e4961d23db7764e6f2ac3fb2dd8908e33dc5237" alt="No Content Found" />
                <p>No Content Found</p>
            </div>
        </>
    )
}

export default WorksAnswer;