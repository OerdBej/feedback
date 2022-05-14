import Card from "./Card/Card";
import {useState} from 'react'



const FeedbackForm = () => {


    // we usually catch the user type in of the form into a state to store it in order that whatever we type in we catch into the state 💡


    const [text, setState] = useState('');

    const handleTextChange = (e) => {
        // console.log(e.target.value);
        setState(e.target.value);

    }



    return (
        <Card>

            <form>
                <h2>How wold you rate our services?</h2>
                {/* here the rating select component */}
                <div className="input-group">
                    <input type="text" placeholder="write a review" onChange={handleTextChange} value={text}></input>
                    <button type="submit">Send</button>
                </div>
            </form>
            
            
            
             </Card>

    )
}

export default FeedbackForm;


