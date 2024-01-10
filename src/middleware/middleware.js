const jwt = require('jsonwebtoken');

const secretKey = 'osnilWebSolution';

function generateToken(payload, secretKey) {
  const token = jwt.sign(payload, secretKey);
  return token;
}
const payload = {
  websiteName: 'Brandemy',
  username: 'aliRazaQueshi',
  publication_id : 2
};

const generatedToken = generateToken(payload, secretKey);


const authentication = async (req, res, next) => {
    try {
        
        const authHeader = req.headers.authorization;
       
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ status: false, data: "Token must be provided" });
        }
        const token = authHeader.split(" ")[1];
        
        jwt.verify(token,secretKey, (err, decoded) => {
            if (err) {
               return res.status(401).json({ status: false, message: "JWT verification failed", error: err.message });
            }

            req.decoded = decoded;
            next();
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ status: false, message: "Internal Server Error", error: err.message });
    }
};


module.exports = {generatedToken,authentication}
