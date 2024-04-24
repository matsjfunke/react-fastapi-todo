# React frontend with FastAPI backend

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

# How to start React

1. [install node.js](https://nodejs.org/en/download)
2. use npx create the react app
    - npx is a command-line tool that allows you to run Node.js packages without installing them globally.
    ```bash
    npx create-react-app my-react-app
    ```
