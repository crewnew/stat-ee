"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tf = __importStar(require("@tensorflow/tfjs"));
const clusters_1 = __importDefault(require("./cluster/clusters"));
class Analyzer {
    tensor(company) {
        return __awaiter(this, void 0, void 0, function* () {
            const clusters = new clusters_1.default();
            const clusterName = company.Klaster;
            let companyCluster = clusters.findByName(clusterName);
            if (!companyCluster) {
                throw new Error('Cluster not found');
            }
            let companyClusterData = companyCluster.withCompanyData(company);
            let values = Object.values(companyClusterData).filter((value) => value !== clusterName);
            return tf.tensor2d(values, [1, 64]);
        });
    }
    // Note: LoadLayersModel is only loading the model from a url, not from a local file
    loadModel(cluster, model) {
        return __awaiter(this, void 0, void 0, function* () {
            let port = process.env.PORT || 3000;
            let domain = process.env.DOMAIN || 'localhost';
            let protocol = process.env.PROTOCOL || 'http';
            let path = `${protocol}://${domain}:${port}/static/`;
            // return tf.loadLayersModel(root + 'models/' + model + '_' + cluster + '.h5');
            return tf.loadLayersModel(path + 'efektiivsus_k4_1/model.json');
        });
    }
    predict(companyData, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const tensor = yield this.tensor(companyData);
            const loadedModel = yield this.loadModel(companyData.Klaster, model);
            return loadedModel.predict(tensor);
        });
    }
    getClusterFields(cluster) {
        switch (cluster) {
            case 'k4_1':
                return [];
            default:
                break;
        }
    }
    getCompanyFields(data) {
        return [
            data.Kaibevarad,
            data.Raha,
            data.Lyhiajalised_nouded,
            data.Lyhiajalised_finantsinvesteeringud,
            data.Varud,
            data.Pohivarad,
            data.Pikaajalised_nouded,
            data.Pikaajalised_finantsinvesteeringud,
            data.Kinnisvarainvesteeringud,
            data.Materiaalne_pohivara,
            data.Immateriaalne_pohivara,
            data.Varad_kokku,
            data.Lyhiajalised_kohustused,
            data.Lyhiajalised_volad,
            data.Lyhiajalised_laenud,
            data.Pikaajalised_kohustused,
            data.Pikaajalised_volad,
            data.Pikaajalised_laenud,
            data.Kohustused_kokku,
            data.Omakapital,
            data.Kohustused_Omakapital_kokku,
            data.Myygitulu,
            // t != k
            data.Muud_aritulud,
            data.Muud_arikulud,
            data.Toojoukulud,
            data.Arikasum,
            data.Intressikulud,
            data.Aruandeaasta_kasum,
            data.ds_Kaibevarad,
            data.ds_Raha,
            data.ds_Lyhiajalised_nouded,
            data.ds_Lyhiajalised_finantsinvesteeringud,
            data.ds_Varud,
            data.ds_Pohivarad,
            data.ds_Pikaajalised_nouded,
            data.ds_Pikaajalised_finantsinvesteeringud,
            data.ds_Kinnisvarainvesteeringud,
            data.ds_Materiaalne_pohivara,
            data.ds_Immateriaalne_pohivara,
            data.ds_Varad_kokku,
            data.ds_Lyhiajalised_kohustused,
            data.ds_Lyhiajalised_volad,
            data.ds_Lyhiajalised_laenud,
            data.ds_Pikaajalised_kohustused,
            data.ds_Pikaajalised_volad,
            data.ds_Pikaajalised_laenud,
            data.ds_Kohustused_kokku,
            data.ds_Omakapital,
            data.ds_Kohustused_Omakapital_kokku,
            data.ds_Myygitulu,
            data.ds_Muud_aritulud,
            data.ds_Muud_arikulud,
            data.ds_Toojoukulud,
            data.ds_Arikasum,
            data.ds_Intressikulud,
            data.ds_Aruandeaasta_kasum,
            data.SKP_jooksevhindades,
            data.SKP_nominaalkasv,
            data.SKP_pysivhindades,
            data.SKP_reaalkasv,
            data.Tarbijahinnaindeks,
            data.Keskmine_kuupalk,
            data.Palgakasv,
            data.Tooviljakuse_kasv,
        ];
    }
}
exports.default = Analyzer;
