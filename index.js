const express = require('express')
const bodyParser = require('body-parser');
var cmd=require('node-cmd');
const app = express();

app.get('/sapAllPurchaseOrders', (request, response) => {
	const syncClone=cmd.runSync("curl -k -L -s --compressed GET \
	'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem?%24top=50&%24inlinecount=allpages' \
	-H 'accept: application/json' \
	-H 'apikey: owAxYyE1uDOZa9LffLskasAYSFOMKEXJ' \
	-H 'cache-control: no-cache' \
	-H 'dataserviceversion: 2.0' \
	-H 'postman-token: 8a7a8b16-143d-cea8-7e11-f5fe4f7ed640'");
	  response.json(syncClone.data)
});


app.listen(process.env.PORT || 3000, () => console.log(`your app is up`));

