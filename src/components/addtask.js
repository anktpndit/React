import { useState } from 'react'


const Addtask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day,setDate] = useState('')
    const [reminder, setCheck] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Task field is empty')
            return
        }
        if (!day) {
            alert('Date field is empty')
            return
        }

        onAdd({ text,day,reminder })
        
        setText('')
        setDate('')
        setCheck(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value) } placeholder="Enter a Task" />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type="text" value={day} onChange={(event) => setDate(event.target.value)} placeholder="Enter Day and Date" />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox"
                checked={reminder}
                value={reminder} onChange={(event) => setCheck(event.currentTarget.checked)} 
                />
            </div>
            <input type="submit" className="btn btn-block" value="submit" />
        </form> 
    )
}

export default Addtask
