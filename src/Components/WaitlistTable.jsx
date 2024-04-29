import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WaitlistTable = () => {
    const [waitlistData,setWaitListData] = useState([]);
    const fetchData = async() => {
        const response = await axios.get("http://localhost:4000/getWaitlist");
        const data = response.data.data;
        setWaitListData(data);
    }
    useEffect(() => {
        fetchData();
    },[]);
    return (
        <table className="waitlist-table">
          <caption style={{color : "#FFFFFF", fontFamily:"urbanist", fontWeight:700,fontSize : "24px", lineHeight : "36px", background:"#E75553",borderTopLeftRadius : "4px", borderTopRightRadius : "4px", padding:"20px"}}>Waitlist Database</caption>
          <thead >
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {waitlistData && waitlistData.length > 0 ?  waitlistData?.map((item,index) => (
              <tr key={(index + 1)}>
                <td>{(index + 1)}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.message}</td>
              </tr>
            )) : ''}
          </tbody>
        </table>
      );
    }

export default WaitlistTable