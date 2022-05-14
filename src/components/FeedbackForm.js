import Card from "./Card/Card";
import {useState} from 'react'
import Button from "./Card/Button";
import RatingSelect from "./RatingSelect";



const FeedbackForm = ({handleAdd}) => {


// 💡You cannot submit with a button until its 10 characters

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            // there is no point in display if there is no TEXT
            setMessage(null)
            // if the text is not equal to nothing, so if something in TEXT and is less than 10 character we are going any white space with the trim method
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null) 
            setBtnDisabled(false)
                 }           
        setText(e.target.value)
    }
 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                // 💡This is the value of the state
                text: text,
                rating: rating,
            }

            handleAdd(newFeedback)

            setText('');
        }
    }  


    return (
        <Card>

            <form onSubmit ={handleSubmit}>
                <h2>How wold you rate our services?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input type="text" placeholder="write a review" onChange={handleTextChange} value={text}></input>

                    <Button type="submit" version='secondary' isDisable={btnDisabled} >Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
        
            </form>
            
            
            
             </Card>

    )
}

export default FeedbackForm;
