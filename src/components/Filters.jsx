
import {Link, useParams} from "react-router-dom";

export const Filters = () =>{
  const {filter: activeFilter= 'all'} = useParams()

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '0.75rem'}}>
            <Link to='/all' style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</Link>
            <Link to='/active'  style={{color: activeFilter === 'active' ? 'red' : 'black'}}>active</Link>
            <Link to='/completed'  style={{color: activeFilter === 'completed' ? 'red' : 'black'}}>completed</Link>
        </div>
    )
}