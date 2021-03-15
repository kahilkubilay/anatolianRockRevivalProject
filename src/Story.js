import React from 'react';
import { TrackList } from './TrackList';
import { useLocation } from 'react-router-dom'

const Story = () => {
    const keyState = ((useLocation() || {}).state || {}).key || 0;
    const getStory = TrackList[keyState];
    const story = TrackList[keyState];
    const storyMaterials = Object.keys(story.artist).map((part) => {
        let imageSource = '../icons/' + part + '.png';

        return <li className={part}>
            <img src={imageSource} alt='#'/>
                {story.artist[part]}
            </li>
    });

    return (
        <div className='content-container'>
            <img src={getStory.image} alt={getStory.title} className='poster'/>
            <p className='content-info'>
                <h2 className='content-header'>{getStory.title}</h2>
                {getStory.info}
                <ul className='artistList'>
                    {storyMaterials}
                </ul>
                <p className='anatolianInfo'>
                    <a href='https://www.youtube.com/c/AnatolianRockRevivalProject/featured' target='_blank' 
                        rel='noreferrer'>
                        Anatolian Rock Revival Project
                    </a> 
                    &nbsp;projesinin amacı Türkiye'nin Rock tarihinden (1964-1980) pek bilinmeyen eserleri gün ışığına 
                    çıkarmak; herkesin duymasını, öğrenmesini sağlamaktır.
                </p>
            </p>
        </div>
    );
}

export default Story;
