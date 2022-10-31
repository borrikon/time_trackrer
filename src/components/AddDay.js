import moment, { min } from 'moment/moment';
import { useEffect, useState } from 'react';
import { getWorkHours } from '../helpers/getWorkTime';
import { getWorkMinutes } from '../helpers/getWorkTime';

const AddDay = () => {
    const [workDate, setWorkDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [totalTime, setTotalTime] = useState('');

    useEffect(() => {
        setWorkDate(moment().format('YYYY-MM-DD'))
    }, [])

    useEffect(()=>{
        let start = moment().set({
            'year': +workDate.slice(0, 4), 
            'month': +workDate.slice(5, 7),
            'date': +workDate.slice(8, 10),
            'hour': +startTime.slice(0, 2),
            'minute': +startTime.slice(3, 5),
        });
        let end = moment().set({
            'year': +workDate.slice(0, 4), 
            'month': +workDate.slice(5, 7),
            'date': +workDate.slice(8, 10),
            'hour': +endTime.slice(0, 2),
            'minute': +endTime.slice(3, 5),
        });
        let hours = end.diff(start, 'hours');
        let minutes =  end.diff(start, 'minutes')%60;
        setTotalTime(`
            ${hours>1 ? hours : '00'}h : 
            ${(minutes < 60 && minutes >= 0) ? minutes : '00'}min
            `);
    }, [startTime, endTime, workDate]);
    const handleChangeWorkDate = (e) => {
        setWorkDate(e.target.value)
    };
    const handleChangeStartTime = (e) => {
        setStartTime(e.target.value)
    };
    const handleChangeEndTime = (e) => {
        setEndTime(e.target.value)
    };
    const handleSubmit = () => {
        console.log(workDate, startTime, endTime, totalTime)
    }
    return (
    <form className='addTimeForm' onSubmit={(e) => e.preventDefault()}>
        <section className='addTimeForm__section'>
            <label htmlFor="workDate">Add start time:</label>
            <input id='workDate'
                type='date'
                required
                value={workDate}
                onChange={handleChangeWorkDate}
            />
        </section>
        <section className='addTimeForm__section'>
            <label htmlFor="startTime">Add start time:</label>
            <input id='startTime'
                type='time'
                required
                value={startTime}
                onChange={handleChangeStartTime}
            />
        </section>
        <section className='addTimeForm__section'>
            <label htmlFor="endTime">Add end time:</label>
            <input id='endTime'
                type='time'
                required
                value={endTime}
                onChange={handleChangeEndTime}
            />
        </section>
        <section className='addTimeForm__section'>
            <p>Current time: </p> 
            <p>{totalTime}</p>
        </section>
        <button 
            type="submit"
            onClick={handleSubmit}
        >Add work time</button>
    </form>
  )
}

export default AddDay;