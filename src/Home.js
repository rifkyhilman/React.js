import React  from 'react'
import './css/home.css'
import Imageslider from './Imageslider'

class Home extends React.Component {
    render() {
        return (
        <div>
            <Imageslider />
            <br></br>
            <div className="kotak">
                <p className="tetap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam unde harum, autem quo nesciunt aperiam tenetur cupiditate dolorum neque, non illum molestiae hic inventore sint nostrum blanditiis magnam aspernatur praesentium.</p>
            </div>
            <div className="kotak"></div>
        </div>
        )
    }
}

export default Home