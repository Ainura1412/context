import { useContext } from 'react'
import { ContextCounter } from '../context/GeneralContext'

function PluseOne() {
    const { setCounter } = useContext(ContextCounter)
    return (<button onClick={() => setCounter
        (prev => prev + 1)}>Pluse One</button>)
}
export default PluseOne