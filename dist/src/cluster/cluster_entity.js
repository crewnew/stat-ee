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
const logger_1 = require("../utils/logger");
const value_clamp_1 = require("../utils/value_clamp");
const ts_jackson_1 = require("ts-jackson");
class ClusterEntity extends ts_jackson_1.SerializableEntity {
    // Using the `JsonProperty` decorator to map the JSON keys to the class properties.
    static fromCompany(company) {
        const jsonCompany = company.serialize();
        return ClusterEntity.deserialize(jsonCompany).clamp();
    }
    // Divides each field by the corresponding `sds` value based on the cluster.
    divide(cluster) {
        Object.keys(this).forEach(key => {
            if (Object.keys(cluster).includes(key) && cluster[key] !== 0) {
                this[key] = this[key] / cluster[key];
                logger_1.logger.debug(`${this[key]} / ${cluster[key]} = ${this[key] / cluster[key]}`);
            }
        });
        return this;
    }
    substract(cluster) {
        Object.keys(this).forEach(key => {
            if (Object.keys(cluster).includes(key) && cluster[key] !== 0) {
                this[key] = this[key] - cluster[key];
                logger_1.logger.debug(`${this[key]} - ${cluster[key]} = ${this[key] - cluster[key]}`);
            }
        });
        return this;
    }
    // Caps each retrieved value based on a separate table defining maximum values for each field.
    clamp() {
        this.Kaibevarad = (0, value_clamp_1.clamp)(this.Kaibevarad, 250000000);
        this.Raha = (0, value_clamp_1.clamp)(this.Raha, 50000000);
        this.Lyhiajalised_nouded = (0, value_clamp_1.clamp)(this.Lyhiajalised_nouded, 250000000);
        this.Lyhiajalised_finantsinvesteeringud = (0, value_clamp_1.clamp)(this.Lyhiajalised_finantsinvesteeringud, 25000000);
        this.Varud = (0, value_clamp_1.clamp)(this.Varud, 75000000);
        this.Pohivarad = (0, value_clamp_1.clamp)(this.Pohivarad, 250000000);
        this.Pikaajalised_nouded = (0, value_clamp_1.clamp)(this.Pikaajalised_nouded, 250000000);
        this.Pikaajalised_finantsinvesteeringud = (0, value_clamp_1.clamp)(this.Pikaajalised_finantsinvesteeringud, 325000000);
        this.Kinnisvarainvesteeringud = (0, value_clamp_1.clamp)(this.Kinnisvarainvesteeringud, 50000000);
        this.Materiaalne_pohivara = (0, value_clamp_1.clamp)(this.Materiaalne_pohivara, 250000000);
        this.Immateriaalne_pohivara = (0, value_clamp_1.clamp)(this.Immateriaalne_pohivara, 25000000);
        this.Varad_kokku = (0, value_clamp_1.clamp)(this.Varad_kokku, 350000000);
        this.Lyhiajalised_kohustused = (0, value_clamp_1.clamp)(this.Lyhiajalised_kohustused, 100000000);
        this.Lyhiajalised_volad = (0, value_clamp_1.clamp)(this.Lyhiajalised_volad, 75000000);
        this.Pikaajalised_kohustused = (0, value_clamp_1.clamp)(this.Pikaajalised_kohustused, 100000000);
        this.Pikaajalised_volad = (0, value_clamp_1.clamp)(this.Pikaajalised_volad, 75000000);
        this.Pikaajalised_laenud = (0, value_clamp_1.clamp)(this.Pikaajalised_laenud, 150000000);
        this.Omakapital = (0, value_clamp_1.clamp)(this.Omakapital, 250000000);
        this.Kohustused_Omakapital_kokku = (0, value_clamp_1.clamp)(this.Kohustused_Omakapital_kokku, 350000000);
        this.Myygitulu = (0, value_clamp_1.clamp)(this.Myygitulu, 150000000);
        this.Muud_aritulud = (0, value_clamp_1.clamp)(this.Muud_aritulud, 150000000);
        this.Muud_arikulud = (0, value_clamp_1.clamp)(this.Muud_arikulud, 5000000);
        this.Toojoukulud = (0, value_clamp_1.clamp)(this.Toojoukulud, 15000000);
        this.Intressikulud = (0, value_clamp_1.clamp)(this.Intressikulud, 7500000);
        this.Arikasum = (0, value_clamp_1.clampBetween)(this.Arikasum, -125000000, 250000000);
        this.Aruandeaasta_kasum = (0, value_clamp_1.clampBetween)(this.Aruandeaasta_kasum, -125000000, 125000000);
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
