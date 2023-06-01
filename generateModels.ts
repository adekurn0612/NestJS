// import { IConfig, ModelBuilder, DialectPostgres } from 'sequelize-typescript-generator';
// import "dotenv/config"

// (async () => {
//     const config: IConfig = {
//         connection: {
//             dialect: 'postgres',
//             database: process.env.DB_NAME,
//             username: process.env.DB_USER,
//             password: process.env.DB_PASSWORD
//         },
//         metadata: {
//             indices: true,
//             case: 'CAMEL',
//         },
//         output: {
//             clean: true,
//             outDir: 'models2'
//         },
//         strict: true,
//     };

//     const dialect = new DialectPostgres();

//     const builder = new ModelBuilder(config, dialect);

//     try {
//         await builder.build();
//     }
//     catch(err) {
//         console.error(err);
//         process.exit(1);
//     }    
// })();