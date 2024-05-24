private async predictGrowth(company: CompanyData): Promise<Prediction> {
    const layer = await this.loadModel(company.Klaster, Indicator.Growth);

    const growthData = getGrowthData();
    const array3D = growthData.clamp().toArray3D();

    const flatArray = [...array3D.x, ...array3D.y, ...array3D.z];
    console.log("Array Values: ", flatArray);
    const x = tf.tensor(flatArray, [1, 12, 3]);
    // // Instead of above row - I think we need to create a tensor from the flattened array
    // const x = tf.tensor(flatArray, [36]);
    // const prediction = await layer.predict(x);
    // // and then reshape the tensor to [12, 3]
    // const reshapedX = x.reshape([12, 3]);
    // reshapedX.print();
    // const prediction = await layer.predict(reshapedX);
    // // and then move on as you do
    const dataSync = (prediction as tf.Tensor).dataSync();
    console.log("Result: ", dataSync);

    return {
      x: dataSync[0],
      y: dataSync[1],
      z: dataSync[2],
    };
  }