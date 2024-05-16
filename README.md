# stat-ee

## Company Registration Number Analysis API

This repository implements an API that analyzes company registration numbers and returns a JSON response.

**Functionality:**

* Listens for HTTP GET requests on the `${SERVER_URL}/eestat/1/elujoud/:id` endpoint (no authorization required).
* Retrieves all 64 fields for the last available year (defaulting to the previous year) from the `norm_inputvector` table in the database based on the provided company registration number.
* Handles missing data by replacing it with 0.
* Caps each retrieved value based on a separate table defining maximum/minimum values for each field.
* Selects four relevant models for the company's sector (e.g., `k4_1`, `k4_2`, etc.).
* Subtracts the corresponding `mea` value from each retrieved field based on the chosen models.
* Divides each field by the corresponding `sds` value based on the chosen models.
* Converts the processed data into a TensorFlow tensor using `tf.tensor2d` and `tf.loadLayersModel`.
* Uses the loaded model (`correct_model_on_disk`) to predict a result based on the processed data.
* Returns the prediction result as a JSON response.

**Converting .h5 to .json:**
'''
tensorflowjs_converter \              
    --input_format=keras \
    ./models/kasvu_k4_1.h5 \
    ./models/kasvu_k4_1
'''

**Dependencies:**

* This API utilizes libraries like:
    * TensorFlow.js (`tfjs`) for machine learning prediction.
    * Express.js (`express`) for the API server.

**Running the API:**

1. Ensure the required models (`k4_1`, etc.) are accessible.
2. Run the Node.js application to start the API server. 

**Example Usage:**

```
GET http://localhost:8000/?reg_nr=123
```

**Response:**

```json
{
   "registCo":32,
   "model1y1":0.4832223653793335,
   "model1y2":0.455415278673172,
   "model1y3":0.06136232241988182,
   "model2y1":0.18047143518924713,
   "model2y2":0.5972921252250671,
   "model2y3":0.22223643958568573,
   "model3y1":0.5112183690071106,
   "model3y2":0.39095768332481384,
   "model3y3":0.09782394766807556,
   "model4y1":0.17909571528434753,
   "model4y2":0.6916017532348633,
   "model4y3":0.12930254638195038,
   "model5y1":0,
   "model5y2":0,
   "model5y3":0,
   "sektorNo":0,
   "size_min":1,
   "size_max":9,
   "county":37,
   "kov":784,
   "LVKK":0.05535464302,
   "MVK":0,
   "RK":2.025848142,
   "LLLK":0,
   "LLVK":0.01579196217,
   "LLOK":0,
   "VaKK":0.3202021362,
   "LVKaK":4.020719049,
   "VKK":0,
   "VK":0.5071439786,
   "KOS":0,
   "LKKKK":1,
   "PKKKK":0,
   "AKM":0.2808769264,
   "PKM":0.3757648571,
   "ROA":0.02586264657,
   "ROE":0.04314192205,
   "Eff_p_Sect":0.0797271167,
   "Eff_n_Sect":0,
   "Eff_p_Size":0,
   "Eff_n_Size":0,
   "Eff_p_Count":0,
   "Eff_n_Count":0,
   "Liq_p_Sect":0,
   "Liq_n_Sect":0,
   "Liq_p_Size":0,
   "Liq_n_Size":0,
   "Liq_p_Count":0,
   "Liq_n_Count":0,
   "Lev_p_Sect":0,
   "Lev_n_Sect":0,
   "Lev_p_Size":0,
   "Lev_n_Size":0,
   "Lev_p_Count":0,
   "Lev_n_Count":0,
   "Ret_p_Sect":0,
   "Ret_n_Sect":0,
   "Ret_p_Size":0,
   "Ret_n_Size":0,
   "Ret_p_Count":0,
   "Ret_n_Count":0,
   "Emp_p_Sect":0,
   "Emp_n_Sect":0,
   "Emp_p_Size":0,
   "Emp_n_Size":0,
   "Emp_p_Count":0,
   "Emp_n_Count":0
}
```
