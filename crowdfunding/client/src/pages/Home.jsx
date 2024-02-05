import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  //getCampaigns가 async니까 fetchCampaigns안에 await를 써줘야한다.
  //await can only be used in async function
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <DisplayCampaigns
        title='All Campaigns'
        isLoading={isLoading}
        campaigns={campaigns}
      >
      </DisplayCampaigns>
    </div>
  )
}

export default Home
