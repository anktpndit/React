import Button from './Button'

const Header = (props) => {

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={(props.togglestate) ? 'red' : 'green' } text={ props.togglestate ? 'Close' : 'Add'} onClick={props.onAdd} />
        </header>
    )
}

export default Header