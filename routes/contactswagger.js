/**
 *  @swagger
 *   components:
 *     schemas:
 *       Contact:
 *         type: object
 *         required:
 *           - fname
 *           - email
 *           - phone
 *         properties:
 *           fname:
 *             type: string
 *             description: fname of the user
 *           email:
 *             type: string
 *             description: email of the user
 *           phone:
 *             type: string
 *             description: mobile number
 *         example:
 *            fname: Cary
 *            email: carry@gmail.com
 *            phone: 293892382
 */

/**
* @swagger
{id}:
*     get:
*       summary: Gets a book by id
*       tags: [Contacts]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The user id
*       responses:
*         "200":
*           description: The list of user.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Contact'
*         "404":
*           description: user not found.
*/
/**
 * @swagger
 *paths:
 *  "/create":
 *    post:
 *      summary: add a new user
 *      requestBody:
 *        description: required a desc
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              "$ref": "#/components/schemas/Contact"
 *      responses:
 *        '201':
 *          description: Created
 */
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/contactSwagger");

router.get("/:id", Controllers.getContact);
router.post("/create", Controllers.createUser);
module.exports = router;
