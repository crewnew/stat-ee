
import CompanyEntity from './company_entity'

export default class ClusterRepository {
    // Fetches a company by its id
    // Throws an error if the company is not found
    // Throws an error if the cluster is 'muu'
    async findById(id: number): Promise<CompanyEntity> {
        try {
            const response = await fetch(`${process.env.COMPANY_URL}/eestat/1/elujoud/${id}`);
            // Parse the response body as JSON (assuming JSON data)
            const data = await response.json();
            const company = CompanyEntity.deserialize(data);
            // If the cluster is 'muu', throw an error
            if (company.Klaster === 'muu') {
                throw new Error('Cluster not found');
            }
            return data;
        } catch (error) {
            if (error.message === 'Cluster not found') {
                throw error;
            } else {
                throw new Error('Company not found');
            }
        }
    }
}
