const { Socket } = require('dgram');
const http = require('http');
// server.on('connection', (Socket =>{
//     console.log('yangi boglanish')
// }))
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Asosiy sahifa')
        res.end(); 
    }
    if(req.url === '/api/books'){
        res.write(JSON.stringify(['Books1', 'Books2','Books3']))
        res.end();
    }
});
server.listen(3000);
console.log(`${server.address().port} 3000 port tinglash boshlandi`)