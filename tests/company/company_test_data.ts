// import cleanifyJson from "../../src/utils/json_cleaner";

// export default cleanifyJson({
//     "JYKOOD": 11344088,
//     "AASTA": 2022,
//     "EMTAK": 71121,
//     "Sektor_nr": 76,
//     "Sektor_txt": "Loomakasvatus",
//     "Klaster": "k4_1",
//     "TARV_H": 1,
//     "OIG_VORM": "Ariuhingud",
//     "Ettevotte_suurusklass": "1)_1_kuni_9",
//     "ASU_KOOD": 596,
//     "KOV": 784,
//     "Maakond": 37,
//     "Kaibevarad": 173737,
//     "Raha": 4197,
//     "Lyhiajalised_nouded": "NA",
//     "Lyhiajalised_finantsinvesteeringud": "NA",
//     "Varud": 1902,
//     "Pohivarad": 5323,
//     "Pikaajalised_nouded": "NA",
//     "Pikaajalised_finantsinvesteeringud": 24608,
//     "Kinnisvarainvesteeringud": "NA",
//     "Materiaalne_pohivara": "NA",
//     "Immateriaalne_pohivara": "NA",
//     "Varad_kokku": 11975,
//     "Lyhiajalised_kohustused": 4941,
//     "Lyhiajalised_volad": 121464,
//     "Lyhiajalised_laenud": "NA",
//     "Pikaajalised_kohustused": "NA",
//     "Pikaajalised_volad": "NA",
//     "Pikaajalised_laenud": "NA",
//     "Kohustused_kokku": "NA",
//     "Omakapital": 37926,
//     "Kohustused_Omakapital_kokku": 142591,
//     "Myygitulu": 4476,
//     "Muud_aritulud": 31162,
//     "Muud_arikulud": 1,
//     "Toojoukulud": 12197,
//     "Arikasum": 38850,
//     "Intressikulud": "NA",
//     "Aruandeaasta_kasum": -52589,
//     "Kaibevarad_t1": 5852,
//     "LVKK": 0.05535464302,
//     "MVK": "NA",
//     "RK": 2.025848142,
//     "LLLK": "NA",
//     "LLVK": 0.01579196217,
//     "LLOK": "NA",
//     "VaKK": 0.3202021362,
//     "LVKaK": 4.020719049,
//     "VKK": "NA",
//     "VK": 0.5071439786,
//     "KOS": "NA",
//     "IKK": "NA",
//     "LKKKK": 1,
//     "PKKKK": "NA",
//     "AKM": 0.2808769264,
//     "PKM": 0.3757648571,
//     "ROA": 0.02586264657,
//     "ROE": 0.04314192205,
//     "ds_Kaibevarad": 0.6597887066,
//     "ds_Raha": 0,
//     "ds_Lyhiajalised_nouded": 0,
//     "ds_Lyhiajalised_finantsinvesteeringud": 0,
//     "ds_Varud": 0.14309599,
//     "ds_Pohivarad": 0,
//     "ds_Pikaajalised_nouded": 0,
//     "ds_Pikaajalised_finantsinvesteeringud": -0.9996666667,
//     "ds_Kinnisvarainvesteeringud": 0,
//     "ds_Materiaalne_pohivara": -0.3383329616,
//     "ds_Immateriaalne_pohivara": 0,
//     "ds_Varad_kokku": -0.1061025331,
//     "ds_Lyhiajalised_kohustused": 1000,
//     "ds_Lyhiajalised_volad": -0.5375686836,
//     "ds_Lyhiajalised_laenud": 0,
//     "ds_Pikaajalised_kohustused": 0,
//     "ds_Pikaajalised_volad": 0,
//     "ds_Pikaajalised_laenud": 0,
//     "ds_Kohustused_kokku": -0.3403784964,
//     "ds_Omakapital": 2.744291875,
//     "ds_Kohustused_Omakapital_kokku": 0.04779043449,
//     "ds_Myygitulu": -0.2678501565,
//     "ds_Muud_aritulud": 9.985074627,
//     "ds_Muud_arikulud": 0,
//     "ds_Toojoukulud": 0,
//     "ds_Arikasum": -0.697246437,
//     "ds_Intressikulud": 0,
//     "ds_Aruandeaasta_kasum": 1.011259652,
//     "ettevõtete_arv_sektoris": 1074,
//     "skoor_1_likviidsus": 0,
//     "skoor_2_efektiivsus": 0,
//     "skoor_3_struktuur": 1,
//     "skoor_4_tasuvus": 0,
//     "y_skoor_1_likviidsus": "NA",
//     "y_skoor_2_efektiivsus": "NA",
//     "y_skoor_3_struktuur": "NA",
//     "y_skoor_4_tasuvus": "NA",
//     "SKP_jooksevhindades": 36011.2,
//     "SKP_nominaalkasv": 0.1553530752,
//     "SKP_pysivhindades": 25701.2,
//     "SKP_reaalkasv": -0.03005307145,
//     "Tarbijahinnaindeks": 0.194,
//     "Keskmine_kuupalk": 1644.75,
//     "Palgakasv": 0.1164092992,
//     "Tooviljakuse_kasv": -0.04414013678,
//     "sektor_likviidsus_protsentiil": 0.03769301957,
//     "sektor_efektiivsus_protsentiil": 0.0797271167,
//     "sektor_struktuur_protsentiil": 0.422459893,
//     "sektor_tasuvus_protsentiil": 0.1915442596,
//     "klaster_likviidsus_protsentiil": 0.6702954691,
//     "klaster_efektiivsus_protsentiil": 0.3842062581,
//     "klaster_struktuur_protsentiil": 0.6696398475,
//     "klaster_tasuvus_protsentiil": 0.5068930049,
//     "KOV_likviidsus_protsentiil": 0.5986903576,
//     "KOV_efektiivsus_protsentiil": 0.5713091838,
//     "KOV_struktuur_protsentiil": "NA",
//     "KOV_tasuvus_protsentiil": 0.5651760636,
//     "maakond_likviidsus_protsentiil": "NA",
//     "maakond_efektiivsus_protsentiil": 0.7564450475,
//     "maakond_struktuur_protsentiil": 0.297782402,
//     "maakond_tasuvus_protsentiil": 0.5898842515,
//     "maakond_x_klaster_likviidsus_protsentiil": 0.7239104845,
//     "maakond_x_klaster_efektiivsus_protsentiil": 0.1760967507,
//     "maakond_x_klaster_struktuur_protsentiil": 0.425359533,
//     "maakond_x_klaster_tasuvus_protsentiil": 0.9703361345,
//     "suurusklass_likviidsus_protsentiil": "NA",
//     "suurusklass_efektiivsus_protsentiil": 0.9265410843,
//     "suurusklass_struktuur_protsentiil": 0.3185095975,
//     "suurusklass_tasuvus_protsentiil": 0.8983531234,
//     "sektor_likviidsus_n": 386,
//     "sektor_efektiivsus_n": 3569,
//     "sektor_struktuur_n": 706,
//     "sektor_tasuvus_n": 10787,
//     "klaster_likviidsus_n": 14521,
//     "klaster_efektiivsus_n": 36966,
//     "klaster_struktuur_n": 30782,
//     "klaster_tasuvus_n": 37225,
//     "KOV_likviidsus_n": 5603,
//     "KOV_efektiivsus_n": 47751,
//     "KOV_struktuur_n": 43695,
//     "KOV_tasuvus_n": 48409,
//     "maakond_likviidsus_n": 3077,
//     "maakond_efektiivsus_n": 62917,
//     "maakond_struktuur_n": 2131,
//     "maakond_tasuvus_n": 287,
//     "maakond_x_klaster_likviidsus_n": 8008,
//     "maakond_x_klaster_efektiivsus_n": 3520,
//     "maakond_x_klaster_struktuur_n": 3805,
//     "maakond_x_klaster_tasuvus_n": 4434,
//     "suurusklass_likviidsus_n": 86914,
//     "suurusklass_efektiivsus_n": 97835,
//     "suurusklass_struktuur_n": 89221,
//     "suurusklass_tasuvus_n": 99089
// })