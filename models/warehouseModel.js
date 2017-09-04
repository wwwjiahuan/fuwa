var warehouseModel = {};

//遍历warehouse表
warehouseModel.findAllwarehouse = function(callback) {
	connection.query('select * from warehouse', function (error, results, fields) {
		var resData = {
			code: 0,
			data: {}
		}
		if (error) {
			throw error;
		}else {
			resData.code = 1;
			resData.data = results;
			console.log('The first is: ', results);
			
		}
		callback(resData);
	});
}

//
warehouseModel.insertWarehouse = function(inputwarehouseid, inputfeedid, inputsurface, inputcapacity, inputstandard, inputpersonid, callback) {
	connection.query('insert into warehouse set ?',{
					warehouseid : inputwarehouseid,
					feedid : inputfeedid,
					surface : inputsurface,
					capacity : inputcapacity,
					standard : inputstandard,
					personid : inputpersonid
				},function(error, results, fields){
					var resData = {
						code: 0,
						data: {}
					}
					
					if(error) {
						console.log("insert error");
						throw error;
					}else {
						console.log(results);
						resData.code = 1;
						resData.data = results;
					}
					
					callback(resData);

				});
}
module.exports = warehouseModel;