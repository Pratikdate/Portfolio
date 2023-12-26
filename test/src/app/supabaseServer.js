
//SUPABASE
import {supabase} from './supabaseClient'
import Input from 'postcss/lib/input'

export async function SelectData(){
    
let { data: Profile, error } = await supabase
.from('Profile')
.select('*')
return(
    <>
    {Profile.map((profile)=>(
        <li>{profile.name}</li>
    ))}
    </>
)
        

}








export async function POST(props){
    
    
    const { data, error } = await supabase
    .from('Profile')
    .insert([
    {  name:props.Name, mail:props.Email ,message:props.Message},
    ])
    
        
   
        
            
    
    }
    