export default {
    port: 3000,
    dbURI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.rleerrp.mongodb.net/curso_udemy_typescript_matheusbattisti?retryWrites=true&w=majority`,
    env: "development",
};
