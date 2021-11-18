import React, { useEffect } from 'react'
import './Sidebar.css'
import SidebarContact from './SideBarContact'
import { fetchRelations } from '../.././base/fetchData'
import { useAppContext } from '../../base/context'

const Sidebar = () => {
  const [{ user, relations }, dispatch] = useAppContext()
  useEffect(() => {
    fetchRelations(user, dispatch)
  }, [])
  console.log(relations)
  return (
    <div className='relations'>
      {relations?.map((relation, index) => (
        <SidebarContact
          sender={relation}
          key={index}
          uid={relation?.uid}
          name={relation?.first_name}
          message='hello there!!'
          timestamp='2:56'
        />
      ))}
    </div>
    // <div className="relations">
    //   {relations?.map((relation, index) => (
    //     <SidebarContact
    //       key={index}
    //       name={relation?.first_name}
    //       message="hello there!!"
    //       timeStamp="2:56"
    //     />
    //   ))}
    // </div>
  )
}

export default Sidebar
