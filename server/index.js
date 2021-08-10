import express from 'express';
import bodyParser from 'body-parser';
import Users from "./db/schemas/users.js";


const app = express();

app.use(
    bodyParser.json()
);

app.post('/api/create-new-user',  async (req, res) => {
    let { name, email, login, password } = req.body;


    try {
        const result = await Users.findOne({email});
        if(result){
            return res.json({
                message: "*Под этим email уже существует пользователь"
            });
        }

        try {
            await Users.create({
                name,
                email,
                login,
                password
            });

            return res.json({
                status: 200
            });
        } catch (error){
            console.log(error);
            return res.json({
                error: 502
            });
        }
    } catch (error) {
        console.log(error);
        return res.json({
            error: 502
        });
    }

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

});

app.listen(7000, () => {
    console.log('server is started');
});