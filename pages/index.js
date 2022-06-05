import VideoContent from './video.js'
import HomeLayout from '../components/homelayout'

export default function Home() {
  return (
    <HomeLayout>
      {VideoContent()}
    </HomeLayout>
  )
}


