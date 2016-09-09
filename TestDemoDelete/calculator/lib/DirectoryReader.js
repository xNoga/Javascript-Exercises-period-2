module.exports = {
    readDirectory(folder, ext, callback){
        var fs = require('fs');
        var path = require('path');
        var result = [];

        fs.readdir(folder, function (err, files) {

            if (err) return callback(err)

            files.forEach(function(file) {
                if (path.extname(file) === '.'+ext) {
                    result.push(file)
                }
            })

            callback(null, result)
        })
    }
}