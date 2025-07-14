import './Background.css'
import KoenigseggFamily from '../../Assets/KoenigseggFamily.mp4'
import gemera1 from '../../Assets/gemera1.png'
import Jesko from '../../Assets/Jesko.jpg'
import CC850 from '../../Assets/CC850.jpg'


const Background = ({playStatus,heroCount}) => {

    if (playStatus) {
         return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={KoenigseggFamily} type='video/mp4' />
            </video>
         )
    }
    else if(heroCount===0)
    {
        return <img src={Jesko} className='background fade-in' alt=""/>
    }
    else if(heroCount===1)
    {
        return <img src={CC850} className='background fade-in' alt=""/>
    }
    else if(heroCount===2)
    {
        return <img src={gemera1} className='background fade-in' alt=""/>
    }

    }
 

export default Background