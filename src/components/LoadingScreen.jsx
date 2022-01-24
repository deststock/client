import loading from '../static/ZESTYLOGO.mp4'

export default function LoadingScreen() {

    return (
        <video src={loading} autoPlay="true" className='loadingScreen'></video>
    )
}
