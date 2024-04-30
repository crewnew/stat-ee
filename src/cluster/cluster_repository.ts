

import jsonClusters from './cluster_static_data'
import ClusterEntity from './cluster_entity'

export default class ClusterRepository {

    findByName(clusterName: string): ClusterEntity | undefined {
        for (let cluster in jsonClusters) {
            if (jsonClusters[cluster].klaster === clusterName) {
                return ClusterEntity.deserialize(jsonClusters[cluster])
            }
        }
        return undefined
    }

    getClusters(): Array<ClusterEntity> {
        let clusters = []
        for (let cluster in jsonClusters) {
            clusters.push(ClusterEntity.deserialize(jsonClusters[cluster]))
        }
        return clusters
    }

}