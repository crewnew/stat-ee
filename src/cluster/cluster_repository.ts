

import meaData from './mea_static_data'
import sdsData from './sds_static_data'
import ClusterEntity from './cluster_entity'

export default class ClusterRepository {

    findMeaByCluster(clusterName: string): ClusterEntity | undefined {
        for (let cluster in meaData) {
            if (meaData[cluster].klaster === clusterName) {
                return ClusterEntity.deserialize(meaData[cluster])
            }
        }
        return undefined
    }

    findSdsByCluster(clusterName: string): ClusterEntity | undefined {
        for (let cluster in sdsData) {
            if (meaData[cluster].klaster === clusterName) {
                return ClusterEntity.deserialize(meaData[cluster])
            }
        }
        return undefined
    }
}