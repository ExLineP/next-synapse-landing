import Image from 'next/image'
import LogoComponent from './chat/logoComponent'
import SidebarLayout from './chat/SidebarLayout'
import MainComponent from './chat/MainComponent'
export default function Home() {
  return (
    <div className='bg-[#201F1F]'>
    <SidebarLayout>
      <MainComponent/>
    </SidebarLayout>
    </div>
  )
}
