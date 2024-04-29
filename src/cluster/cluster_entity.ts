import CompanyDto from "src/company_data"
import { JsonProperty, SerializableEntity } from "ts-jackson"

export default class ClusterEntity extends SerializableEntity {
    @JsonProperty()
    Kaibevarad: number
    @JsonProperty()
    Raha: number
    @JsonProperty()
    Lyhiajalised_nouded: number
    @JsonProperty()
    Lyhiajalised_finantsinvesteeringud: number
    @JsonProperty()
    Varud: number
    @JsonProperty()
    Pohivarad: number
    @JsonProperty()
    Pikaajalised_nouded: number
    @JsonProperty()
    Pikaajalised_finantsinvesteeringud: number
    @JsonProperty()
    Kinnisvarainvesteeringud: number
    @JsonProperty()
    Materiaalne_pohivara: number
    @JsonProperty()
    Immateriaalne_pohivara: number
    @JsonProperty()
    Varad_kokku: number
    @JsonProperty()
    Lyhiajalised_kohustused: number
    @JsonProperty()
    Lyhiajalised_volad: number
    @JsonProperty()
    Lyhiajalised_laenud: number
    @JsonProperty()
    Pikaajalised_kohustused: number
    @JsonProperty()
    Pikaajalised_volad: number
    @JsonProperty()
    Pikaajalised_laenud: number
    @JsonProperty()
    Kohustused_kokku: number
    @JsonProperty()
    Omakapital: number
    @JsonProperty()
    Kohustused_Omakapital_kokku: number
    @JsonProperty()
    Myygitulu: number
    @JsonProperty()
    Muud_aritulud: number
    @JsonProperty()
    Muud_arikulud: number
    @JsonProperty()
    Toojoukulud: number
    @JsonProperty()
    Arikasum: number
    @JsonProperty()
    Intressikulud: number
    @JsonProperty()
    Aruandeaasta_kasum: number
    @JsonProperty()
    ds_Kaibevarad: number
    @JsonProperty()
    ds_Raha: number
    @JsonProperty()
    ds_Lyhiajalised_nouded: number
    @JsonProperty()
    ds_Lyhiajalised_finantsinvesteeringud: number
    @JsonProperty()
    ds_Varud: number
    @JsonProperty()
    ds_Pohivarad: number
    @JsonProperty()
    ds_Pikaajalised_nouded: number
    @JsonProperty()
    ds_Pikaajalised_finantsinvesteeringud: number
    @JsonProperty()
    ds_Kinnisvarainvesteeringud: number
    @JsonProperty()
    ds_Materiaalne_pohivara: number
    @JsonProperty()
    ds_Immateriaalne_pohivara: number
    @JsonProperty()
    ds_Varad_kokku: number
    @JsonProperty()
    ds_Lyhiajalised_kohustused: number
    @JsonProperty()
    ds_Lyhiajalised_volad: number
    @JsonProperty()
    ds_Lyhiajalised_laenud: number
    @JsonProperty()
    ds_Pikaajalised_kohustused: number
    @JsonProperty()
    ds_Pikaajalised_volad: number
    @JsonProperty()
    ds_Pikaajalised_laenud: number
    @JsonProperty()
    ds_Kohustused_kokku: number
    @JsonProperty()
    ds_Omakapital: number
    @JsonProperty()
    ds_Kohustused_Omakapital_kokku: number
    @JsonProperty()
    ds_Myygitulu: number
    @JsonProperty()
    ds_Muud_aritulud: number
    @JsonProperty()
    ds_Muud_arikulud: number
    @JsonProperty()
    ds_Toojoukulud: number
    @JsonProperty()
    ds_Arikasum: number
    @JsonProperty()
    ds_Intressikulud: number
    @JsonProperty()
    ds_Aruandeaasta_kasum: number
    @JsonProperty()
    SKP_jooksevhindades: number
    @JsonProperty()
    SKP_nominaalkasv: number
    @JsonProperty()
    SKP_pysivhindades: number
    @JsonProperty()
    SKP_reaalkasv: number
    @JsonProperty()
    Tarbijahinnaindeks: number
    @JsonProperty()
    Keskmine_kuupalk: number
    @JsonProperty()
    Palgakasv: number
    @JsonProperty()
    Tooviljakuse_kasv: number
    @JsonProperty()
    klaster: string

    withCompanyData(company: CompanyDto) : ClusterEntity {
        console.log(`Model used: ${company.Klaster}`)
        Object.keys(this).forEach(key => {
            if (key === 'klaster') return;
            if (company[key]) {
                this[key] = this[key] / company[key]
                console.log(`key: ${key}, value: ${this[key]} = ${this[key]} / ${company[key]}`)
            }
        });
        return this;
    }
}