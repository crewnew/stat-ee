import CompanyDto from "./company_data";

export default class ValueClamp {
    private clamp(value: number, max: number): number {
        return Math.min(value, max);
    }

    private clampBetween(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, value));
    }

    public  apply(data: CompanyDto): CompanyDto {
            data.Kaibevarad = this.clamp(data.Kaibevarad, 250000000);
            data.Raha = this.clamp(data.Raha, 50000000);
            data.Lyhiajalised_nouded = this.clamp(data.Lyhiajalised_nouded, 250000000);
            data.Lyhiajalised_finantsinvesteeringud = this.clamp(data.Lyhiajalised_finantsinvesteeringud, 25000000);
            data.Varud = this.clamp(data.Varud, 75000000);
            data.Pohivarad = this.clamp(data.Pohivarad, 250000000);
            data.Pikaajalised_nouded = this.clamp(data.Pikaajalised_nouded, 250000000);
            data.Pikaajalised_finantsinvesteeringud = this.clamp(data.Pikaajalised_finantsinvesteeringud, 325000000);
            data.Kinnisvarainvesteeringud = this.clamp(data.Kinnisvarainvesteeringud, 50000000);
            data.Materiaalne_pohivara = this.clamp(data.Materiaalne_pohivara, 250000000);
            data.Immateriaalne_pohivara = this.clamp(data.Immateriaalne_pohivara, 25000000);
            data.Varad_kokku = this.clamp(data.Varad_kokku, 350000000);
            data.Lyhiajalised_kohustused = this.clamp(data.Lyhiajalised_kohustused, 100000000);
            data.Lyhiajalised_volad = this.clamp(data.Lyhiajalised_volad, 75000000);
            data.Pikaajalised_kohustused = this.clamp(data.Pikaajalised_kohustused, 100000000);
            data.Pikaajalised_volad = this.clamp(data.Pikaajalised_volad, 75000000);
            data.Pikaajalised_laenud = this.clamp(data.Pikaajalised_laenud, 150000000);
            data.Omakapital = this.clamp(data.Omakapital, 250000000);
            data.Kohustused_Omakapital_kokku = this.clamp(data.Kohustused_Omakapital_kokku, 350000000);
            data.Myygitulu = this.clamp(data.Myygitulu, 150000000);
            // data.Muud_aritulud = this.clamp(data.Muud_aritulud, 150000000);
            data.Muud_arikulud = this.clamp(data.Muud_arikulud, 5000000);
            data.Toojoukulud = this.clamp(data.Toojoukulud, 15000000);
            data.Intressikulud = this.clamp(data.Intressikulud, 7500000);
            data.Arikasum = this.clampBetween(data.Arikasum, -125000000, 250000000);
            data.Aruandeaasta_kasum = this.clampBetween(data.Aruandeaasta_kasum, -125000000, 125000000);
        
            return data;
        }
}

