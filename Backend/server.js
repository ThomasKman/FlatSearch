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
//                                                                                                          //
const express = require('express');                                                                         //
const app = express();                                                                                      //
const Joi = require('joi');                                                                                 //
const port = process.env.PORT || 4000;                                                                      //
app.use(express.json());                                                                                    //
                                                                                                            //
//Test data (can be deleted later) **************//                                                         //
const apartments =[                              //                                                         //
    { id: 1, name: 'Wohnung1'},                  //                                                         //
    { id: 2, name: 'Wohnung2'},                  //                                                         //
    { id: 3, name: 'Wohnung3'},                  //                                                         //
];                                               //                                                         //
//***********************************************//                                                         //
//                                                                                                          //
//** Handling get main page request *************************************************************************/
//                                                                                                          //
app.get('/', (req, res) => {                                                                                // req = request, res = response 
    res.send('Hallo Welt!');                                                                                //
});                                                                                                         //
//                                                                                                          //
//** Handling get all apartments request ********************************************************************/
//                                                                                                          //
app.get('/api/apartments', (req, res) =>{                                                                   // 
    //TODO: get list from database                                                                          //
    //Maybe sort function ?                                                                                 //
    //Query = req.query .... (/api/apartments?sortBy=name)                                                  //
    res.send(apartments);                                                                                   // send all objects
});                                                                                                         //
//                                                                                                          //
//** Handling get specific apartment request ****************************************************************/
//                                                                                                          //
app.get('/api/apartments/:id', (req, res) =>{                                                               // 
                                                                                                            //TODO: get object from database
                                                                                                            //ID = req.params.id
                                                                                                            //
    const apartment = apartments.find(a => a.id === parseInt(req.params.id));                               // find object
                                                                                                            //
    if(!apartment)                                                                                          // if object was not found 
    return res.status(404).send("The apartment with the given id was not found");                           // return 404 with err 
                                                                                                            // else
    res.send(apartment);                                                                                    // send object
});                                                                                                         //
//                                                                                                          //
//** Handling post apartment request ************************************************************************/
//                                                                                                          //
app.post('/api/apartments', (req,res) => {                                                                  //
    const {error} = validateApartment(req.body);                                                            //
    if (error) return res.status(400).send(schemaresult.error.details[0].message);                          //
                                                                                                            //
    const apartment = {                                                                                     // create a new object
        id: apartments.length +1 ,                                                                          // id should be given from database later
        name: req.body.name,                                                                                // name and other data taken from body request
    };                                                                                                      //
    apartments.push(apartment);                                                                             // add it to the test data
    res.send(apartment);                                                                                    // return object with the new id
});                                                                                                         //
//                                                                                                          //
//** Handling post apartment request ************************************************************************/  
app.put('/api/apartments/:id', (req, res) => {                                                              //
                                                                                                            // Look up the apartment            
    const apartment = apartments.find(a => a.id === parseInt(req.params.id));                               // find object (TODO: find in database)
    if(!apartment)                                                                                          // if object not existing 
    return res.status(404).send("The apartment with the given id was not found");                           // return 404 with err 
                                                                                                            //
    const {error} = validateApartment(req.body);                                                            // Validate
    if (error) return res.status(400).send(schemaresult.error.details[0].message);                          // if invalid, return 400 - Bad request 
                                                                                                            //
                                                                                                            // everything fine
    apartment.name = req.body.name;                                                                         // update info
    res.send(apartment);                                                                                    // return the updated object
});                                                                                                         //
//                                                                                                          //
//** Handling delete apartment request **********************************************************************/
//                                                                                                          //
app.delete('/api/apartments/:id', (req, res) => {                                                           //
    const apartment = apartments.find(a => a.id === parseInt(req.params.id));                               // Look up the apartment
                                                                                                            //
    if(!apartment)                                                                                          // if apartment not found 
    return res.status(404).send("The apartment with the given id was not found");                           // return 404 with err 
                                                                                                            //
    const index = apartments.indexOf(apartment);                                                            // Delete
    apartments.splice(index, 1);                                                                            //
                                                                                                            //
    res.send(apartment);                                                                                    // Return the object in success
});                                                                                                         //
//                                                                                                          //
//** Input Validation ***************************************************************************************/
//                                                                                                          //
function validateApartment (apartment) {                                                                    //
                                                                                                            //
    const schema = Joi.object({                                                                             // schema rules (TODO: to be updated !)
        name: Joi.string()                                                                                  //
            .alphanum()                                                                                     //
            .min(3)                                                                                         //
            .max(30)                                                                                        //
            .required()                                                                                     //
    });                                                                                                     //
                                                                                                            //
    return schema.validate(apartment);                                                                      // 
}                                                                                                           //
                                                                                                            //
                                                                                                            //
//** Listen *************************************************************************************************/
app.listen(port, () => console.log(`Listing on port ${port}... `));                                         //
//                                                                                                          //
// ******************************************************************************************************** //