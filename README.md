# stat-ee

## Company Registration Number Analysis API

This repository implements an API that analyzes company registration numbers and returns a JSON response.

**Functionality:**

* Listens for HTTP GET requests on the `app.com/?reg_nr=<registration_number>` endpoint (no authorization required).
* Retrieves all 64 fields for the last available year (defaulting to the previous year) from the `norm_inputvector` table in the database based on the provided company registration number.
* Handles missing data by replacing it with 0.
* Caps each retrieved value based on a separate table defining maximum/minimum values for each field.
* Selects four relevant models for the company's sector (e.g., `k4_1`, `k4_2`, etc.).
* Subtracts the corresponding `mea` value from each retrieved field based on the chosen models.
* Divides each field by the corresponding `sds` value based on the chosen models.
* Converts the processed data into a TensorFlow tensor using `tf.tensor2d` and `tf.loadLayersModel`.
* Uses the loaded model (`correct_model_on_disk`) to predict a result based on the processed data.
* Returns the prediction result as a JSON response.

**Dependencies:**

* This API utilizes libraries like:
    * TensorFlow.js (`tfjs`) for machine learning prediction.
    * Express.js (`express`) for the API server.

**Running the API:**

1. Ensure the required models (`k4_1`, etc.) are accessible.
2. Run the Node.js application to start the API server. 

**Example Usage:**

```
GET http://localhost:80000/analyze?reg_nr=123
```

**Response:**

```json
{
    "registCo": 0,
    "model1y1": 0,
    "model1y2": 0,
    "model1y3": 0,
    "model2y1": 0,
    "model2y2": 0,
    "model2y3": 0,
    "model3y1": 0,
    "model3y2": 0,
    "model3y3": 0,
    "model4y1": 0,
    "model4y2": 0,
    "model4y3": 0,
    "sektorNo": 0,
    "size_min": 0,
    "size_max": 0,
    "county": 0,
    "kov": 0,
    "LVKK": 0,
    "MVK": 0,
    "RK": 0,
    "LLLK": 0,
    "LLVK": 0,
    "LLOK": 0,
    "VaKK": 0,
    "LVKaK": 0,
    "VKK": 0,
    "VK": 0,
    "KOS": 0,
    "LKKKK": 0,
    "PKKKK": 0,
    "AKM": 0,
    "PKM": 0,
    "ROA": 0,
    "ROE": 0,
    "EffSect": 0, 
    "EffSize": 0,
    "EffCount": 0,
    "LiqSect": 0,
    "LiqSize": 0,
    "LiqCount": 0,
    "LevSect": 0,
    "LevSize": 0,
    "LevCount": 0,
    "RetSect": 0,
    "RetSize": 0,
    "RetCount": 0,
    "EmpSect": 0,
    "EmpSize": 0,
    "EmpCount": 0,
}

```
