const ContactModel = require("../models/contact");

const Controllers = {};

Controllers.getUser = function (req, res) {
  const searchid = req.params.id;
  /*   return ContactModel.findById(searchid).then((result)=>{return res.status(200).send(result)
    }).catch((err)=>{return res.status(404).send("error in fetch")})*/
};

Controllers.createUser = async function (req, res) {
  const data = req.body;
  /*  try{
    let result=await ContactModel.create({
        fname:data.fname,
        email:data.email,
        phone:data.phone
    })
    return res.status(200).send(result)
}
catch(err){
    return res.status(404).send(err)
}*/
  return ContactModel.create({
    fname: data.fname,
    email: data.email,
    phone: data.phone,
  }).then((res) => {
    return res.status(200).send(res);
  });
};

Controllers.create = function (req, res) {
  console.log(req.body);
  return ContactModel.create(req.body, function (err, contact) {
    if (err) {
      return res.status(500).end();
    } else {
      return res.json(contact);
    }
  });
};

module.exports = Controllers;
