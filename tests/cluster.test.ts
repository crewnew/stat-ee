import Clusters from '../src/cluster/clusters'
describe('Cluster', () => {
    test('findAll', () => {
        const cluster = new Clusters()
        const result = cluster.getClusters()
        expect(result).toBeDefined()
    })

    test('findByName', () => {
        const cluster = new Clusters()
        const clusterName = 'k4_1'
        const result = cluster.findByName(clusterName)
        expect(result).toBeDefined()
    })
})