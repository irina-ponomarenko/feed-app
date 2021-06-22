import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/feedDB', { //подключаемся к базе
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).catch((error) => {
    console.log(error);
});


export default mongoose;