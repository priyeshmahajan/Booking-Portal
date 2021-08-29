import React,{useState,useEffect} from 'react'


const Servent = () => {
    const[users,setusers]=useState([])
    const getuser=async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
setusers(await response.json());

    }
    useEffect(()=>{
       getuser(); 
    },[])
     
     
    return (
        <>
        <h2>list of github users</h2>
        <div className="container-fluid mt-5">
        <div className="row text-center">
        {
            users.map((current)=>{
                return (
                    <>
                    <div className="col-10 col-md-4 mt-5">
        <div class="card p-2">
            <div class="d-flex align-items-center">
                <div class="image"><img src={current.thumbnailUrl} class="rounded" width="155"></img></div>
                <div class="ml-3 w-100">
                    <h4 class="mb-0 mt-0 textLeft">thapa</h4><span className="textLeft">{}</span>
                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-felx flex-column"><span class="articles">articles</span><span class="number1">38</span></div>
                        <div class="d-felx flex-column"><span class="articles">follower</span><span class="number2">980</span></div>
                        <div class="d-felx flex-column"><span class="articles">rating</span><span class="number3">8.9</span></div>
                        <div class="d-felx flex-column"><span class="articles">rating</span><span class="number3">8.9</span></div>
                    </div>
                </div>
            </div>
        </div>

        
</div>

                    </>
                )

            })
        }
       
</div>
        </div>

            
        </>
    )
}

export default Servent
