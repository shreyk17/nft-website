import './index.css'
import assets from './assets'
import { Download , Features , SectionWrapper } from './components/index'
import styles from './styles/Global';

const  App = () => {
  return (
    <>
        <SectionWrapper 
			title = "Your own store of Nifty NFTs. Start selling & Growing"
			description = "Buy, Store , collect NFTs, exchange & earn crypto. Join 25+ milliomn people using ProNef marketplace."
			showBtn
			mockupImage = {assets.homeHero}
			banner = "banner"
		/>
		<SectionWrapper 
			title = "Smart user interface marketplace"
			description = "Experience a buttery UI of ProNef NFT marketplace. Smooth constant colors of a fluent UI design."
			mockupImage = {assets.homeCards}
			reverse
		/>
		<Features />
		<SectionWrapper 
			title = "Deployement"
			description = "ProNef is build using Expo which runs natively on all users devices. You can easily get your app into people's hand."
			mockupImage = {assets.feature}
			reverse
		/>
		<SectionWrapper 
			title = "Let's do creative way to showcase the store."
			description = "The app contains two screens. The first screen lists all the NFTs while the second one shows all the details of a specific NFT."
			mockupImage = {assets.mockup}
			banner = "banner02"
		/>
		<Download />
		<div className={`px-4 py-2 justify-cenetr items-center bg-primary flex-col text-center banner04`}>
			<p className={`${styles.pText} ${styles.whiteText}`}>Made by - {" "}
				<span className='bold'>Shrey Kesharwani</span>
			</p>
		</div>
    </>
  );
}

export default App;
