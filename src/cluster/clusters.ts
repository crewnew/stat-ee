

import jsonClusters from './json_clusters'
import ClusterEntity from './cluster_entity'
import CompanyDto from 'src/company_data';

export default class Clusters {

    findByName(clusterName: string): ClusterEntity | undefined {
        return this.getClusters().find(cluster => cluster.klaster === clusterName)
    }

    getClusters(): Array<ClusterEntity> {
        let clusters = []
        for (let cluster in jsonClusters) {
            clusters.push(ClusterEntity.deserialize(jsonClusters[cluster]))
        }
        return clusters
    }

}