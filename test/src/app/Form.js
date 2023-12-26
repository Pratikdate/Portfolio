import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {POST} from './supabaseServer';

import {  Input } from '@mui/material';



export default function MessFORM(){
    const [Form, SetForm]=useState(
        {
            Name:'',
            Email:'',
            Message:''
        }

    )

    const HandalChange=(e)=>{
        SetForm({...Form,[e.target.name]:e.target.value})
    }

    const HandalSubmit=(e)=>{
        //e.preventDefault()
        POST(Form)
        console.log('submit button clicked', Form)
        
    }

    return(
        <>
        <form className='flex flex-col h-60 w-full items-end justify-between lg:mr-60 md:mr-20 sm:mr-4' onSubmit={HandalSubmit}>
            <Input autoFocus type={'text'} placeholder="Enter name" className='lg:w-80 ' name={'Name'} onChange={HandalChange} value={Form.Name}/>
            <Input autoFocus type={'text'} placeholder="Enter email"  name={'Email'} className='lg:w-80' onChange={HandalChange} value={Form.Email} />
            <Input autoFocus type={'text'} rows={'4'} margin='dense'  name={'Message'} placeholder="Enter message" className='lg:w-80 ' onChange={HandalChange} value={Form.Message} />
            <Button variant="contained" className='flex w-30' size='small'type='submit' ><p className=' text-slate-800 hover:text-white pe-1 pt-1'><TelegramIcon className='mr-1' />  Send</p></Button>
        </form >

        
        </>
    )
}
