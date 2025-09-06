document.getElementById('send').addEventListener('click',
    async function(e){
            e.preventDefault();
           let i=document.querySelector("#input_user");
           let message=i.value.trim();
           if(!message) return;
           i.value="";
           document.getElementById('messages').innerHTML+=`<p style="color:white; text-align:right;"> <b> 🧒:</b> ${message}</p>`;
          let  res=await fetch('/chat',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({message})
           })
         let data=await res.json();
         // output_message
         document.getElementById('messages').innerHTML+=`<p style="color:white; text-align:left;"> <b> 🤖:</b> ${data.replay}</p>`;
 })