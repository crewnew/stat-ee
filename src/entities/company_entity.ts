// import { JsonProperty,  SerializableEntity } from "ts-jackson"

// export default class CompanyEntity extends SerializableEntity {
//     @JsonProperty()
//     jykood: number;
//     @JsonProperty()
//     aasta: number;
//     @JsonProperty()
//     emtak: number;
//     @JsonProperty()
//     sektor_nr: number;
//     @JsonProperty()
//     sektor_txt: string;
//     @JsonProperty()
//     klaster: string;
//     @JsonProperty()
//     tarv_h: number;
//     @JsonProperty()
//     oig_vorm: string;
//     @JsonProperty()
//     ettevotte_suurusklass: string;
//     @JsonProperty()
//     asu_kood: number;
//     @JsonProperty()
//     kov: number;
//     @JsonProperty()
//     maakond: number;
//     @JsonProperty()
//     kaibevarad: number;
//     @JsonProperty()
//     raha: number;
//     @JsonProperty()
//     lyhiajalised_nouded: number;
//     @JsonProperty()
//     lyhiajalised_finantsinvesteeringud: number;
//     @JsonProperty()
//     varud: number;
//     @JsonProperty()
//     pohivarad: number;
//     @JsonProperty()
//     pikaajalised_nouded: number;
//     @JsonProperty()
//     pikaajalised_finantsinvesteeringud: number;
//     @JsonProperty()
//     kinnisvarainvesteeringud: number;
//     @JsonProperty()
//     materiaalne_pohivara: number;
//     @JsonProperty()
//     immateriaalne_pohivara: number;
//     @JsonProperty()
//     varad_kokku: number;
//     @JsonProperty()
//     lyhiajalised_kohustused: number;
//     @JsonProperty()
//     lyhiajalised_volad: number;
//     @JsonProperty()
//     lyhiajalised_laenud: number;
//     @JsonProperty()
//     pikaajalised_kohustused: number;
//     @JsonProperty()
//     pikaajalised_volad: number;
//     @JsonProperty()
//     pikaajalised_laenud: number;
//     @JsonProperty()
//     kohustused_kokku: number;
//     @JsonProperty()
//     omakapital: number;
//     @JsonProperty()
//     kohustused_omakapital_kokku: number;
//     @JsonProperty()
//     myygitulu: number;
//     @JsonProperty()
//     muud_aritulud: number;
//     @JsonProperty()
//     muud_arikulud: number;
//     @JsonProperty()
//     toojoukulud: number;
//     @JsonProperty()
//     arikasum: number;
//     @JsonProperty()
//     intressikulud: number;
//     @JsonProperty()
//     aruandeaasta_kasum: number;
//     @JsonProperty()
//     kaibevarad_t1: number;
//     @JsonProperty()
//     lvkk: number;
//     @JsonProperty()
//     mvk: number;
//     @JsonProperty()
//     rk: number;
//     @JsonProperty()
//     lllk: number;
//     @JsonProperty()
//     llvk: number;
//     @JsonProperty()
//     llok: number;
//     @JsonProperty()
//     vakk: number;
//     @JsonProperty()
//     lvkak: number;
//     @JsonProperty()
//     vkk: number;
//     @JsonProperty()
//     vk: number;
//     @JsonProperty()
//     kos: number;
//     @JsonProperty()
//     ikk: number;
//     @JsonProperty()
//     lkkkk: number;
//     @JsonProperty()
//     pkkkk: number;
//     @JsonProperty()
//     akm: number;
//     @JsonProperty()
//     pkm: number;
//     @JsonProperty()
//     roa: number;
//     @JsonProperty()
//     roe: number;
//     @JsonProperty()
//     ds_kaibevarad: number;
//     @JsonProperty()
//     ds_raha: number;
//     @JsonProperty()
//     ds_lyhiajalised_nouded: number;
//     @JsonProperty()
//     ds_lyhiajalised_finantsinvesteeringud: number;
//     @JsonProperty()
//     ds_varud: number;
//     @JsonProperty()
//     ds_pohivarad: number;
//     @JsonProperty()
//     ds_pikaajalised_nouded: number;
//     @JsonProperty()
//     ds_pikaajalised_finantsinvesteeringud: number;
//     @JsonProperty()
//     ds_kinnisvarainvesteeringud: number;
//     @JsonProperty()
//     ds_materiaalne_pohivara: number;
//     @JsonProperty()
//     ds_immateriaalne_pohivara: number;
//     @JsonProperty()
//     ds_varad_kokku: number;
//     @JsonProperty()
//     ds_lyhiajalised_kohustused: number;
//     @JsonProperty()
//     ds_lyhiajalised_volad: number;
//     @JsonProperty()
//     ds_lyhiajalised_laenud: number;
//     @JsonProperty()
//     ds_pikaajalised_kohustused: number;
//     @JsonProperty()
//     ds_pikaajalised_volad: number;
//     @JsonProperty()
//     ds_pikaajalised_laenud: number;
//     @JsonProperty()
//     ds_kohustused_kokku: number;
//     @JsonProperty()
//     ds_omakapital: number;
//     @JsonProperty()
//     ds_kohustused_omakapital_kokku: number;
//     @JsonProperty()
//     ds_myygitulu: number;
//     @JsonProperty()
//     ds_muud_aritulud: number;
//     @JsonProperty()
//     ds_muud_arikulud: number;
//     @JsonProperty()
//     ds_toojoukulud: number;
//     @JsonProperty()
//     ds_arikasum: number;
//     @JsonProperty()
//     ds_intressikulud: number;
//     @JsonProperty()
//     ds_aruandeaasta_kasum: number;
//     @JsonProperty()
//     ettevotete_arv_sektoris: number;
//     @JsonProperty()
//     skoor_1_likviidsus: number;
//     @JsonProperty()
//     skoor_2_efektiivsus: number;
//     @JsonProperty()
//     skoor_3_struktuur: number;
//     @JsonProperty()
//     skoor_4_tasuvus: number;
//     @JsonProperty()
//     y_skoor_1_likviidsus: number;
//     @JsonProperty()
//     y_skoor_2_efektiivsus: number;
//     @JsonProperty()
//     y_skoor_3_struktuur: number;
//     @JsonProperty()
//     y_skoor_4_tasuvus: number;
//     @JsonProperty()
//     skp_jooksevhindades: number;
//     @JsonProperty()
//     skp_nominaalkasv: number;
//     @JsonProperty()
//     skp_pysivhindades: number;
//     @JsonProperty()
//     skp_reaalkasv: number;
//     @JsonProperty()
//     tarbijahinnaindeks: number;
//     @JsonProperty()
//     keskmine_kuupalk: number;
//     @JsonProperty()
//     palgakasv: number;
//     @JsonProperty()
//     tooviljakuse_kasv: number;
//     @JsonProperty()
//     sektor_likviidsus_protsentiil: number;
//     @JsonProperty()
//     sektor_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     sektor_struktuur_protsentiil: number;
//     @JsonProperty()
//     sektor_tasuvus_protsentiil: number;
//     @JsonProperty()
//     klaster_likviidsus_protsentiil: number;
//     @JsonProperty()
//     klaster_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     klaster_struktuur_protsentiil: number;
//     @JsonProperty()
//     klaster_tasuvus_protsentiil: number;
//     @JsonProperty()
//     kov_likviidsus_protsentiil: number;
//     @JsonProperty()
//     kov_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     kov_struktuur_protsentiil: number;
//     @JsonProperty()
//     kov_tasuvus_protsentiil: number;
//     @JsonProperty()
//     maakond_likviidsus_protsentiil: number;
//     @JsonProperty()
//     maakond_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     maakond_struktuur_protsentiil: number;
//     @JsonProperty()
//     maakond_tasuvus_protsentiil: number;
//     @JsonProperty()
//     maakond_x_klaster_likviidsus_protsentiil: number;
//     @JsonProperty()
//     maakond_x_klaster_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     maakond_x_klaster_struktuur_protsentiil: number;
//     @JsonProperty()
//     maakond_x_klaster_tasuvus_protsentiil: number;
//     @JsonProperty()
//     suurusklass_likviidsus_protsentiil: number;
//     @JsonProperty()
//     suurusklass_efektiivsus_protsentiil: number;
//     @JsonProperty()
//     suurusklass_struktuur_protsentiil: number;
//     @JsonProperty()
//     suurusklass_tasuvus_protsentiil: number;
//     @JsonProperty()
//     sektor_likviidsus_n: number;
//     @JsonProperty()
//     sektor_efektiivsus_n: number;
//     @JsonProperty()
//     sektor_struktuur_n: number;
//     @JsonProperty()
//     sektor_tasuvus_n: number;
//     @JsonProperty()
//     klaster_likviidsus_n: number;
//     @JsonProperty()
//     klaster_efektiivsus_n: number;
//     @JsonProperty()
//     klaster_struktuur_n: number;
//     @JsonProperty()
//     klaster_tasuvus_n: number;
//     @JsonProperty()
//     kov_likviidsus_n: number;
//     @JsonProperty()
//     kov_efektiivsus_n: number;
//     @JsonProperty()
//     kov_struktuur_n: number;
//     @JsonProperty()
//     kov_tasuvus_n: number;
//     @JsonProperty()
//     maakond_likviidsus_n: number;
//     @JsonProperty()
//     maakond_efektiivsus_n: number;
//     @JsonProperty()
//     maakond_struktuur_n: number;
//     @JsonProperty()
//     maakond_tasuvus_n: number;
//     @JsonProperty()
//     maakond_x_klaster_likviidsus_n: number;
//     @JsonProperty()
//     maakond_x_klaster_efektiivsus_n: number;
//     @JsonProperty()
//     maakond_x_klaster_struktuur_n: number;
//     @JsonProperty()
//     maakond_x_klaster_tasuvus_n: number;
//     @JsonProperty()
//     suurusklass_likviidsus_n: number;
//     @JsonProperty()
//     suurusklass_efektiivsus_n: number;
//     @JsonProperty()
//     suurusklass_struktuur_n: number;
//     @JsonProperty()
//     suurusklass_tasuvus_n: number;
// }