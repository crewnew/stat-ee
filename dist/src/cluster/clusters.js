"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_clusters_1 = __importDefault(require("./json_clusters"));
const cluster_entity_1 = __importDefault(require("./cluster_entity"));
class Clusters {
    findByName(clusterName) {
        return this.getClusters().find(cluster => cluster.klaster === clusterName);
    }
    getClusters() {
        let clusters = [];
        for (let cluster in json_clusters_1.default) {
            clusters.push(cluster_entity_1.default.deserialize(json_clusters_1.default[cluster]));
        }
        return clusters;
    }
}
exports.default = Clusters;
