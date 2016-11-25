/**
 * StationsController
 *
 * @description :: Server-side logic for managing stations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	loadstations: function(req, res) {
        res.view();
    },
    
	liststations: function(req, res, next) {
		Station.find(function foundStations(err, stations) {
			if (err) return next(err);
			res.view({
				stations: stations
			})
		});
	}, 
	
	upload: function(req, res) {
	    if (req.method === 'GET')
	        return res.json({ 'status': 'GET not allowed' });
	    //	Call to /upload via GET is error
	    
	    // First we clear the DB to make sure we don't have any dublicates
	    Station.destroy({}).exec(function (err){
	    	if (err) {
	    		return res.negotiate(err);
	    	};
	    	console.log("Destroy");
	    });
	    
	    // Then the upload function itself, including DB create loop
	    var uploadFile = req.file('uploadFile');
	    var files;
	    //console.log(uploadFile);
	
	    uploadFile.upload(function onUploadComplete(err, files) {
	        //	Files will be uploaded to .tmp/uploads
	
	        if (err) return res.serverError(err);
	        //	IF ERROR Return and send 500 error with error

	        // console.log(files[0].fd);
	        res.json({ status: 200, file: files });
	        
	        var fs = require('fs');
			var readline = require('readline');
			var filename = files[0].fd;
			var array = [];
			
			readline.createInterface({
			    input: fs.createReadStream(filename),
			    terminal: false
			}).on('line', function(line) {
			    array = line.split(';');
			    
			    Station.create({
					type:array[0],
					stationName:array[1],
					stationProfile:array[2],
					typicalDemoDuration:array[3],
					demonstrator:array[4],
					suggestedDemoLength:array[5]}).exec(function (err, station){
	        		if (err) { return res.serverError(err); }
	        		return res.ok();
	    		});
			});
	    });
	}
};
