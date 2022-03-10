import React from 'react'
import FooterDesk from './Desk/FooterDesk'
import FooterMobile from './Mobile/FooterMobile'
import Foot from '../PageStaff/SousComp/Foot'

function Footer({isStaf}) {
  return (
    <div>
    {isStaf?<Foot/>:
     <>
      <FooterDesk/>
      <FooterMobile/>
      </>}
    </div>
  )
}

export default Footer
