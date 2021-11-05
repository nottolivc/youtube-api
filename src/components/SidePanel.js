import React from 'react'
import SideBar from './SideBar'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'


const SidePanel = () => {
    return (
        <>
        <div className='side-panel'>
            <SideBar selected Icon={HomeIcon} title='Home' />
            <SideBar Icon={WhatshotIcon} title='Trending' />
            <SideBar Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SideBar Icon={VideoLibraryIcon} title='Library' />
            <SideBar Icon={HistoryIcon} title='History' />
            <SideBar Icon={OndemandVideoIcon} title='Your videos' />
            <SideBar Icon={WatchLaterIcon} title='Watch later' />
            <SideBar Icon={ThumbUpIcon} title='Likes' />
            <hr />
        </div>
        </>
    )
}

export default SidePanel;