


const http = require("http");
const cluster = require("cluster");
const os = require("os");


// if (cluster.isMaster) {
//     console.log("master is processing !!!");
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
//     // get no of cup cores 
//     console.log( "cpu length : ",os.cpus().length); 
// }

// else {
//     http.createServer((req, res) => {
//         setTimeout(() => {
//             res.write(" req handled successfully.......");
//             res.end();
//         }, 2000);
//     }).listen(3000);
//     console.log("server run on 3000 port ")
// }





if (cluster.isMaster) {
    console.log("master is processing !!!");
    // get no of cup cores 
    const numCPUs = os.cpus().length;

    console.log("cpu length : ", numCPUs);
    console.log(`mater process PID: ${process.pid}`);
    console.log(`Forking ${numCPUs} workers ...`);

    // Fork workers.. 
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // listen for worker exit events. 
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died. Forking a new worker ... `);
        cluster.fork();
    });

}


else {
    // worker process handle incomig http requests
    http.createServer((req, res) => {
        res.writeHead(200); 
        res.end(`handled by worker process pid : ${process.pid}\n `); 
    }).listen(3000);
    console.log(`worker process PID ${process.pid} is running`)
}






