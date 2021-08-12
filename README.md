- ### Front end - Url Shortner

  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [React-router](https://github.com/ReactTraining/react-router)- Complete routing library for React

    - Bootstrap NPM Libraries 
    [npm install bootstrap]
    [npm install react-bootstrap-table-next --save]
    [npm install react-bootstrap-table2-paginator --save]
    [npm install react-bootstrap-table2-toolkit --save]
    [npm install react-bootstrap-table2-filter --save]
    [npm install react-bootstrap-table2-toolkit --save] 



#### Run  frontend end
```
- Move to app folder

# Install dependencies
npm install

# Start  client
npm start

```
#### Run  frontend end using Docker 
```
# Build Image

docker build -t  Url_shortener_client:latest .

```

```
# Run container

 docker run --name nameofyourchoice -d -p 3000:3000 Url_shortener_client:latest
 ```