// ******************************************************************************************************** // Comments ↓↓↓↓↓↓
//                                                                                                          // 
//                                                                                                          //  TODO List : 
// Server implementation                                                                                    //  1. Database integration
//                                                                                                          //  
//                                                                                                          //
//  author  : Yaman Alsayed                                                                                 //
//  os      : linux                                                                                         //
//  purpose : Website Backend REST API                                                                      //
//  Version : 0.00.0001                                                                                     //
//                                                                                                          //
// ** Version Info **************************************************************************************** //
//                                                                                                          //
/*                                                                                                          //                                 
 *  0.00.0001   :   added : First bild (beta)                                                               //
 */                                                                                                         //
//                                                                                                          //
// ******************************************************************************************************** //
//                                   
const express = require('express');
const app = express();


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hallo Welt!');
});

// Api routes
// separate api modules for cleaner file
app.use('/api/apartments', require('./routes/api/apartments')); 

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listing on port ${port}... `));