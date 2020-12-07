
const handleLikedCheck =(req, res, db, bcrypt)=>{
    const {id, useremail}= req.body;
    db.select('track_id').from('liked').where({
        track_id: id,
        useremail: useremail
    })
    .then(data=> {

        if(data.length > 0){
            res.json(false);
        }
        if(data.length === 0){
            res.json(true);
        }
    })
}

 module.exports = {
   handleLikedCheck: handleLikedCheck
 };