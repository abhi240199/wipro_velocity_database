const Contact = require("../models/contact");

module.exports.getContact = async function (req, res) {
  var contact = await Contact.find();
  return res.render("contact_home", {
    contact_manager: contact,
  });
};

module.exports.addContact = async function (req, res) {
  console.log(req.body);
  var contact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  return res.redirect("/contact");
};

// module.exports.addContact = function (req, res) {
//   console.log(req.body);
//   return Contact.create(req.body, function (err, contact) {
//     if (err) {
//       return res.status(500).end();
//     } else {
//       return res.json(contact);
//     }
//   });
// };
module.exports.deleteContact = async function (req, res) {
  console.log(req.body);
  var contact = await Contact.findByIdAndDelete(req.params.id);
  return res.redirect("/contact");
};
