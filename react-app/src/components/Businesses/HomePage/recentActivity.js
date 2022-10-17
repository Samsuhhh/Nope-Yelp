import React, { useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import './recentActivity.css'


function RecentActivity() {

    return (
        <>
            <div className='recent-act-wrapper'>
                <div className='recent-act-body'>
                    <div className='recent-act-title-wrapper'>
                        <div className='recent-act-title'>Recent Activity</div>
                    </div>
                    <div className='recent-reviews-grid'>
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                        <div className='recent-act-card' />
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <Footer />
        </>
    )
}

export default RecentActivity
