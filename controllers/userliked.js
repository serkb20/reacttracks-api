
const handleUserLiked =(req, res, db, bcrypt)=>{
	const {email} = req.body;
    db.select('*').from('liked').where(
        'useremail','=', email
    )
    .then(data => {
        res.json(data);
    })
}

 module.exports = {
   handleUserLiked: handleUserLiked
 };