import React from 'react'
import './StoryReel.css';
import Story from '../Story/Story';
import profileRam from '../../images/ramboda.JPG';
import profileVirat from '../../images/virat.jpg';
import profileDhoni from '../../images/dhoni.jpg';
import profileWatson from '../../images/watson.jpg';
import profileButtler from '../../images/buttler.jpg';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                title="Ram Boda"
                profileSrc={profileRam}
                img="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
            />
            <Story
                title="Virat Kohli"
                profileSrc={profileVirat}
                img="https://marketplace.canva.com/EAD2-sy3snI/2/0/800w/canva-tropical-happiness-zoom-virtual-background-FYxh-ppjKg0.jpg"
            />
            <Story
                title="MS Dhoni"
                profileSrc={profileDhoni}
                img="https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg"
            />
            <Story
                title="Josh Buttler"
                profileSrc={profileButtler}
                img="https://cdn.pixabay.com/photo/2017/05/11/08/37/universe-2303321_960_720.jpg"
            />
            <Story
                title="Shane Watson"
                profileSrc={profileWatson}
                img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
        </div>
    )
}

export default StoryReel
