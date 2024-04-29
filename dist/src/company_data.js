"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jackson_1 = require("ts-jackson");
class CompanyDto extends ts_jackson_1.SerializableEntity {
}
exports.default = CompanyDto;
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "JYKOOD", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "AASTA", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "EMTAK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Sektor_nr", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "Sektor_txt", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "Klaster", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "TARV_H", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "OIG_VORM", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", String)
], CompanyDto.prototype, "Ettevotte_suurusklass", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ASU_KOOD", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Maakond", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Kaibevarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Raha", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Lyhiajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Lyhiajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Varud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pohivarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pikaajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pikaajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Kinnisvarainvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Materiaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Immateriaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Varad_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Lyhiajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Lyhiajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Lyhiajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pikaajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pikaajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Pikaajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Kohustused_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Omakapital", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Kohustused_Omakapital_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Myygitulu", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Muud_aritulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Muud_arikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Toojoukulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Arikasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Intressikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Aruandeaasta_kasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Kaibevarad_t1", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LVKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "MVK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "RK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LLLK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LLVK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LLOK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "VaKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LVKaK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "VKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "VK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOS", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "IKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "LKKKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "PKKKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "AKM", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "PKM", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ROA", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ROE", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Kaibevarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Raha", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Lyhiajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Lyhiajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Varud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pohivarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pikaajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pikaajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Kinnisvarainvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Materiaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Immateriaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Varad_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Lyhiajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Lyhiajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Lyhiajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pikaajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pikaajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Pikaajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Kohustused_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Omakapital", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Kohustused_Omakapital_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Myygitulu", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Muud_aritulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Muud_arikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Toojoukulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Arikasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Intressikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ds_Aruandeaasta_kasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "ettev\u00F5tete_arv_sektoris", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "skoor_1_likviidsus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "skoor_2_efektiivsus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "skoor_3_struktuur", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "skoor_4_tasuvus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "y_skoor_1_likviidsus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "y_skoor_2_efektiivsus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "y_skoor_3_struktuur", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "y_skoor_4_tasuvus", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "SKP_jooksevhindades", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "SKP_nominaalkasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "SKP_pysivhindades", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "SKP_reaalkasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Tarbijahinnaindeks", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Keskmine_kuupalk", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Palgakasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "Tooviljakuse_kasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_likviidsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_efektiivsus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_struktuur_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_tasuvus_protsentiil", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "sektor_tasuvus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "klaster_tasuvus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "KOV_tasuvus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_tasuvus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "maakond_x_klaster_tasuvus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_likviidsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_efektiivsus_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_struktuur_n", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], CompanyDto.prototype, "suurusklass_tasuvus_n", void 0);
