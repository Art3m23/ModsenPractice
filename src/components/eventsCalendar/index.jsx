
import { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
const config = {
  "clientId": "873908410228-2eiurj3dn7askps354etbvtulnpl96nb.apps.googleusercontent.com",
  "apiKey": "AIzaSyCQCeLUnmutLbsIQLyOVM9xWDQl2V14WcY",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config);

export const TestDemo = ({ token }) => {
  
  const [event, setEvent] = useState(JSON.parse(localStorage.getItem('event')));
  
  useEffect(() => {
    if(!event){
      apiCalendar.listEvents({
        timeMin: new Date().toISOString(),
        showDeleted: true,
        maxResults: 10,
        orderBy: 'updated'
      }).then((result) => {
        localStorage.setItem('event',JSON.stringify(result));
        setEvent(result);
      });
    }
  })

  return (
    <div>

    </div>
  );
}