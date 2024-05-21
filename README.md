# comunication from react to fastapi

- this api.js file tells frontend where backend is located
    ```javascript
    /*
    api.js creates an Axios instance named api with a base URL of http://localhost:8000,
    which can be imported / used throughout the frontend app 
    to send HTTP requests to the specified server.
    */
    import axios from 'axios'

    const api = axios.create({
        baseURL: 'http://localhost:8000',
    })

    export default api;
    ```

- Cross-Origin Resource Sharing allows React frontend to access backend endpoints
    ```python
    origins = [
        # react app runs there
        "http://localhost:3000"
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )
    ```


# starting the app

```bash
cd fastapi-backend
# create env and install dependencys
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
# start server
python main.py

# start frontend
cd react-frontend
npm start
```
