import "./css/index.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ScrolbarSec=()=>{
  return(
    
    <div className=" main ">
    <div className="dropdown mt-1">
<button className="btn  dropdown-toggle mt-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown button
</button>

</div>

<div className=" scrolbar">
<Box sx={{display:"flex", maxWidth: 800,maxHeight:20,display:"inline-block",fontWeight:"bold"}}>

<Tabs

sx={{fontWeight:"bold",color:"brown"}}
variant="scrollable"
scrollButtons="auto"
aria-label="scrollable auto tabs example"
>
<Tab label="ELECTRONIC" />
<Tab label="HOME" />
<Tab label="SPORTS" />
<Tab label="BABY & TOY" />
<Tab label="BEAUTY & FRAGRANCE" />
<Tab label="WOMEN" />
<Tab label="MEN" />
<Tab label="GROCERY" />

</Tabs>
</Box>
</div>
</div>

  )
}
export default ScrolbarSec;