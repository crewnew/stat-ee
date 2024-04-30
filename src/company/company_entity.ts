import { clamp, clampBetween } from "../utils/value_clamp"
import { JsonProperty,  SerializableEntity } from "ts-jackson"

export default class CompanyEntity extends SerializableEntity {
    @JsonProperty()
    JYKOOD: number
    @JsonProperty()
    AASTA: number
    @JsonProperty()
    EMTAK: number
    @JsonProperty()
    Sektor_nr: number
    @JsonProperty()
    Sektor_txt: string
    @JsonProperty()
    Klaster: string
    @JsonProperty()
    TARV_H: number
    @JsonProperty()
    OIG_VORM: string
    @JsonProperty()
    Ettevotte_suurusklass: string
    @JsonProperty()
    ASU_KOOD: number
    @JsonProperty()
    KOV: number
    @JsonProperty()
    Maakond: number
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
    Kaibevarad_t1: number
    @JsonProperty()
    LVKK: number
    @JsonProperty()
    MVK: number
    @JsonProperty()
    RK: number
    @JsonProperty()
    LLLK: number
    @JsonProperty()
    LLVK: number
    @JsonProperty()
    LLOK: number
    @JsonProperty()
    VaKK: number
    @JsonProperty()
    LVKaK: number
    @JsonProperty()
    VKK: number
    @JsonProperty()
    VK: number
    @JsonProperty()
    KOS: number
    @JsonProperty()
    IKK: number
    @JsonProperty()
    LKKKK: number
    @JsonProperty()
    PKKKK: number
    @JsonProperty()
    AKM: number
    @JsonProperty()
    PKM: number
    @JsonProperty()
    ROA: number
    @JsonProperty()
    ROE: number
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
    ettevõtete_arv_sektoris: number
    @JsonProperty()
    skoor_1_likviidsus: number
    @JsonProperty()
    skoor_2_efektiivsus: number
    @JsonProperty()
    skoor_3_struktuur: number
    @JsonProperty()
    skoor_4_tasuvus: number
    @JsonProperty()
    y_skoor_1_likviidsus: number
    @JsonProperty()
    y_skoor_2_efektiivsus: number
    @JsonProperty()
    y_skoor_3_struktuur: number
    @JsonProperty()
    y_skoor_4_tasuvus: number
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
    sektor_likviidsus_protsentiil: number
    @JsonProperty()
    sektor_efektiivsus_protsentiil: number
    @JsonProperty()
    sektor_struktuur_protsentiil: number
    @JsonProperty()
    sektor_tasuvus_protsentiil: number
    @JsonProperty()
    klaster_likviidsus_protsentiil: number
    @JsonProperty()
    klaster_efektiivsus_protsentiil: number
    @JsonProperty()
    klaster_struktuur_protsentiil: number
    @JsonProperty()
    klaster_tasuvus_protsentiil: number
    @JsonProperty()
    KOV_likviidsus_protsentiil: number
    @JsonProperty()
    KOV_efektiivsus_protsentiil: number
    @JsonProperty()
    KOV_struktuur_protsentiil: number
    @JsonProperty()
    KOV_tasuvus_protsentiil: number
    @JsonProperty()
    maakond_likviidsus_protsentiil: number
    @JsonProperty()
    maakond_efektiivsus_protsentiil: number
    @JsonProperty()
    maakond_struktuur_protsentiil: number
    @JsonProperty()
    maakond_tasuvus_protsentiil: number
    @JsonProperty()
    maakond_x_klaster_likviidsus_protsentiil: number
    @JsonProperty()
    maakond_x_klaster_efektiivsus_protsentiil: number
    @JsonProperty()
    maakond_x_klaster_struktuur_protsentiil: number
    @JsonProperty()
    maakond_x_klaster_tasuvus_protsentiil: number
    @JsonProperty()
    suurusklass_likviidsus_protsentiil: number
    @JsonProperty()
    suurusklass_efektiivsus_protsentiil: number
    @JsonProperty()
    suurusklass_struktuur_protsentiil: number
    @JsonProperty()
    suurusklass_tasuvus_protsentiil: number
    @JsonProperty()
    sektor_likviidsus_n: number
    @JsonProperty()
    sektor_efektiivsus_n: number
    @JsonProperty()
    sektor_struktuur_n: number
    @JsonProperty()
    sektor_tasuvus_n: number
    @JsonProperty()
    klaster_likviidsus_n: number
    @JsonProperty()
    klaster_efektiivsus_n: number
    @JsonProperty()
    klaster_struktuur_n: number
    @JsonProperty()
    klaster_tasuvus_n: number
    @JsonProperty()
    KOV_likviidsus_n: number
    @JsonProperty()
    KOV_efektiivsus_n: number
    @JsonProperty()
    KOV_struktuur_n: number
    @JsonProperty()
    KOV_tasuvus_n: number
    @JsonProperty()
    maakond_likviidsus_n: number
    @JsonProperty()
    maakond_efektiivsus_n: number
    @JsonProperty()
    maakond_struktuur_n: number
    @JsonProperty()
    maakond_tasuvus_n: number
    @JsonProperty()
    maakond_x_klaster_likviidsus_n: number
    @JsonProperty()
    maakond_x_klaster_efektiivsus_n: number
    @JsonProperty()
    maakond_x_klaster_struktuur_n: number
    @JsonProperty()
    maakond_x_klaster_tasuvus_n: number
    @JsonProperty()
    suurusklass_likviidsus_n: number
    @JsonProperty()
    suurusklass_efektiivsus_n: number
    @JsonProperty()
    suurusklass_struktuur_n: number
    @JsonProperty()
    suurusklass_tasuvus_n: number



