# stat-ee
 
## TODO

[ ] Hansuga kohtumine ja ER
[ ] Import (SQL*Loader mvs `oracledb`)
[ ] Installi Tensorflow

## Märkmed

## id_d_taustatunnused (ID-d ja taustatunnused)
 	id
 	aasta	 
 	jy_kood	 
 	emtak	 
 	sektor_nr	 
 	sektor_txt, string
 	klaster, string
 	kov	 
 	maakond	 
 	ettevotte_suurusklass	 
## norm_sisendvektor (normaliseerimata sisendvektor MAA mudelite jaoks=
 	kaibevarad	 
 	raha	 
 	lyh_nouded (lühiajalised nõuded)
 	lyh_fin_invest (lühiajalised finantsinvesteeringud)
 	varud	 
 	pohivarad	 
 	pikaajalised_nouded	 
 	pikad_finan_invest (Pikaajalised finantsinvesteeringud)
 	kinnisvara_invest	 
 	mat_pohivara (Matiaalne põhivara)
 	imm_pohivare (Immateriaalne põhivara)
 	varad_kokku	 
 	lyh_kohustused (Lühiajalised kohustused)
 	lyh_volad	 
 	lyh_laenud	 
 	pik_kohustused (Pikaajalised kohustused)
 	pik_volad	 
 	pik_laenud	 
 	kohustused_kokku	 
 	omakapital	 
 	kohustused_omakapital (Kohustused ja omakapital kokku)	 
 	myygitulu	 
 	muud_aritulud	 
 	muud_arikulud	 
 	toojoukulud	 
 	arikasum	 
 	intressikulud	 
 	aruandeaasta_kasum	 
 	ds_kaibevarad	 
 	ds_raha	 
 	ds_lyh_nouded	 
 	ds_lyh_fin_invest	 
 	ds_varud	 
 	ds_pohivarad	 
 	ds_pik_nouded	 
 	ds_pik_finan_invest	 
 	ds_kinnisvara_invest	 
 	ds_mat_pohivara	 
 	ds_immat_pohivara	 
 	ds_varad_kokku	 
 	ds_lyh_kohustused	 
 	ds_lyh_volad	 
 	ds_lyh_laenud	 
 	ds_pik_kohustused	 
 	ds_pik_volad	 
 	ds_pik_laenud	 
 	ds_koh_kokku (Kohustused kokku)
 	ds_omakapital	 
 	ds_koh_omakapital_kokku	 
 	ds_myygitulu	 
 	ds_muud_aritulud	 
 	ds_muud_arikulud	 
 	ds_oojoukulud	 
 	ds_arikasum	 
 	ds_intressikulud	 
 	ds_aruandeaasta_kasum	 
 	skp_jooksevhindades	 
 	skp_nominaalkasv	 
 	skp_pysivhindades	 
 	skp_reaalkasv	 
 	tarbijahinnaindeks	 
 	keskmine_kuupalk	 
 	palgakasv	 
 	tooviljakuse_kasv	 
## do nohetk_kuva (Hetkeseisu kuvamised)	 	 
 	sek_likv_prots (Sektori likviidsus protsendiil)
    sek_likv_n
    sek_struk_prots (Sektori struktuur protsendiil)
    sek_struk_n
    sek_efekt_prots
    sekt_efekt_n
    sekt_tasuv_prots
    sekt_tasuv_n
    kov_likv_prots
    kov_likv_n
    kov_struk_prots
    kov_struk_n
    kov_efekt_prots
    kov_efekt_n
    kov_tasuv_prots
    kov_tasuv_n
    maak_x_klas_likv_prots
    maak_x_klas_likv_n
    maak_x_klas_struk_prots
    maak_x_klas_struk_n
    maak_x_klas_efekt_prots
    maak_x_klas_efekt_n
    maak_x_klas_tasuv_prots
    maak_x_klas_tasuv_n
    klastri_likv_prots
    klast_likv_n
    klast_strukt_prots (Klastri struktuur protsendiil)
    klast_strukt_n
    klast_efekt_prots
    klast_efekt_n
    klast_tasuv_prots
    klast_tasuv_n
    suurusk_likv_prots (Suurusklassi likviidsus protsendiil)
    suurusk_likv_n
    suurusk_strukt_prots
    suurusk_strukt_n
    suurusk_efekt_prots
    suurusk_efekt_n
    suurusk_tasuv_prots
    suurusk_tasuv_n 


    See konkreetne 64-ne jupp on normaliseerimata sisendvektor masinõppemudelile. Seal tuleb kõigepealt kerge eeltöötlus (R failis – mis tunnustel kust maalt otsad ära clippida) ja siis normaliseerimine:l tuleb lahutada vastava klastri keskmine ja jagada standardhälbega (need on need vastavad abitabelid).
Pärast normaliseerimist saab vektori sisse sööta neljale mudelile (mudeli valik klastri järgi) millest tulevad välja 4 x 3 tõenäosust (madala, keskmise ja kõrge elujõu tõenäosused iga mudeli kohta)

```text
Kaibevarad
Raha
Lyhiajalised_nouded
Lyhiajalised_finantsinvesteeringud
Varud
Pohivarad
Pikaajalised_nouded
Pikaajalised_finantsinvesteeringud
Kinnisvarainvesteeringud
Materiaalne_pohivara
Immateriaalne_pohivara
Varad_kokku
Lyhiajalised_kohustused
Lyhiajalised_volad
Lyhiajalised_laenud
Pikaajalised_kohustused
Pikaajalised_volad
Pikaajalised_laenud
Kohustused_kokku
Omakapital
Kohustused_Omakapital_kokku
Myygitulu
Muud_aritulud
Muud_arikulud
Toojoukulud
Arikasum
Intressikulud
Aruandeaasta_kasum
ds_Kaibevarad
ds_Raha
ds_Lyhiajalised_nouded
ds_Lyhiajalised_finantsinvesteeringud
ds_Varud
ds_Pohivarad
ds_Pikaajalised_nouded
ds_Pikaajalised_finantsinvesteeringud
ds_Kinnisvarainvesteeringud
ds_Materiaalne_pohivara
ds_Immateriaalne_pohivara
ds_Varad_kokku
ds_Lyhiajalised_kohustused
ds_Lyhiajalised_volad
ds_Lyhiajalised_laenud
ds_Pikaajalised_kohustused
ds_Pikaajalised_volad
ds_Pikaajalised_laenud
ds_Kohustused_kokku
ds_Omakapital
ds_Kohustused_Omakapital_kokku
ds_Myygitulu
ds_Muud_aritulud
ds_Muud_arikulud
ds_Toojoukulud
ds_Arikasum
ds_Intressikulud
ds_Aruandeaasta_kasum
SKP_jooksevhindades
SKP_nominaalkasv
SKP_pysivhindades
SKP_reaalkasv
Tarbijahinnaindeks
Keskmine_kuupalk
Palgakasv
Tooviljakuse_kasv
```

Esialgu võiks alustada ehk umbes selliste väljadega andmebaasist. Kõik peale kõik peale "Sektor_txt" ja "klaster" peaks olema arvulised (double float). See peaks katma ära kõik peale kuiste andmete mudelite, need tuleb eraldi teha, seal andmed teise struktuuriga ja kasutus ka veidi teine.