import { useState } from 'react';
import valid from '../validate/validate';

function Converter() {
const [color, setColor] = useState({
    rgb: '',   
})

    const onCheck = (e) => {
        e.preventDefault();
    }

    const onValide = (e) => {
        if (e.target.value.length === 7) {
            setColor(prev => ({rgb: valid(e.target.value) || 'Ошибка!'}))    
        } else {
            setColor(prev => ({rgb: ''}))
        }
    }

    return (
        <div className="container" style={{backgroundColor: color.rgb}}>
            <form className="form" onSubmit={onCheck}>
                <input className="input field" type="text" name="hex" onChange={onValide}></input>
                <output className="output field" name="rgb">{color.rgb}</output>
            </form>    
        </div>
    )
}

export default Converter