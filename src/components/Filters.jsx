import {useDispatch, useSelector} from "react-redux";
import {selectActiveFilter} from "../store2/filters/filter-selectors";
import {setFilter} from "../store2/filters/filters-actions";
export const Filters = () =>{
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter)

    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</button>
            <button onClick={() => dispatch(setFilter('active'))} style={{color: activeFilter === 'active' ? 'red' : 'black'}}>active</button>
            <button onClick={() => dispatch(setFilter('completed'))} style={{color: activeFilter === 'completed' ? 'red' : 'black'}}>completed</button>
        </div>
    )
}