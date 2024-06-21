import { JsonProperty, SerializableEntity } from "ts-jackson";


export async function getNormYearMean(klaster: string, aasta: number): Promise<NormYearMean> {
    throw new Error('Not implemented');
}

export  class NormYearMean extends SerializableEntity {
    @JsonProperty()
    klaster: string;
    @JsonProperty()
    aasta: number;
    @JsonProperty()
    kaibevarad: number;
    @JsonProperty()
    raha: number;
    @JsonProperty()
    lyhiajalised_nouded: number;
    @JsonProperty()
    lyhiajalised_finantsinvesteeri: number;
    @JsonProperty()
    varud: number;
    @JsonProperty()
    pohivarad: number;
    @JsonProperty()
    pikaajalised_nouded: number;
    @JsonProperty()
    pikaajalised_finantsinvesteeri: number;
    @JsonProperty()
    kinnisvarainvesteeringud: number;
    @JsonProperty()
    materiaalne_pohivara: number;
    @JsonProperty()
    immateriaalne_pohivara: number;
    @JsonProperty()
    varad_kokku: number;
    @JsonProperty()
    lyhiajalised_kohustused: number;
    @JsonProperty()
    lyhiajalised_volad: number;
    @JsonProperty()
    lyhiajalised_laenud: number;
    @JsonProperty()
    pikaajalised_kohustused: number;
    @JsonProperty()
    pikaajalised_volad: number;
    @JsonProperty()
    pikaajalised_laenud: number;
    @JsonProperty()
    kohustused_kokku: number;
    @JsonProperty()
    omakapital: number;
    @JsonProperty()
    kohustused_omakapital_kokku: number;
    @JsonProperty()
    myygitulu: number;
    @JsonProperty()
    muud_aritulud: number;
    @JsonProperty()
    muud_arikulud: number;
    @JsonProperty()
    toojoukulud: number;
    @JsonProperty()
    arikasum: number;
    @JsonProperty()
    intressikulud: number;
    @JsonProperty()
    aruandeaasta_kasum: number;
    @JsonProperty()
    ds_kaibevarad: number;
    @JsonProperty()
    ds_raha: number;
    @JsonProperty()
    ds_lyhiajalised_nouded: number;
    @JsonProperty()
    ds_lyhiajalised_finantsinveste: number;
    @JsonProperty()
    ds_varud: number;
    @JsonProperty()
    ds_pohivarad: number;
    @JsonProperty()
    ds_pikaajalised_nouded: number;
    @JsonProperty()
    ds_pikaajalised_finantsinveste: number;
    @JsonProperty()
    ds_kinnisvarainvesteeringud: number;
    @JsonProperty()
    ds_materiaalne_pohivara: number;
    @JsonProperty()
    ds_immateriaalne_pohivara: number;
    @JsonProperty()
    ds_varad_kokku: number;
    @JsonProperty()
    ds_lyhiajalised_kohustused: number;
    @JsonProperty()
    ds_lyhiajalised_volad: number;
    @JsonProperty()
    ds_lyhiajalised_laenud: number;
    @JsonProperty()
    ds_pikaajalised_kohustused: number;
    @JsonProperty()
    ds_pikaajalised_volad: number;
    @JsonProperty()
    ds_pikaajalised_laenud: number;
    @JsonProperty()
    ds_kohustused_kokku: number;
    @JsonProperty()
    ds_omakapital: number;
    @JsonProperty()
    ds_kohustused_omakapital_kokku: number;
    @JsonProperty()
    ds_myygitulu: number;
    @JsonProperty()
    ds_muud_aritulud: number;
    @JsonProperty()
    ds_muud_arikulud: number;
    @JsonProperty()
    ds_toojoukulud: number;
    @JsonProperty()
    ds_arikasum: number;
    @JsonProperty()
    ds_intressikulud: number;
    @JsonProperty()
    ds_aruandeaasta_kasum: number;
    @JsonProperty()
    skp_jooksevhindades: number;
    @JsonProperty()
    skp_nominaalkasv: number;
    @JsonProperty()
    skp_pysivhindades: number;
    @JsonProperty()
    skp_reaalkasv: number;
    @JsonProperty()
    tarbijahinnaindeks: number;
    @JsonProperty()
    keskmine_kuupalk: number;
    @JsonProperty()
    palgakasv: number;
    @JsonProperty()
    tooviljakuse_kasv: number;
}