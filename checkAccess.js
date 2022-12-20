const checkAccess = (validRoles) => {
    return (req, res, next) => {
        if (!req.body.userRole) {
            return res.status(400).json({"message": "userRole missing"})
        }
        if (!validRoles.includes(req.body.userRole)) {
            return res.status(403).json({"message": "user not authorized"})
        }
        next()
    }
}

module.exports = checkAccess