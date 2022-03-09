import { useContext } from 'react'
import { ContextCounter } from '../context/GeneralContext'
import PluseOne from './PlusOne'
function Counter() {
    const context = useContext(ContextCounter)
    console.log(context)
    return (<><h1>{context.counter}<PluseOne /></h1></>)
}
export default Counter