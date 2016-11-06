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
	
	    var uploadFile = req.file('uploadFile');
	    //console.log(uploadFile);
	
	    uploadFile.upload(function onUploadComplete(err, files) {
	        //	Files will be uploaded to .tmp/uploads
	
	        if (err) return res.serverError(err);
	        //	IF ERROR Return and send 500 error with error
	
	        //console.log(files);
	        res.json({ status: 200, file: files });
	    });
	}
};

