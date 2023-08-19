var input=document.getElementById('input');
        var body=document.getElementsById('sec');
        input.addEventListener('keypress',(e)=>{
            
            if(e.key=='Enter'){
                body.style.backgroundColor='black#111827';
                addtask();
            }
            else{
                body.style.backgroundColor='black';

            }

        });
        function addtask(){
            
            
                if(input.value==""){
                    alert("invalid");
                }
                else{
            var display = document.getElementById('display');

            const task=document.createElement('div');
            task.classList.add('task');

            const text=document.createElement('div');
            text.classList.add('text');

            const ctr=document.createElement('div');
            ctr.classList.add('ctr');
            const remove=document.createElement('button');
            remove.innerHTML='REMOVE';
            const done=document.createElement('button');
            done.innerHTML='DONE';
            remove.classList.add('remove');
            done.classList.add('done');

            text.innerHTML=input.value;
            input.value='';
            ctr.appendChild(done);
            ctr.appendChild(remove);
            
            task.appendChild(text);
            task.appendChild(ctr);

            display.appendChild(task);

            done.addEventListener('click',()=>{
                text.style.backgroundColor='green';
                ctr.removeChild(done);

            });
            remove.addEventListener('click',()=>{
                display.removeChild(task)

            });     
        }
    }