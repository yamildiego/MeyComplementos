import React from 'react';
import './Video.css';

class Video extends React.Component {
    togglePlay() {
        if (this.props.pause) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }
    setRef = element => {
        this.video = element;
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;

        return (
            <div className="Video">
                <video
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                    ref={this.setRef} />
            </div>
        )
    }
}

export default Video;