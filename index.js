const http = require('http');
const server = http.createServer((req, res)=>{

    const url = req.url;
   
    if(url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1> INDEX SAYFASINA HOSGELDINIZ  </h1>');

    }
    else if(url === '/HAKKIMIZDA'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2> HAKKIMIZDA SAYFAMIZA HOSGELDINIZ</h2>');

    }
    else if(url === '/ILETISIM'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>');

    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h2>404 SAYFA BULUNAMADI </h2>');

    }
    res.end();

});
const port = 5000;
server.listen(port, () =>{
    console.log(`Sunucu  PORT ${port} de başlatıldı. `);
});