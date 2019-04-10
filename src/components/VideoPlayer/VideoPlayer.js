import React from 'react';
import VideoPlayerLayout from './VideoPlayerLayout';
import Title from './Title/Title';
import Video from './Video/Video';
import PlayPause from './PlayPause/PlayPause';
import Timer from './Timer/Timer';
import VideoControls from './VideoControls/VideoControls';
import formatTime from '../../../utilities/formatTime';
import ProgressBar from './ProgressBar/ProgressBar';
import Spinner from './Spinner/Spinner';
import Volume from './Volume/Volume';
import FullScreen from './FullScreen/FullScreen';

class VideoPlayer extends React.Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 1,
        mute: false
    }
    togglePlay = event => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({ duration: this.video.duration });
    }
    handleTimeUpdate = event => {
        this.setState({ currentTime: this.video.currentTime });
    }
    handleOnChangeProgressBar = event => {
        console.error("Me ejecuto");
    }
    handleChange = event => {
        this.video.currentTime = event.target.value;
    }
    handleSeeking = event => {
        this.setState({ loading: true });
    }
    handleSeeked = event => {
        this.setState({ loading: false });
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
        this.setState({ volume: this.video.volume });
        console.error(this.state.volume);
        if (this.state.volume <= 0.05) {
            this.setState({ mute: true });
        } else {
            this.setState({ mute: false });
        }
    }
    handleResetVolume = event => {
        if (this.state.mute) {
            this.setState({ mute: false });
            if (this.state.volume <= 0.05) {
                this.setState({ volume: 0.50 });
                this.video.volume = 0.50;
            } else
                this.video.volume = this.state.volume;
        } else {
            this.setState({ mute: true });
            this.video.volume = 0;
        }
    }
    handleFullScreenClick = event => {
        if (!isFullScreen()) {
            requestFullscreen(this.player);
        } else {
            exitFullScreen();
        }
    }
    setRef = element => {
        this.player = element;
    }
    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title} />
                <VideoControls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
                    <Timer duration={formatTime(this.state.duration)} currentTime={formatTime(this.state.currentTime)} />
                    <ProgressBar duration={this.state.duration} currentTime={this.state.currentTime} handleChange={this.handleChange} />
                    <Volume
                        value={this.state.volume}
                        mute={this.state.mute}
                        handleResetVolume={this.handleResetVolume}
                        handleVolumeChange={this.handleVolumeChange} />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    ></FullScreen>
                </VideoControls>
                <Spinner active={this.state.loading} />
                <Video
                    pause={this.state.pause}
                    autoplay={this.props.autoplay}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" />
            </VideoPlayerLayout>
        )
    }
}
export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen;

export const exitFullScreen = () => {
    try { document.exitFullscreen() } catch (e) {
        try { document.webkitExitFullscreen() } catch (e) {
            try { document.mozCancelFullscreen() } catch (e) {
                try { document.msExitFullscreen() } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}

export const requestFullscreen = (element) => {
    try { element.requestFullscreen() } catch (e) {
        try { element.webkitRequestFullscreen() } catch (e) {
            try { element.mozRequestFullscreen() } catch (e) {
                try { element.msRequestFullscreen() } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}

export default VideoPlayer;