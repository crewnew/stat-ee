const tf = require('@tensorflow/tfjs');
const tfn = require("@tensorflow/tfjs-node");
//Defineerin sisendid, tegelikult korjatakse andmebaasist
var tulem2 = [];
var sisse1 = 0.2;
var sisse2 = 0.4;
var sisse3 = 0.3;
var sisse4 = 0.2;
var sisse5 = 0.4;
var sisse6 = 0.5;
var sisse7 = 0.8;
var sisse8 = 0.9;
var sisse9 = 0.3;
var sisse10 = 0.5;
var sisse11 = 0.5;
var sisse12 = 0.4;
var sisse13 = 0.5;
var sisse14 = 0.5;
var sisse15 = 0.4;
var sisse16 = 0.8;
var sisse17 = 0.5;
var sisse18 = 0.3;
var sisse19 = 0.6;
var sisse20 = 0.5;
var sisse21 = 0.8;
var sisse22 = 0.66;
var sisse23 = 0.76;
var sisse24 = 0.54;
var sisse25 = 0.33;
var sisse26 = 0.4;
var sisse27 = 0.66;
var sisse28 = 0.3;
var sisse29 = 0.2;
var sisse30 = 0.3;
var sisse31 = 0.43;
var sisse32 = 0.23;
var sisse33 = 0.44;
var sisse34 = 0.65;
var sisse35 = 0.34;
var sisse36 = 0.2;
var sisse37 = 0.1;
var sisse38 = 0.65;
var sisse39 = 0.65;
var sisse40 = 0.34;
var sisse41 = 0.23;
var sisse42 = 0.45;
var sisse43 = 0.76;
var sisse44 = 0.52;
var sisse45 = 0.3;
var sisse46 = 0.21;
var sisse47 = 0.32;
var sisse48 = 0.54;
var sisse49 = 0.87;
var sisse50 = 0.33;
var sisse51 = 0.54;
var sisse52 = 0.34;
var sisse53 = 0.43;
var sisse54 = 0.22;
var sisse55 = 0.76;
var sisse56 = 0.66;
var sisse57 = 0.33;
var sisse58 = 0.22;
var sisse59 = 0.56;
var sisse60 = 0.77;
var sisse61 = 0.89;
var sisse62 = 0.44;
var sisse63 = 0.34;
var sisse64 = 0.33;
async function uusnaitamine() {
	// async on vajalik, muidu ei jõua mudeleid sisse lugeda
	// toon näitajad tensorisse
	const testVal = await tf.tensor2d([sisse1, sisse2, sisse3, sisse4, sisse5, sisse6, sisse7, sisse8, sisse9, sisse10, sisse11,
		sisse12, sisse13, sisse14, sisse15, sisse16, sisse17, sisse18, sisse19, sisse20, sisse21, sisse22, sisse23, sisse24, sisse25,
		sisse26, sisse27, sisse28, sisse29, sisse30, sisse31, sisse32, sisse33, sisse34, sisse35, sisse36, sisse37, sisse38, sisse39,
		sisse40, sisse41, sisse42, sisse43, sisse44, sisse45, sisse46, sisse47, sisse48, sisse49, sisse50, sisse51, sisse52, sisse53,
		sisse54, sisse55, sisse56, sisse57, sisse58, sisse59, sisse60, sisse61, sisse62, sisse63, sisse64], [1, 64]);
	//loen mudeli sisse
	const loadedModel3 = await tf.loadLayersModel('file://models/MAA64/MAA64_1_1_likviidsus_k4_1.json');
	//mudel annab hinnangu
	const prediction = await loadedModel3.predict(testVal);
	//teen predictioni loetavaks ja kuvan
	const values = prediction.dataSync();
	const arr = Array.from(values);
	prednormal = arr[0];
	const puitmodel3predict = (prednormal).toFixed(2);
	console.log("Prediction", puitmodel3predict);
}
uusnaitamine()