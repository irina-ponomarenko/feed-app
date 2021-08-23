import dotenv from "dotenv";

import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import router from "./router/index.js";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

// app.post('/api/create-new-user',  async (req, res) => {
//     let { name, login, password } = req.body;
//
//
//     try {
//         const result = await Users.findOne({login});
//         if(result){
//             return res.json({
//                 message: "*Под этим email уже существует пользователь"
//             });
//         }
//
//         try {
//             await Users.create({
//                 name,
//                 login,
//                 password
//             });
//
//             return res.json({
//                 status: 200
//             });
//         } catch (error){
//             console.log(error);
//             return res.json({
//                 error: 502
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         return res.json({
//             error: 502
//         });
//     }

   //
   // Users
   //      .findOne({
   //         email
   //      },  (error, result) => {
   //          if(result === null) {
   //              Users
   //                  .create({
   //                      name,
   //                      email,
   //                      login,
   //                      password
   //                  }, error => {
   //                      if (error) {
   //                          console.log(error);
   //                          return res.json({
   //                              status: 502
   //                          })
   //                      }
   //                      return res.json( {
   //                          status: 200
   //                      });
   //                  });
   //          }
   //          else {
   //              console.log("Такой пользователь уже есть");
   //              return res.json({
   //                  message: "*Под этим email уже существует пользователь"
   //              });
   //          }
   //      });

// });


app.listen(PORT, () => {
    console.log(`server started on PORT = ${PORT}`);
});

