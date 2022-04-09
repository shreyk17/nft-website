import './index.css'
import assets from './assets'
import { Download , Features , SectionWrapper } from './components/index'

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
    </>
  );
}

export default App;
