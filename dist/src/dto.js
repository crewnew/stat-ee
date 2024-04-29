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
class CompanyData extends ts_jackson_1.SerializableEntity {
}
exports.default = CompanyData;
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'JYKOOD' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companyID", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'AASTA' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "year", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'EMTAK' }),
    __metadata("design:type", String)
], CompanyData.prototype, "emtak", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Sektor_nr' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorNumber", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Sektor_txt' }),
    __metadata("design:type", String)
], CompanyData.prototype, "sectorText", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Klaster' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "cluster", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'TARV_H' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "requirementH", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'OIG_VORM' }),
    __metadata("design:type", String)
], CompanyData.prototype, "legalForm", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Ettevotte_suurusklass' }),
    __metadata("design:type", String)
], CompanyData.prototype, "companySizeClass", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ASU_KOOD' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "institutionCode", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityCode", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Maakond' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyCode", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Kaibevarad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "assets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Raha' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "cash", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Lyhiajalised_nouded' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "shortTermReceivables", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Lyhiajalised_finantsinvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "shortTermFinancialInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Varud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "inventories", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pohivarad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "fixedAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pikaajalised_nouded' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "longTermReceivables", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pikaajalised_finantsinvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "longTermFinancialInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Kinnisvarainvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "realEstateInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Materiaalne_pohivara' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "tangibleAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Immateriaalne_pohivara' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "intangibleAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Varad_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "totalAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Lyhiajalised_kohustused' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "shortTermLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Lyhiajalised_volad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "shortTermDebts", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Lyhiajalised_laenud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "shortTermLoans", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pikaajalised_kohustused' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "longTermLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pikaajalised_volad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "longTermDebts", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Pikaajalised_laenud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "longTermLoans", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Kohustused_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "totalLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Omakapital' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "equity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Kohustused_Omakapital_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "liabilitiesAndEquity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Myygitulu' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "salesRevenue", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Muud_aritulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "otherOperatingIncome", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Muud_arikulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "otherOperatingExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Toojoukulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "personnelExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Arikasum' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "operatingProfit", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Intressikulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "interestExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Aruandeaasta_kasum' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "netProfit", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Kaibevarad_t1' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "turnoverAssetsT1", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LVKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LVKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'MVK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "MVK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'RK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "RK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LLLK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LLLK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LLVK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LLVK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LLOK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LLOK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'VaKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "VaKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LVKaK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LVKaK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'VKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "VKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'VK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "VK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOS' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "KOS", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'IKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "IKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'LKKKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LKKKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'PKKKK' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "PKK", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'AKM' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "AKM", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'PKM' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "PKM", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ROA' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "ROA", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ROE' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "ROE", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Kaibevarad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsTurnoverAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Raha' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsCash", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Lyhiajalised_nouded' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsShortTermReceivables", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Lyhiajalised_finantsinvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsShortTermFinancialInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Varud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsInventories", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pohivarad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsFixedAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pikaajalised_nouded' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLongTermReceivables", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pikaajalised_finantsinvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLongTermFinancialInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Kinnisvarainvesteeringud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsRealEstateInvestments", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Materiaalne_pohivara' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsTangibleAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Immateriaalne_pohivara' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsIntangibleAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Varad_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsTotalAssets", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Lyhiajalised_kohustused' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsShortTermLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Lyhiajalised_volad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsShortTermDebts", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Lyhiajalised_laenud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsShortTermLoans", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pikaajalised_kohustused' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLongTermLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pikaajalised_volad' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLongTermDebts", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Pikaajalised_laenud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLongTermLoans", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Kohustused_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsTotalLiabilities", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Omakapital' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsEquity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Kohustused_Omakapital_kokku' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsLiabilitiesAndEquity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Myygitulu' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsSalesRevenue", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Muud_aritulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsOtherOperatingIncome", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Muud_arikulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsOtherOperatingExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Toojoukulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsPersonnelExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Arikasum' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsOperatingProfit", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Intressikulud' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsInterestExpenses", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ds_Aruandeaasta_kasum' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "dsNetProfit", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'ettevõtete_arv_sektoris' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "numberOfCompaniesInSector", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'skoor_1_likviidsus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "score1Liquidity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'skoor_2_efektiivsus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "score2Efficiency", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'skoor_3_struktuur' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "score3Structure", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'skoor_4_tasuvus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "score4Profitability", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'y_skoor_1_likviidsus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "yScore1Liquidity", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'y_skoor_2_efektiivsus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "yScore2Efficiency", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'y_skoor_3_struktuur' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "yScore3Structure", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'y_skoor_4_tasuvus' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "yScore4Profitability", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'SKP_jooksevhindades' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "GDPCurrentPrices", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'SKP_nominaalkasv' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "GDPNominalGrowth", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'SKP_pysivhindades' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "GDPPersistentPrices", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'SKP_reaalkasv' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "GDPRealGrowth", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Tarbijahinnaindeks' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "ConsumerPriceIndex", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Keskmine_kuupalk' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "AverageMonthlyWage", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Palgakasv' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "WageGrowth", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'Tooviljakuse_kasv' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "LaborProductivityGrowth", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_likviidsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassLiquidityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_efektiivsus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassEfficiencyPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_struktuur_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassStructurePercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_tasuvus_protsentiil' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassProfitabilityPercentile", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'sektor_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "sectorProfitabilityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'klaster_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "clusterProfitabilityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'KOV_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "municipalityProfitabilityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyProfitabilityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'maakond_x_klaster_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "countyXClusterProfitabilityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_likviidsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassLiquidityN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_efektiivsus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassEfficiencyN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_struktuur_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassStructureN", void 0);
__decorate([
    (0, ts_jackson_1.JsonProperty)({ path: 'suurusklass_tasuvus_n' }),
    __metadata("design:type", Number)
], CompanyData.prototype, "companySizeClassProfitabilityN", void 0);
