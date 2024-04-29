"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clusters_1 = __importDefault(require("../src/cluster/clusters"));
describe('Cluster', () => {
    test('findAll', () => {
        const cluster = new clusters_1.default();
        const result = cluster.getClusters();
        expect(result).toBeDefined();
    });
    test('findByName', () => {
        const cluster = new clusters_1.default();
        const clusterName = 'k4_1';
        const result = cluster.findByName(clusterName);
        expect(result).toBeDefined();
    });
});
