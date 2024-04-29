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
class ClusterEntity extends ts_jackson_1.SerializableEntity {
    withCompanyData(company) {
        console.log(`Model used: ${company.Klaster}`);
        Object.keys(this).forEach(key => {
            if (key === 'klaster')
                return;
            if (company[key]) {
                this[key] = this[key] / company[key];
                console.log(`key: ${key}, value: ${this[key]} = ${this[key]} / ${company[key]}`);
            }
        });
        return this;
    }
}
exports.default = ClusterEntity;
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Kaibevarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Raha", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Lyhiajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Lyhiajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Varud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pohivarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pikaajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pikaajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Kinnisvarainvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Materiaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Immateriaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Varad_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Lyhiajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Lyhiajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Lyhiajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pikaajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pikaajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Pikaajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Kohustused_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Omakapital", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Kohustused_Omakapital_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Myygitulu", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Muud_aritulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Muud_arikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Toojoukulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Arikasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Intressikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Aruandeaasta_kasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Kaibevarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Raha", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Lyhiajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Lyhiajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Varud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pohivarad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pikaajalised_nouded", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pikaajalised_finantsinvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Kinnisvarainvesteeringud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Materiaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Immateriaalne_pohivara", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Varad_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Lyhiajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Lyhiajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Lyhiajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pikaajalised_kohustused", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pikaajalised_volad", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Pikaajalised_laenud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Kohustused_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Omakapital", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Kohustused_Omakapital_kokku", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Myygitulu", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Muud_aritulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Muud_arikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Toojoukulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Arikasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Intressikulud", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "ds_Aruandeaasta_kasum", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "SKP_jooksevhindades", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "SKP_nominaalkasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "SKP_pysivhindades", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "SKP_reaalkasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Tarbijahinnaindeks", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Keskmine_kuupalk", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Palgakasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", Number)
], ClusterEntity.prototype, "Tooviljakuse_kasv", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)(),
    __metadata("design:type", String)
], ClusterEntity.prototype, "klaster", void 0);
