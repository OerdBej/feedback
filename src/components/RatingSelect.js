import {useState} from 'react'

const RatingSelect = ({select}) =>{

    const [selected, setSelected] = useState(3);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(e.currentTarget.value);

    }


    return ( 

        <ul className='rating'>
            <li>
                <input
                type='radio'
                id='num1'
                name='rating'
                onChange={handleChange}
                checked={selected === 1} />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input
                type='radio'
                id='num2'
                name='rating'
                onChange={handleChange}
                checked={selected === 2} />
                <label htmlFor='num2'>1</label>
            </li>
            <li>
                <input
                type='radio'
                id='num3'
                name='rating'
                onChange={handleChange}
                checked={selected === 3} />
                <label htmlFor='num1'>3</label>
            </li>
            <li>
                <input
                type='radio'
                id='num4'
                name='rating'
                onChange={handleChange}
                checked={selected === 4} />
                <label htmlFor='num1'>4</label>
            </li>
            <li>
                <input
                type='radio'
                id='num5'
                name='rating'
                onChange={handleChange}
                checked={selected === 5} />
                <label htmlFor='num1'>5</label>
            </li>
            <li>
                <input
                type='radio'
                id='num6'
                name='rating'
                onChange={handleChange}
                checked={selected === 6} />
                <label htmlFor='num1'>6</label>
            </li>
            <li>
                <input
                type='radio'
                id='num7'
                name='rating'
                onChange={handleChange}
                checked={selected === 7} />
                <label htmlFor='num1'>7</label>
            </li>
            <li>
                <input
                type='radio'
                id='num8'
                name='rating'
                onChange={handleChange}
                checked={selected === 8} />
                <label htmlFor='num1'>8</label>
            </li>
            <li>
                <input
                type='radio'
                id='num9'
                name='rating'
                onChange={handleChange}
                checked={selected === 9} />
                <label htmlFor='num1'>9</label>
            </li>
            <li>
                <input
                type='radio'
                id='num10'
                name='rating'
                onChange={handleChange}
                checked={selected === 10} />
                <label htmlFor='num1'>10</label>
            </li>
        </ul>
    );
}


export default RatingSelect