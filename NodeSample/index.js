import Redis from 'ioredis';

const serve = new Redis();

serve.set('name','Sheldon');
serve.get('name',(err,res)=>{
    console.log(res);
})