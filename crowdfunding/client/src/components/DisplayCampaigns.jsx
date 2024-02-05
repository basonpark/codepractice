import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FundCard } from './'
import { loader } from '../assets'

const DisplayCampaigns = ({ title, isLoading, campaigns}) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }
 
    return (
    <div>
      <h1 className='font-epilogue font-semibold text-[18px]
      text-white text-left'>{title} ({campaigns.length})</h1>

      <div className='flex flex-wrap mt-[20px] gap-[26px]'>
        {isLoading && (
            <img src={loader} alt='loader' className='w-[100px] h-[100px] object-cover'/>
        )}
        
        {!isLoading && campaigns.length === 0 && (
            <p className='font-epilogue font-semibold text-[#818183] text-[14px] leading-[30px]'>No Campaigns Found</p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map
            ((campaign, i) => <FundCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate()}
            />)}
      </div>
    </div>
  )
}

export default DisplayCampaigns
