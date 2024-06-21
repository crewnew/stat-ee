import * as tf from "@tensorflow/tfjs";
import { ModelIndicator } from "./model_indicator";
import ClusterEntity from "../entities/cluster_entity";
import PredictionResponse from "../entities/prediction_response";
import { Prediction } from "../utils/interfaces";
import { port } from "../app";

import { Yearly, getMonthlyArray, getNormYearMean, getNormYearSds } from "../data_sources/remote_source";
import { logger } from "../utils";



// Note: LoadLayersModel is only loading the model from a url, not from a local file
export async function loadModel(
  cluster: string,
  model: ModelIndicator
): Promise<tf.LayersModel> {
  return tf.loadLayersModel(
    `http://localhost:${port}` +
    "/static/" +
    model +
    "_" +
    cluster +
    "/model.json"
  );
}


export async function getYearlyData(yearly: Yearly): Promise<Array<number>> {
  // Retrieves the cluster values for the company.
  const cluster = ClusterEntity.fromYearly(yearly);

  const clusterName = yearly.klaster;
  // Subtracts the corresponding `mea` value from each retrieved field based on the cluster.
  const normYearMean = await getNormYearMean(clusterName, yearly.aasta);
  const clusterYearMean = ClusterEntity.fromNormYearMean(normYearMean);
  const substractedData = clusterYearMean.substract(cluster);

  // Divides each field by the corresponding `sds` value based on the cluster.
  const normYearSds = await getNormYearSds(clusterName, yearly.aasta);
  const clusterYearSds = ClusterEntity.fromNormYearSds(normYearSds);
  const dividedData = clusterYearSds.divide(substractedData);

  return Object.values(dividedData);
}





export async function computeYearly(yearly: Yearly): Promise<PredictionResponse> {

  const response = new PredictionResponse();

  const liquidity = await this.predict(yearly, ModelIndicator.Liquidity);
  response.model1y1 = liquidity.x;
  response.model1y2 = liquidity.y;
  response.model1y3 = liquidity.z;
  const profitability = await this.predict(yearly, ModelIndicator.Profitability);
  response.model2y1 = profitability.x;
  response.model2y2 = profitability.y;
  response.model2y3 = profitability.z;
  const efficiency = await this.predict(yearly, ModelIndicator.Efficiency);
  response.model3y1 = efficiency.x;
  response.model3y2 = efficiency.y;
  response.model3y3 = efficiency.z;
  const structure = await this.predict(yearly, ModelIndicator.Structure);
  response.model4y1 = structure.x;
  response.model4y2 = structure.y;
  response.model4y3 = structure.z;
  const growth = await this.predict(yearly, ModelIndicator.Growth);
  response.model5y1 = growth.x;
  response.model5y2 = growth.y;
  response.model5y3 = growth.z;

  return response;
}


export async function predictGrowth(yearly: Yearly): Promise<Prediction> {
  // Load the pre-trained model layer for the specified cluster and indicator.
  const layer = await this.loadModel(yearly.klaster, ModelIndicator.Growth);
  // Fetch the growth data required for prediction.
  const flatArray = await getMonthlyArray(yearly.klaster);
  // logger.debug("numbers", flatArray);
  // Create a tensor from the flattened array.
  const x = tf.tensor(flatArray, [36]);
  // Reshape the tensor to the required shape [1, 12, 3].
  const reshapedX = x.reshape([1, 3, 12]);

  // logger.debug("transformed", reshapedX);
  // Transpose the tensor to match the expected shape [null, 12, 3].
  const transposedX = reshapedX.transpose([0, 2, 1]);

  // logger.debug("transposed", transposedX);
  // Make a prediction using the model layer and the transposed tensor.
  const prediction = await layer.predict(transposedX);
  // Synchronize the prediction data to a typed array.
  const dataSync = (prediction as tf.Tensor).dataSync();

  // Return the prediction results as an object with x, y, and z values.
  // console.log("result", dataSync);

  // Dispose of the tensors to free up memory.
  x.dispose()
  reshapedX.dispose()
  transposedX.dispose()
  tf.disposeVariables();
  (prediction as tf.Tensor).dispose();
  // Print the memory usage to the console.
  logger.debug('memory', tf.memory());
  return {
    x: dataSync[0],
    y: dataSync[1],
    z: dataSync[2],
  };
}

export async function predict(
  yearly: Yearly,
  indicator: ModelIndicator
): Promise<Prediction> {
  if (indicator === ModelIndicator.Growth) {
    return this.predictGrowth(yearly);
  }

  const data = this.prepareData(yearly);
  const tensor = await tf.tensor2d(data, [1, 64]);
  const loadedModel = await this.loadModel(yearly.klaster, indicator);

  // This has to be awaited
  const prediction = await (loadedModel.predict(tensor) as tf.Tensor);
  const dataSync = prediction.dataSync();

  // Dispose of the tensors to free up memory.
  prediction.dispose();
  tensor.dispose();
  loadedModel.dispose();

  return {
    x: dataSync[0],
    y: dataSync[1],
    z: dataSync[2],
  };
}