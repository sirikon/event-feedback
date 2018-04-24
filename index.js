const cluster = require('cluster');
const debug = process.env.NODE_ENV !== 'production';

if (cluster.isMaster) {
    var numWorkers = debug ? 1 : require('os').cpus().length;
    console.log(`Initializing with ${numWorkers} workers.`)

    for(var i = 0; i < numWorkers; i++) {
		cluster.fork();
    }

    cluster.on('online', function(worker) {
		debug && console.log('Worker ' + worker.process.pid + ' is online');
	});

	cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        if (!debug) {
		    cluster.fork();
        }
    });
} else {
    const host = require('./src/host');
    host();
}
