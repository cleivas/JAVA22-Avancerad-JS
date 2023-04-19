import Welcome from './Welcome';
import ProfilePic from './ProfilePic';
import Likes from './Likes';

export default function HeroCard({hero}){
    console.log(hero)
    return(
        <div className='hero-card'>
            <ProfilePic imgSrc={hero.imgSrc}/>
            <Welcome name={hero.name} age={hero.age}/>
            <Likes likes={hero.likes}/>
        </div>
    )
}