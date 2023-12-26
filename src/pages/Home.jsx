import React from 'react';
import Must from '../components/must';
import Video from '../components/video';
import Books from '../components/books';
import Disc from '../components/discover';
import Toplec from '../components/toplecturer';
import Community from '../components/comm';
import Learn from '../components/learn';
import Header from '../components/header';

const HomePage = () => {
    return (
        <>
            <Header />
            <br />
            <a
                href="YOUR_LINK_URL_HERE"
                style={{
                    textDecoration: 'none',
                    marginLeft: '7%',
                    fontSize: '24px', 
                    color: 'Black', 
                }}
                onMouseEnter={(e) => e.target.style.color = 'Red'}
                onMouseLeave={(e) => e.target.style.color = 'Black'}
            >
                Learn Forex with Dr. Lambeau &gt;
            </a>
            <div className='learndivs'>
                <Learn
                    color='#FF0000'
                    header="Videos"
                    title="Best Forex Video Course-100 lessons from novice to master trader"
                    text="1M Completed"
                />
                <Learn
                    color='#FDDA0D'
                    header="E-books"
                    title="Best Forex E-book Collection-34 series from novice to master trader"
                    text="1.1M Completed"
                />
            </div><br /><br />
            <Must/><br /><br />
            {/* <Video/><br /><br /> */}
            <Books/>
            <Community/>
            <Disc />
            <Toplec/>
        </>
    )
}

export default HomePage;