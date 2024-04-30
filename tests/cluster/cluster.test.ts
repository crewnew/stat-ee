import ClusterRepository from '../../src/cluster/cluster_repository'
describe('Cluster', () => {
    test('findAll', () => {
        const cluster = new ClusterRepository()
        const result = cluster.getClusters()
        expect(result).toBeDefined()
        expect(result.length).toBeGreaterThan(0)
    })

    test('findByName', () => {
        const cluster = new ClusterRepository()
        const clusterName = 'k4_1'
        const result = cluster.findByName(clusterName)
        expect(result).toBeDefined()
    })
})