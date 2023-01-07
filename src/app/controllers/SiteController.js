
class SiteControllers {
    home(req, res) {
        res.render('home')
    }

    show(req, res)
    {
        try{
            
        const getAdmin = async ()=> {
        try{
        const pool = await poolPromise
        const result = await pool.query("select * from AdminQly")
        console.log(result)
        } catch(error){}
        }

        } catch(err){

        }
    }

}

module.exports = new SiteControllers();