    public clamp(): CompanyEntity {
        this.Kaibevarad = clamp(this.Kaibevarad, 250000000);
        this.Raha = clamp(this.Raha, 50000000);
        this.Lyhiajalised_nouded = clamp(this.Lyhiajalised_nouded, 250000000);
        this.Lyhiajalised_finantsinvesteeringud = clamp(this.Lyhiajalised_finantsinvesteeringud, 25000000);
        this.Varud = clamp(this.Varud, 75000000);
        this.Pohivarad = clamp(this.Pohivarad, 250000000);
        this.Pikaajalised_nouded = clamp(this.Pikaajalised_nouded, 250000000);
        this.Pikaajalised_finantsinvesteeringud = clamp(this.Pikaajalised_finantsinvesteeringud, 325000000);
        this.Kinnisvarainvesteeringud = clamp(this.Kinnisvarainvesteeringud, 50000000);
        this.Materiaalne_pohivara = clamp(this.Materiaalne_pohivara, 250000000);
        this.Immateriaalne_pohivara = clamp(this.Immateriaalne_pohivara, 25000000);
        this.Varad_kokku = clamp(this.Varad_kokku, 350000000);
        this.Lyhiajalised_kohustused = clamp(this.Lyhiajalised_kohustused, 100000000);
        this.Lyhiajalised_volad = clamp(this.Lyhiajalised_volad, 75000000);
        this.Pikaajalised_kohustused = clamp(this.Pikaajalised_kohustused, 100000000);
        this.Pikaajalised_volad = clamp(this.Pikaajalised_volad, 75000000);
        this.Pikaajalised_laenud = clamp(this.Pikaajalised_laenud, 150000000);
        this.Omakapital = clamp(this.Omakapital, 250000000);
        this.Kohustused_Omakapital_kokku = clamp(this.Kohustused_Omakapital_kokku, 350000000);
        this.Myygitulu = clamp(this.Myygitulu, 150000000);
        // this.Muud_aritulud = clamp(this.Muud_aritulud, 150000000);
        this.Muud_arikulud = clamp(this.Muud_arikulud, 5000000);
        this.Toojoukulud = clamp(this.Toojoukulud, 15000000);
        this.Intressikulud = clamp(this.Intressikulud, 7500000);
        this.Arikasum = clampBetween(this.Arikasum, -125000000, 250000000);
        this.Aruandeaasta_kasum = clampBetween(this.Aruandeaasta_kasum, -125000000, 125000000);

        return this;
    }
}